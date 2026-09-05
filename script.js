/* =========================================================
   FF RARE VAULT - script.js
   ========================================================= */


/* =========================
   COLLECTION DATA
========================= */

const collections = {

    rares: [
        ["Arctic Blue Bundle", "LEGENDARY", "images/Rares-Bundles.png", "₹150"],
        ["Zombie Samurai", "RARE", "images/Rares-Bundles.png", "₹80"],
        ["Knight Clown", "RARE", "images/Rares-Bundles.png", "₹50"],
        ["Angelic Bundle", "EPIC", "images/Rares-Bundles.png", "₹50"],
        ["Bunny Warrior", "RARE", "images/Rares-Bundles.png", "₹80"],
        ["Galaxy Dino", "EPIC", "images/Rares-Bundles.png", "₹80"],
        ["HipHop Bundle", "LEGENDARY", "images/Rares-Bundles.png", "₹99"],
        ["Shadow Red", "RARE", "images/Rares-Bundles.png", "₹80"],
        ["Sakura Bundle", "LEGENDARY", "images/Rares-Bundles.png", "₹150"]
    ],

    criminal: [
        ["Red Criminal", "LEGENDARY", "images/all-criminal.jpg", "₹100"],
        ["Blue Criminal", "LEGENDARY", "images/all-criminal.jpg", "₹150"],
        ["Green Criminal", "EPIC", "images/all-criminal.jpg", "₹100"],
        ["Purple Criminal", "EPIC", "images/all-criminal.jpg", "₹100"],
        ["Black Criminal", "LEGENDARY", "images/all-criminal.jpg", "₹150"]
    ],

    dino: [
        ["Galaxy Dino", "LEGENDARY", "images/all-galaxy-dino.jpg", "₹100"],
        ["Green Dino", "EPIC", "images/all-galaxy-dino.jpg", "₹150"],
        ["Blue Dino", "EPIC", "images/all-galaxy-dino.jpg", "₹100"],
        ["Pink Dino", "RARE", "images/all-galaxy-dino.jpg", "₹100"],
        ["Yellow Dino", "LEGENDARY", "images/all-galaxy-dino.jpg", "₹150"]
    ],

    guns: [
        ["EVO Gun 01", "LEGENDARY", "images/all-gun-1.png", "₹200"],
        ["EVO Gun 02", "LEGENDARY", "images/all-gun-1.png", "₹200"]
    ],

    emotes: [
        ["Rare Emote 01", "EPIC", "images/all-emote-1.png", "₹50"],
        ["Rare Emote 02", "LEGENDARY", "images/all-emote-1.png", "₹80"],
        ["Rare Emote 03", "EPIC", "images/all-emote-1.png", "₹60"],
        ["Rare Emote 04", "LEGENDARY", "images/all-emote-1.png", "₹100"]
    ],

    entryEmotes: [
        ["Entry Emote 01", "EPIC", "images/all-entryemotes-1.png", "₹60"],
        ["Entry Emote 02", "LEGENDARY", "images/all-entryemotes-1.png", "₹80"],
        ["Entry Emote 03", "EPIC", "images/all-entryemotes-1.png", "₹70"],
        ["Entry Emote 04", "LEGENDARY", "images/all-entryemotes-1.png", "₹100"]
    ],

    gloo: [
        ["Gloo Wall 01", "RARE", "images/all-gloo-1.png", "₹50"],
        ["Gloo Wall 02", "EPIC", "images/all-gloo-1.png", "₹80"],
        ["Gloo Wall 03", "LEGENDARY", "images/all-gloo-1.png", "₹100"],
        ["Gloo Wall 04", "EPIC", "images/all-gloo-1.png", "₹70"]
    ],

    grenade: [
        ["Grenade Skin 01", "RARE", "images/all-grenade-1.png", "₹50"],
        ["Grenade Skin 02", "EPIC", "images/all-grenade-1.png", "₹70"],
        ["Grenade Skin 03", "LEGENDARY", "images/all-grenade-1.png", "₹90"],
        ["Grenade Skin 04", "EPIC", "images/all-grenade-1.png", "₹60"]
    ],

    diamonds: [
        ["1,000 Diamonds", "POPULAR", "images/all-diamond.png", "₹50"],
        ["5,000 Diamonds", "POPULAR", "images/all-diamond.png", "₹100"],
        ["10,000 Diamonds", "LEGENDARY", "images/all-diamond.png", "₹400"]
    ]

};


