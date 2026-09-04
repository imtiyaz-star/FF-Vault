const express = require("express");
const path = require("path");
const Database = require("better-sqlite3");
const session = require("express-session");

const app = express();

const PORT = process.env.PORT || 3000;


/* =========================
   SESSION
========================= */

app.use(
    session({
        secret:
            process.env.SESSION_SECRET ||
            "change-this-secret",

        resave: false,

        saveUninitialized: false,

        cookie: {
            httpOnly: true,
            sameSite: "lax",
            secure: false
        }
    })
);


/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());

app.use(
    express.static(
        path.join(__dirname)
    )
);


/* =========================
   DATABASE
========================= */

const db = new Database("ff-vault.db");

db.prepare(`
    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        nickname TEXT NOT NULL,
        selected_item TEXT NOT NULL,
        price TEXT NOT NULL,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`).run();

console.log("Database connected");


/* =========================
   WEBSITE
========================= */

app.get("/", (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "index.html"
        )
    );

});


/* =========================
   ADMIN DETAILS
========================= */

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "9594078817";


/* =========================
   ADMIN PROTECTION
========================= */

function requireAdmin(req, res, next) {

    if (!req.session.isAdmin) {

        return res.status(401).json({
            success: false,
            message: "Admin login required"
        });

    }

    next();
}


/* =========================
   ADMIN LOGIN
========================= */

app.post(
    "/api/admin/login",
    (req, res) => {

        const {
            username,
            password
        } = req.body;


        if (
            !ADMIN_USER ||
            !ADMIN_PASSWORD ||
            username !== ADMIN_USER ||
            password !== ADMIN_PASSWORD
        ) {

            return res.status(401).json({
                success: false,
                message: "Invalid login"
            });

        }


        req.session.isAdmin = true;


        res.json({
            success: true
        });

    }
);


/* =========================
   ADMIN LOGOUT
========================= */

app.post(
    "/api/admin/logout",
    (req, res) => {

        req.session.destroy(() => {

            res.json({
                success: true
            });

        });

    }
);


/* =========================
   SAVE ORDER
========================= */

app.post(
    "/api/orders",
    (req, res) => {

        console.log(
            "ORDER DATA RECEIVED:",
            req.body
        );


        const {
            email,
            nickname,
            selectedItem,
            price
        } = req.body;


        if (
            !email ||
            !nickname ||
            !selectedItem ||
            !price
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Email, nickname, item aur price required hain"

            });

        }


        try {

            const result =
                db.prepare(`
                    INSERT INTO orders
                    (
                        email,
                        nickname,
                        selected_item,
                        price
                    )
                    VALUES (?, ?, ?, ?)
                `).run(
                    email,
                    nickname,
                    selectedItem,
                    price
                );


            console.log(
                "ORDER SAVED:",
                result.lastInsertRowid
            );


            res.json({

                success: true,

                orderId:
                    result.lastInsertRowid

            });


        } catch (error) {

            console.error(
                "DATABASE ERROR:",
                error.message
            );


            res.status(500).json({

                success: false,

                message:
                    "Could not save order"

            });

        }

    }
);


/* =========================
   GET ORDERS
   ADMIN ONLY
========================= */

app.get(
    "/api/orders",
    requireAdmin,
    (req, res) => {

        try {

            const orders =
                db.prepare(`
                    SELECT
                        id,
                        email,
                        nickname,
                        selected_item,
                        price,
                        status,
                        created_at
                    FROM orders
                    ORDER BY id DESC
                `).all();


            res.json(orders);


        } catch (error) {

            console.error(
                "GET ORDERS ERROR:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Could not load orders"

            });

        }

    }
);


/* =========================
   UPDATE ORDER STATUS
   ADMIN ONLY
========================= */

app.patch(
    "/api/orders/:id/status",
    requireAdmin,
    (req, res) => {

        const {
            status
        } = req.body;


        const allowed = [
            "pending",
            "completed",
            "cancelled"
        ];


        if (
            !allowed.includes(status)
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid status"

            });

        }


        try {

            const result =
                db.prepare(`
                    UPDATE orders
                    SET status = ?
                    WHERE id = ?
                `).run(
                    status,
                    req.params.id
                );


            if (
                result.changes === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Order not found"

                });

            }


            res.json({
                success: true
            });


        } catch (error) {

            console.error(
                "STATUS UPDATE ERROR:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Could not update status"

            });

        }

    }
);


/* =========================
   DELETE ORDER
   ADMIN ONLY
========================= */

app.delete(
    "/api/orders/:id",
    requireAdmin,
    (req, res) => {

        try {

            const result =
                db.prepare(`
                    DELETE FROM orders
                    WHERE id = ?
                `).run(
                    req.params.id
                );


            if (
                result.changes === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Order not found"

                });

            }


            console.log(
                "ORDER DELETED:",
                req.params.id
            );


            res.json({

                success: true,

                message:
                    "Order deleted"

            });


        } catch (error) {

            console.error(
                "DELETE ORDER ERROR:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Could not delete order"

            });

        }

    }
);


/* =========================
   START SERVER
========================= */

 app.listen(process.env.PORT || 10000, '0.0.0.0', () => {
    console.log(`Server running on port ${process.env.PORT || 10000}`);
});


