/* =====================================================
   FF RARE VAULT - SIMPLE VERSION
===================================================== */


/* =========================
   COLLECTION DATA
========================= */

const collections = {

    rare: [
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
   VARIABLES
========================= */

let selectedItem = "";
let selectedPrice = "";

let buyerEmail = "";
let buyerNickname = "";

let orderId = null;

let countdownInterval = null;


/* =========================
   OPEN CATEGORY
========================= */

function openCategory(category) {

    const data = collections[category];

    if (!data) {
        console.error("Category not found:", category);
        return;
    }

    const collectionView =
        document.getElementById("collectionView");

    const itemsGrid =
        document.getElementById("itemsGrid");

    const collectionTitle =
        document.getElementById("collectionTitle");

    const collectionSmall =
        document.getElementById("collectionSmall");


    if (!collectionView || !itemsGrid) {
        console.error("Collection elements not found.");
        return;
    }


    /* Clear old items */

    itemsGrid.innerHTML = "";


    /* Collection title */

    const titles = {
        rare: "Rare Bundles",
        criminal: "Criminal Bundles",
        dino: "Dino Bundles",
        guns: "Gun Skins",
        emotes: "Emotes",
        entryEmotes: "Entry Emotes",
        gloo: "Gloo Wall",
        grenade: "Grenade Skins",
        diamonds: "Diamond Packs"
    };


    if (collectionSmall) {
        collectionSmall.textContent = "COLLECTION";
    }

    if (collectionTitle) {
        collectionTitle.textContent =
            titles[category] || "Collection";
    }


    /* Show collection section */

    collectionView.classList.remove("hidden");


    /* Create cards */

    data.forEach(item => {

        const itemName = item[0];
        const rarity = item[1];
        const image = item[2];
        const price = item[3];


        const card =
            document.createElement("div");

        card.className = "item-card";


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
                        type="button"
                    >
                        BUY NOW
                    </button>

                </div>

            </div>

        `;


        const buyButton =
            card.querySelector(".buy-btn");


        if (buyButton) {

            buyButton.addEventListener(
                "click",
                function () {

                    openBuyForm(
                        itemName,
                        price
                    );

                }
            );

        }


        itemsGrid.appendChild(card);

    });


    /* Scroll to collection */

    collectionView.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================
   OPEN BUY FORM
========================= */

function openBuyForm(item, price) {

    selectedItem = item;
    selectedPrice = price;


    const itemName =
        document.getElementById("buyItemName");

    const itemPrice =
        document.getElementById("buyItemPrice");


    if (itemName) {
        itemName.textContent = item;
    }


    if (itemPrice) {
        itemPrice.textContent = price;
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

    buyForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const emailInput =
                document.getElementById("buyerEmail");

            const nicknameInput =
                document.getElementById("buyerNickname");


            buyerEmail =
                emailInput
                    ? emailInput.value.trim()
                    : "";


            buyerNickname =
                nicknameInput
                    ? nicknameInput.value.trim()
                    : "";


            if (!buyerEmail) {

                alert("Please enter your email.");

                return;
            }


            if (!buyerNickname) {

                alert("Please enter your nickname.");

                return;
            }


            if (!selectedItem || !selectedPrice) {

                alert("Please select an item first.");

                return;
            }


            try {

                const response =
                    await fetch(
                        "/api/orders",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({

                                email: buyerEmail,

                                nickname:
                                    buyerNickname,

                                selectedItem:
                                    selectedItem,

                                price:
                                    selectedPrice

                            })

                        }
                    );


                const data =
                    await response.json();


                if (!response.ok) {

                    alert(
                        data.message ||
                        data.error ||
                        "Unable to submit order."
                    );

                    return;
                }


                orderId =
                    data.id ||
                    data.orderId ||
                    null;


                /* Close buy modal */

                closeBuyForm();


                /* Fill verification modal */

                const submitItemName =
                    document.getElementById(
                        "submitItemName"
                    );


                const submitItemPrice =
                    document.getElementById(
                        "submitItemPrice"
                    );


                if (submitItemName) {

                    submitItemName.textContent =
                        selectedItem;

                }


                if (submitItemPrice) {

                    submitItemPrice.textContent =
                        selectedPrice;

                }


                /* Open verification modal */

                const submitModal =
                    document.getElementById(
                        "submitModal"
                    );


                if (submitModal) {

                    submitModal.classList.remove(
                        "hidden"
                    );

                }


                /* Start timer */

                startTimer();

            }


            catch (error) {

                console.error(
                    "Order error:",
                    error
                );


                alert(
                    "Server connection error."
                );

            }

        }
    );

}


/* =========================
   TIMER
========================= */

function startTimer() {

    clearInterval(countdownInterval);


    let seconds = 120;


    const timer =
        document.getElementById("timer");


    const submitButton =
        document.getElementById(
            "finalSubmitBtn"
        );


    if (submitButton) {

        submitButton.disabled = true;

        submitButton.style.opacity = "0.5";

        submitButton.style.cursor =
            "not-allowed";

    }


    function updateTimer() {

        const minutes =
            Math.floor(seconds / 60);


        const remaining =
            seconds % 60;


        const formatted =
            String(remaining)
                .padStart(2, "0");


        if (timer) {

            timer.textContent =
                `${String(minutes).padStart(2, "0")}:${formatted}`;

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
        document.getElementById(
            "submitModal"
        );


    if (modal) {

        modal.classList.add("hidden");

    }

}


/* =========================
   FINAL SUBMIT
========================= */

async function finalSubmit() {

    const submitButton =
        document.getElementById(
            "finalSubmitBtn"
        );


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
       Don't fake payment confirmation.
       Just submit the request.
    */


    if (orderId) {

        try {

            const response =
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


            if (!response.ok) {

                console.warn(
                    "Order status was not updated."
                );

            }

        }

        catch (error) {

            console.error(
                "Status update error:",
                error
            );

        }

    }


    /* Hide verification */

    const submitModal =
        document.getElementById(
            "submitModal"
        );


    if (submitModal) {

        submitModal.classList.add(
            "hidden"
        );

    }


    /* Show success */

    const successModal =
        document.getElementById(
            "successModal"
        );


    if (successModal) {

        successModal.classList.remove(
            "hidden"
        );

    }

}


/* =========================
   SUCCESS DONE
========================= */

function closeSuccess() {

    const successModal =
        document.getElementById(
            "successModal"
        );


    if (successModal) {

        successModal.classList.add(
            "hidden"
        );

    }


    goHome();


    setTimeout(
        function () {

            showOfferPopup();

        },
        300
    );

}


/* =========================
   OFFER POPUP
========================= */

function showOfferPopup() {

    const offerModal =
        document.getElementById(
            "offerModal"
        );


    if (offerModal) {

        offerModal.classList.remove(
            "hidden"
        );

    }

}


/* =========================
   CLOSE OFFER
========================= */

function closeOfferPopup() {

    const offerModal =
        document.getElementById(
            "offerModal"
        );


    if (offerModal) {

        offerModal.classList.add(
            "hidden"
        );

    }

}


/* =========================
   GO HOME
========================= */

function goHome() {

    const collectionView =
        document.getElementById(
            "collectionView"
        );


    if (collectionView) {

        collectionView.classList.add(
            "hidden"
        );

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
        document.getElementById(
            "searchInput"
        );


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
        document.getElementById(
            "collectionView"
        );


    const itemsGrid =
        document.getElementById(
            "itemsGrid"
        );


    const collectionTitle =
        document.getElementById(
            "collectionTitle"
        );


    if (!collectionView || !itemsGrid) {
        return;
    }


    collectionView.classList.remove(
        "hidden"
    );


    if (collectionTitle) {

        collectionTitle.textContent =
            "Search Results";

    }


    itemsGrid.innerHTML = "";


    if (results.length === 0) {

        itemsGrid.innerHTML = `

            <div class="no-results">

                <h2>
                    No items found
                </h2>

                <p>
                    Try another search.
                </p>

            </div>

        `;

        return;
    }


    results.forEach(item => {

        const itemName = item[0];

        const rarity = item[1];

        const image = item[2];

        const price = item[3];


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
                        type="button"
                    >
                        BUY NOW
                    </button>

                </div>

            </div>

        `;


        const buyButton =
            card.querySelector(
                ".buy-btn"
            );


        if (buyButton) {

            buyButton.addEventListener(
                "click",
                function () {

                    openBuyForm(
                        itemName,
                        price
                    );

                }
            );

        }


        itemsGrid.appendChild(card);

    });


    collectionView.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================
   SEARCH ENTER
========================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );


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

        const buyModal =
            document.getElementById(
                "buyModal"
            );


        const submitModal =
            document.getElementById(
                "submitModal"
            );


        const successModal =
            document.getElementById(
                "successModal"
            );


        const offerModal =
            document.getElementById(
                "offerModal"
            );


        if (event.target === buyModal) {

            closeBuyForm();

        }


        if (event.target === submitModal) {

            closeSubmitModal();

        }


        if (event.target === successModal) {

            closeSuccess();

        }


        if (event.target === offerModal) {

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


        closeBuyForm();

        closeSubmitModal();

        closeOfferPopup();

    }
);


/* =========================
   PAGE READY
========================= */

console.log(
    "FF Rare Vault script loaded."
);