/* =========================
   GLOBAL VARIABLES
========================= */

let selectedItem = "";
let selectedPrice = "";

let buyerEmail = "";
let buyerNickname = "";

let orderId = null;

let countdownInterval = null;

let paymentItemName = "";
let paymentAmountValue = 0;


/* =========================
   PAYMENT SETTINGS
========================= */

const PAYMENT_UPI_ID = "mdmtiyaz562@okhdfcbank";
const PAYMENT_NAME = "FF Rare Vault";


/* =========================
   OPEN CATEGORY
========================= */

function openCategory(category) {

    const data = collections[category];

    if (!data) {
        console.error("Category not found:", category);
        return;
    }

    const collectionView = document.getElementById("collectionView");

    if (!collectionView) {
        console.error("collectionView not found");
        return;
    }

    collectionView.innerHTML = "";

    data.forEach((item) => {

        const itemName = item[0];
        const rarity = item[1];
        const image = item[2];
        const price = item[3];

        const safeItemName = itemName.replace(/'/g, "\\'");

        const card = document.createElement("div");

        card.className = "item-card";

        card.innerHTML = `
            <div class="item-image">
                <img src="${image}" alt="${itemName}">
            </div>

            <div class="item-info">

                <div class="item-rarity">
                    ${rarity}
                </div>

                <h3>${itemName}</h3>

                <div class="item-bottom">

                    <strong>${price}</strong>

                    <button
                        class="buy-btn"
                        onclick="openCheckout('${safeItemName}', '${price}')"
                    >
                        BUY NOW
                    </button>

                </div>

            </div>
        `;

        collectionView.appendChild(card);

    });

    collectionView.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================
   CHECKOUT MODAL
========================= */

function openCheckout(item, price) {

    selectedItem = item;
    selectedPrice = price;

    const checkoutItem =
        document.getElementById("checkoutItem");

    const checkoutPrice =
        document.getElementById("checkoutPrice");

    const checkoutTotal =
        document.getElementById("checkoutTotal");

    if (checkoutItem) {
        checkoutItem.textContent = item;
    }

    if (checkoutPrice) {
        checkoutPrice.textContent = price;
    }

    if (checkoutTotal) {
        checkoutTotal.textContent = price;
    }

    const modal =
        document.getElementById("checkoutModal");

    if (modal) {
        modal.classList.remove("hidden");
    }
}


/* =========================
   CLOSE CHECKOUT
========================= */

function closeCheckout() {

    const modal =
        document.getElementById("checkoutModal");

    if (modal) {
        modal.classList.add("hidden");
    }
}


/* =========================
   CONTINUE CHECKOUT
========================= */

function continueCheckout() {

    if (!selectedItem || !selectedPrice) {

        alert("Please select an item first.");

        return;
    }

    closeCheckout();

    openBuyForm(selectedItem, selectedPrice);
}


/* =========================
   BUY FORM
========================= */

function openBuyForm(item, price) {

    selectedItem = item;
    selectedPrice = price;

    const itemElement =
        document.getElementById("selectedItem");

    const priceElement =
        document.getElementById("selectedPrice");

    if (itemElement) {
        itemElement.textContent = item;
    }

    if (priceElement) {
        priceElement.textContent = price;
    }

    const modal =
        document.getElementById("buyModal");

    if (modal) {
        modal.classList.remove("hidden");
    }
}


/* =========================
   CLOSE BUY FORM
========================= */

function closeBuyForm() {

    const modal =
        document.getElementById("buyModal");

    if (modal) {
        modal.classList.add("hidden");
    }
}


/* =========================
   BUY FORM SUBMIT
========================= */

const buyForm =
    document.getElementById("buyForm");

if (buyForm) {

    buyForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const emailInput =
            document.getElementById("buyerEmail");

        const nicknameInput =
            document.getElementById("buyerNickname");

        buyerEmail =
            emailInput ? emailInput.value.trim() : "";

        buyerNickname =
            nicknameInput ? nicknameInput.value.trim() : "";

        if (!buyerEmail || !buyerNickname) {

            alert("Please enter your email and nickname.");

            return;
        }

        if (!selectedItem || !selectedPrice) {

            alert("Please select an item first.");

            return;
        }


        try {

            const response = await fetch("/api/orders", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    email: buyerEmail,

                    nickname: buyerNickname,

                    selectedItem: selectedItem,

                    price: selectedPrice

                })

            });


            const data = await response.json();


            if (!response.ok) {

                alert(
                    data.message ||
                    data.error ||
                    "Unable to create order."
                );

                return;
            }


            orderId =
                data.id ||
                data.orderId ||
                null;


            /* CLOSE BUY FORM */

            closeBuyForm();


            /* OPEN PAYMENT QR */

            openPayment(
                selectedItem,
                selectedPrice
            );

        }

        catch (error) {

            console.error(
                "Order creation error:",
                error
            );

            alert(
                "Server connection error."
            );
        }

    });

}


/* =========================
   PAYMENT QR
========================= */

function openPayment(item, price) {

    paymentItemName = item;

    paymentAmountValue =
        Number(
            String(price)
                .replace(/[^\d.]/g, "")
        );


    if (
        !paymentAmountValue ||
        paymentAmountValue <= 0
    ) {

        alert("Invalid payment amount.");

        return;
    }


    const paymentItem =
        document.getElementById("paymentItem");

    const paymentAmount =
        document.getElementById("paymentAmount");

    if (paymentItem) {

        paymentItem.textContent =
            paymentItemName;
    }

    if (paymentAmount) {

        paymentAmount.textContent =
            `₹${paymentAmountValue}`;
    }


    const qrContainer =
        document.getElementById("paymentQR");


    if (!qrContainer) {

        alert("Payment QR container not found.");

        return;
    }


    qrContainer.innerHTML = "";


    /*
       UPI PAYMENT LINK
    */

    const upiLink =
        `upi://pay?pa=${encodeURIComponent(PAYMENT_UPI_ID)}` +
        `&pn=${encodeURIComponent(PAYMENT_NAME)}` +
        `&am=${encodeURIComponent(paymentAmountValue.toFixed(2))}` +
        `&cu=INR`;


    if (typeof QRCode === "undefined") {

        console.error(
            "QRCode library not loaded."
        );

        alert(
            "QR code library is not loaded."
        );

        return;
    }


    new QRCode(qrContainer, {

        text: upiLink,

        width: 210,

        height: 210,

        correctLevel:
            QRCode.CorrectLevel.H

    });


    const modal =
        document.getElementById("paymentModal");

    if (modal) {

        modal.classList.remove("hidden");
    }

}


/* =========================
   CLOSE PAYMENT
========================= */

function closePayment() {

    const modal =
        document.getElementById("paymentModal");

    if (modal) {

        modal.classList.add("hidden");
    }

}


/* =========================
   CONTINUE AFTER PAYMENT
========================= */

function continueAfterPayment() {

    closePayment();


    const submitModal =
        document.getElementById("submitModal");


    if (submitModal) {

        submitModal.classList.remove("hidden");

    }


    if (typeof startTimer === "function") {

        startTimer();

    }

}


/* =========================
   START 2 MINUTE TIMER
========================= */

function startTimer() {

    clearInterval(countdownInterval);


    let seconds = 120;


    const timerElement =
        document.getElementById("timer");


    const submitButton =
        document.getElementById("finalSubmitBtn");


    if (submitButton) {

        submitButton.disabled = true;

        submitButton.style.opacity = "0.5";

        submitButton.style.cursor = "not-allowed";

    }


    function updateTimer() {

        const minutes =
            Math.floor(seconds / 60);

        const remainingSeconds =
            seconds % 60;


        const formattedSeconds =
            String(remainingSeconds)
                .padStart(2, "0");


        if (timerElement) {

            timerElement.textContent =
                `${minutes}:${formattedSeconds}`;

        }


        if (seconds <= 0) {

            clearInterval(
                countdownInterval
            );


            if (submitButton) {

                submitButton.disabled = false;

                submitButton.style.opacity = "1";

                submitButton.style.cursor =
                    "pointer";

            }

            return;
        }


        seconds--;

    }


    updateTimer();


    countdownInterval =
        setInterval(
            updateTimer,
            1000
        );

}


/* =========================
   CLOSE SUBMIT MODAL
========================= */

function closeSubmitModal() {

    clearInterval(
        countdownInterval
    );


    const modal =
        document.getElementById("submitModal");


    if (modal) {

        modal.classList.add("hidden");

    }

}


/* =========================
   FINAL SUBMIT
========================= */

async function finalSubmit() {

    const submitButton =
        document.getElementById("finalSubmitBtn");


    if (
        submitButton &&
        submitButton.disabled
    ) {

        return;
    }


    clearInterval(
        countdownInterval
    );


    /*
       Update order status only when
       the backend allows it.
    */

    if (orderId) {

        try {

            await fetch(
                `/api/orders/${orderId}/status`,
                {

                    method: "PATCH",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        status: "completed"
                    })

                }
            );

        }

        catch (error) {

            console.error(
                "Status update error:",
                error
            );

        }

    }


    const submitModal =
        document.getElementById("submitModal");


    if (submitModal) {

        submitModal.classList.add("hidden");

    }


    const successModal =
        document.getElementById("successModal");


    if (successModal) {

        successModal.classList.remove("hidden");

    }

}


/* =========================
   SUCCESS CLOSE
========================= */

function closeSuccess() {

    const successModal =
        document.getElementById("successModal");


    if (successModal) {

        successModal.classList.add("hidden");

    }


    goHome();


    setTimeout(() => {

        showOfferPopup();

    }, 300);

}


/* =========================
   OFFER POPUP
========================= */

function showOfferPopup() {

    const offerModal =
        document.getElementById("offerModal");


    if (offerModal) {

        offerModal.classList.remove("hidden");

    }

}


/* =========================
   CLOSE OFFER POPUP
========================= */

function closeOfferPopup() {

    const offerModal =
        document.getElementById("offerModal");


    if (offerModal) {

        offerModal.classList.add("hidden");

    }

}


/* =========================
   GO HOME
========================= */

function goHome() {

    const collectionView =
        document.getElementById("collectionView");


    if (collectionView) {

        collectionView.innerHTML = "";

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================
   SEARCH
========================= */

function searchItems() {

    const searchInput =
        document.getElementById("searchInput");


    if (!searchInput) {

        return;
    }


    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    if (!query) {

        return;
    }


    let results = [];


    Object.values(collections)
        .forEach(category => {

            category.forEach(item => {

                if (
                    item[0]
                        .toLowerCase()
                        .includes(query)
                ) {

                    results.push(item);

                }

            });

        });


    const collectionView =
        document.getElementById("collectionView");


    if (!collectionView) {

        return;
    }


    collectionView.innerHTML = "";


    if (results.length === 0) {

        collectionView.innerHTML = `

            <div class="no-results">

                <h2>No items found</h2>

                <p>
                    Try another search.
                </p>

            </div>

        `;

        collectionView.scrollIntoView({
            behavior: "smooth"
        });

        return;
    }


    results.forEach(item => {

        const itemName = item[0];

        const rarity = item[1];

        const image = item[2];

        const price = item[3];

        const safeItemName =
            itemName.replace(
                /'/g,
                "\\'"
            );


        const card =
            document.createElement("div");


        card.className =
            "item-card";


        card.innerHTML = `

            <div class="item-image">

                <img
                    src="${image}"
                    alt="${itemName}"
                >

            </div>

            <div class="item-info">

                <div class="item-rarity">
                    ${rarity}
                </div>

                <h3>
                    ${itemName}
                </h3>

                <div class="item-bottom">

                    <strong>
                        ${price}
                    </strong>

                    <button
                        class="buy-btn"
                        onclick="openCheckout('${safeItemName}', '${price}')"
                    >
                        BUY NOW
                    </button>

                </div>

            </div>

        `;


        collectionView.appendChild(card);

    });


    collectionView.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


/* =========================
   SEARCH ENTER KEY
========================= */

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                searchItems();

            }

        }
    );

}


/* =========================
   MODAL BACKGROUND CLICK
========================= */

window.addEventListener(
    "click",
    function (event) {

        const checkoutModal =
            document.getElementById(
                "checkoutModal"
            );


        const paymentModal =
            document.getElementById(
                "paymentModal"
            );


        const submitModal =
            document.getElementById(
                "submitModal"
            );


        const offerModal =
            document.getElementById(
                "offerModal"
            );


        if (
            event.target ===
            checkoutModal
        ) {

            closeCheckout();

        }


        if (
            event.target ===
            paymentModal
        ) {

            closePayment();

        }


        if (
            event.target ===
            submitModal
        ) {

            closeSubmitModal();

        }


        if (
            event.target ===
            offerModal
        ) {

            closeOfferPopup();

        }

    }
);


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {

            return;
        }


        closeCheckout();

        closePayment();

        closeSubmitModal();

        closeOfferPopup();

    }
);


/* =========================
   PAGE LOAD
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "FF Rare Vault loaded successfully."
        );

    }
);
