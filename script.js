/* =========================================================
   FF RARE VAULT - SCRIPT
========================================================= */


/* =========================================================
   COLLECTION DATA
========================================================= */

const collections = {

    rare: {
        title: "RARE BUNDLES",
        small: "ULTRA RARE",

        items: [
            {
                name: "Arctic Blue Bundle",
                price: 150,
                rarity: "ULTRA RARE",
                image: "images/Rares-Bundles.png"
            },
            {
                name: "Zombie Samurai",
                price: 80,
                rarity: "RARE",
                image: "images/Rares-Bundles.png"
            },
            {
                name: "Knight Clown",
                price: 50,
                rarity: "OG",
                image: "images/Rares-Bundles.png"
            },
            {
                name: "Angelic Bundle",
                price: 50,
                rarity: "LEGENDARY",
                image: "images/Rares-Bundles.png"
            },
            {
                name: "Bunny Warrior",
                price: 80,
                rarity: "RARE",
                image: "images/Rares-Bundles.png"
            },
            {
                name: "Galaxy Dino",
                price: 80,
                rarity: "RARE",
                image: "images/Rares-Bundles.png"
            },
            {
                name: "HipHop Bundle",
                price: 99,
                rarity: "OG",
                image: "images/Rares-Bundles.png"
            },
            {
                name: "Shadow Red",
                price: 80,
                rarity: "RARE",
                image: "images/Rares-Bundles.png"
            },
            {
                name: "Sakura Bundle",
                price: 150,
                rarity: "LEGENDARY",
                image: "images/Rares-Bundles.png"
            }
        ]
    },


    criminal: {
        title: "CRIMINAL",
        small: "OG COLLECTION",

        items: [
            {
                name: "Red Criminal",
                price: 100,
                rarity: "OG",
                image: "images/all-criminal.jpg"
            },
            {
                name: "Blue Criminal",
                price: 150,
                rarity: "ULTRA RARE",
                image: "images/all-criminal.jpg"
            },
            {
                name: "Green Criminal",
                price: 100,
                rarity: "RARE",
                image: "images/all-criminal.jpg"
            },
            {
                name: "Purple Criminal",
                price: 100,
                rarity: "RARE",
                image: "images/all-criminal.jpg"
            },
            {
                name: "Black Criminal",
                price: 150,
                rarity: "ULTRA RARE",
                image: "images/all-criminal.jpg"
            }
        ]
    },


    dino: {
        title: "DINO COLLECTION",
        small: "RARE DINO",

        items: [
            {
                name: "Galaxy Dino",
                price: 100,
                rarity: "RARE",
                image: "images/all-galaxy-dino.jpg"
            },
            {
                name: "Green Dino",
                price: 150,
                rarity: "ULTRA RARE",
                image: "images/all-galaxy-dino.jpg"
            },
            {
                name: "Blue Dino",
                price: 100,
                rarity: "RARE",
                image: "images/all-galaxy-dino.jpg"
            },
            {
                name: "Pink Dino",
                price: 100,
                rarity: "RARE",
                image: "images/all-galaxy-dino.jpg"
            },
            {
                name: "Yellow Dino",
                price: 150,
                rarity: "ULTRA RARE",
                image: "images/all-galaxy-dino.jpg"
            }
        ]
    },


    guns: {
        title: "GUN SKINS",
        small: "EVO COLLECTION",

        items: [
            {
                name: "EVO Gun 01",
                price: 200,
                rarity: "EVO",
                image: "images/all-gun-1.png"
            },
            {
                name: "EVO Gun 02",
                price: 200,
                rarity: "EVO",
                image: "images/all-gun-1.png"
            },
            {
                name: "Legendary Gun Skin",
                price: 250,
                rarity: "LEGENDARY",
                image: "images/all-gun-1.png"
            },
            {
                name: "Rare Gun Skin",
                price: 150,
                rarity: "RARE",
                image: "images/all-gun-1.png"
            }
        ]
    },


    emotes: {
        title: "EMOTES",
        small: "OG EMOTES",

        items: [
            {
                name: "OG Emote 01",
                price: 50,
                rarity: "OG",
                image: "images/all-emote-1.png"
            },
            {
                name: "OG Emote 02",
                price: 70,
                rarity: "RARE",
                image: "images/all-emote-1.png"
            },
            {
                name: "Legendary Emote",
                price: 100,
                rarity: "LEGENDARY",
                image: "images/all-emote-1.png"
            },
            {
                name: "Rare Emote",
                price: 80,
                rarity: "RARE",
                image: "images/all-emote-1.png"
            }
        ]
    },


    entryEmotes: {
        title: "ENTRY EMOTES",
        small: "OG ENTRY",

        items: [
            {
                name: "Entry Emote 01",
                price: 60,
                rarity: "OG",
                image: "images/all-entryemotes-1.png"
            },
            {
                name: "Entry Emote 02",
                price: 80,
                rarity: "RARE",
                image: "images/all-entryemotes-1.png"
            },
            {
                name: "Legendary Entry Emote",
                price: 120,
                rarity: "LEGENDARY",
                image: "images/all-entryemotes-1.png"
            }
        ]
    },


    gloo: {
        title: "GLOO WALL",
        small: "EPIC COLLECTION",

        items: [
            {
                name: "Gloo Wall 01",
                price: 80,
                rarity: "EPIC",
                image: "images/all-gloo-1.png"
            },
            {
                name: "Gloo Wall 02",
                price: 100,
                rarity: "RARE",
                image: "images/all-gloo-1.png"
            },
            {
                name: "Legendary Gloo Wall",
                price: 150,
                rarity: "LEGENDARY",
                image: "images/all-gloo-1.png"
            }
        ]
    },


    grenade: {
        title: "GRENADE",
        small: "RARE COLLECTION",

        items: [
            {
                name: "Grenade Skin 01",
                price: 50,
                rarity: "RARE",
                image: "images/all-grenade-1.png"
            },
            {
                name: "Grenade Skin 02",
                price: 70,
                rarity: "EPIC",
                image: "images/all-grenade-1.png"
            },
            {
                name: "Legendary Grenade",
                price: 100,
                rarity: "LEGENDARY",
                image: "images/all-grenade-1.png"
            }
        ]
    },


    diamonds: {
        title: "DIAMOND PACKS",
        small: "DIAMONDS",

        items: [
            {
                name: "1,000 Diamonds",
                price: 50,
                rarity: "DIAMONDS",
                image: "images/all-diamond.png"
            },
            {
                name: "5,000 Diamonds",
                price: 100,
                rarity: "DIAMONDS",
                image: "images/all-diamond.png"
            },
            {
                name: "10,000 Diamonds",
                price: 400,
                rarity: "DIAMONDS",
                image: "images/all-diamond.png"
            }
        ]
    }

};


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let selectedItem = "";
let selectedPrice = 0;

let currentCollection = "";

let currentOrderId = null;

let timerInterval = null;
let remainingSeconds = 120;


/* =========================================================
   ELEMENTS
========================================================= */

const collectionsSection =
    document.getElementById("collections");

const collectionView =
    document.getElementById("collectionView");

const itemsGrid =
    document.getElementById("itemsGrid");

const collectionSmall =
    document.getElementById("collectionSmall");

const collectionTitle =
    document.getElementById("collectionTitle");

const buyModal =
    document.getElementById("buyModal");

const submitModal =
    document.getElementById("submitModal");

const successModal =
    document.getElementById("successModal");

const offerModal =
    document.getElementById("offerModal");

const buyItemName =
    document.getElementById("buyItemName");

const buyItemPrice =
    document.getElementById("buyItemPrice");

const submitItemName =
    document.getElementById("submitItemName");

const submitItemPrice =
    document.getElementById("submitItemPrice");

const timerElement =
    document.getElementById("timer");

const finalSubmitBtn =
    document.getElementById("finalSubmitBtn");

const buyForm =
    document.getElementById("buyForm");

const searchInput =
    document.getElementById("searchInput");


/* =========================================================
   OPEN COLLECTION
========================================================= */

function openCategory(categoryKey) {

    const collection =
        collections[categoryKey];

    if (!collection) {
        console.error("Collection not found:", categoryKey);
        return;
    }

    currentCollection = categoryKey;

    /* Hide main collection section */
    collectionsSection.classList.add("hidden");

    /* Hide hero */
    const hero =
        document.querySelector(".hero");

    if (hero) {
        hero.classList.add("hidden");
    }

    /* Show collection view */
    collectionView.classList.remove("hidden");

    /* Update heading */
    collectionSmall.textContent =
        collection.small;

    collectionTitle.textContent =
        collection.title;

    /* Clear old items */
    itemsGrid.innerHTML = "";

    /* Create item cards */
    collection.items.forEach((item) => {

        const card =
            document.createElement("article");

        card.className = "item-card";


        const imageBox =
            document.createElement("div");

        imageBox.className = "item-image";


        const image =
            document.createElement("img");

        image.src = item.image;
        image.alt = item.name;

        imageBox.appendChild(image);


        const info =
            document.createElement("div");

        info.className = "item-info";


        const rarity =
            document.createElement("div");

        rarity.className = "item-rarity";

        rarity.textContent =
            item.rarity;


        const name =
            document.createElement("h3");

        name.textContent =
            item.name;


        const bottom =
            document.createElement("div");

        bottom.className = "item-bottom";


        const price =
            document.createElement("strong");

        price.textContent =
            `₹${item.price}`;


        const buyButton =
            document.createElement("button");

        buyButton.type = "button";

        buyButton.className = "buy-btn";

        buyButton.textContent =
            "BUY NOW →";


        buyButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                openBuyForm(
                    item.name,
                    item.price
                );

            }
        );


        bottom.appendChild(price);

        bottom.appendChild(buyButton);


        info.appendChild(rarity);

        info.appendChild(name);

        info.appendChild(bottom);


        card.appendChild(imageBox);

        card.appendChild(info);


        itemsGrid.appendChild(card);

    });


    /* Scroll to top */
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   SHOW COLLECTIONS / HOME
========================================================= */

function showCollections() {

    closeAllModals();

    const hero =
        document.querySelector(".hero");

    if (hero) {
        hero.classList.remove("hidden");
    }

    collectionsSection.classList.remove("hidden");

    collectionView.classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   GO HOME
========================================================= */

function goHome() {

    showCollections();

}


/* =========================================================
   BUY FORM
========================================================= */

function openBuyForm(itemName, price) {

    selectedItem = itemName;

    selectedPrice = Number(price);


    buyItemName.textContent =
        selectedItem;

    buyItemPrice.textContent =
        `₹${selectedPrice}`;


    buyModal.classList.remove("hidden");


    setTimeout(() => {

        const email =
            document.getElementById("buyerEmail");

        if (email) {
            email.focus();
        }

    }, 100);

}


/* =========================================================
   CLOSE BUY MODAL
========================================================= */

function closeBuyForm() {

    buyModal.classList.add("hidden");

}


/* =========================================================
   BUY FORM SUBMIT
========================================================= */

if (buyForm) {

    buyForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const email =
                document.getElementById("buyerEmail")
                    .value
                    .trim();


            const nickname =
                document.getElementById("buyerNickname")
                    .value
                    .trim();


            if (!email || !nickname) {

                alert(
                    "Please enter your email and nickname."
                );

                return;

            }


            const button =
                buyForm.querySelector(
                    ".confirm-btn"
                );


            const oldText =
                button.textContent;


            button.disabled = true;

            button.textContent =
                "PLEASE WAIT...";


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

                                email: email,

                                nickname: nickname,

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

                    throw new Error(
                        data.message ||
                        "Unable to create order."
                    );

                }


                currentOrderId =
                    data.orderId;


                closeBuyForm();


                openSubmitModal();


            } catch (error) {

                console.error(error);

                alert(
                    error.message ||
                    "Something went wrong."
                );

            } finally {

                button.disabled = false;

                button.textContent =
                    oldText;

            }

        }
    );

}


/* =========================================================
   OPEN VERIFICATION
========================================================= */

function openSubmitModal() {

    submitItemName.textContent =
        selectedItem;

    submitItemPrice.textContent =
        `₹${selectedPrice}`;


    submitModal.classList.remove(
        "hidden"
    );


    startTimer();

}


/* =========================================================
   CLOSE VERIFICATION
========================================================= */

function closeSubmitModal() {

    stopTimer();

    submitModal.classList.add(
        "hidden"
    );

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    stopTimer();


    remainingSeconds = 120;


    finalSubmitBtn.disabled = true;


    updateTimer();


    timerInterval =
        setInterval(
            function () {

                remainingSeconds--;

                updateTimer();


                if (
                    remainingSeconds <= 0
                ) {

                    remainingSeconds = 0;

                    updateTimer();

                    stopTimer();

                    finalSubmitBtn.disabled =
                        false;

                    finalSubmitBtn.textContent =
                        "SUBMIT →";

                }

            },
            1000
        );

}


/* =========================================================
   UPDATE TIMER
========================================================= */

function updateTimer() {

    const minutes =
        Math.floor(
            remainingSeconds / 60
        );


    const seconds =
        remainingSeconds % 60;


    const formattedMinutes =
        String(minutes).padStart(
            2,
            "0"
        );


    const formattedSeconds =
        String(seconds).padStart(
            2,
            "0"
        );


    timerElement.textContent =
        `${formattedMinutes}:${formattedSeconds}`;

}


/* =========================================================
   STOP TIMER
========================================================= */

function stopTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;

    }

}


/* =========================================================
   FINAL SUBMIT
========================================================= */

async function finalSubmit() {

    if (remainingSeconds > 0) {

        return;

    }


    if (!currentOrderId) {

        alert(
            "Order ID not found."
        );

        return;

    }


    finalSubmitBtn.disabled =
        true;

    finalSubmitBtn.textContent =
        "SUBMITTING...";


    try {

        const response =
            await fetch(
                `/api/orders/${currentOrderId}/submit`,
                {
                    method: "POST"
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                "Unable to submit order."
            );

        }


        stopTimer();


        submitModal.classList.add(
            "hidden"
        );


        successModal.classList.remove(
            "hidden"
        );


    } catch (error) {

        console.error(error);

        alert(
            error.message ||
            "Something went wrong."
        );


        finalSubmitBtn.disabled =
            false;

        finalSubmitBtn.textContent =
            "SUBMIT →";

    }

}


/* =========================================================
   SUCCESS CLOSE
========================================================= */

function closeSuccess() {

    successModal.classList.add(
        "hidden"
    );


    goHome();


    setTimeout(
        function () {

            offerModal.classList.remove(
                "hidden"
            );

        },
        350
    );

}


/* =========================================================
   OFFER CLOSE
========================================================= */

function closeOfferPopup() {

    offerModal.classList.add(
        "hidden"
    );

}


/* =========================================================
   CLOSE ALL MODALS
========================================================= */

function closeAllModals() {

    buyModal.classList.add(
        "hidden"
    );

    submitModal.classList.add(
        "hidden"
    );

    successModal.classList.add(
        "hidden"
    );

    offerModal.classList.add(
        "hidden"
    );

    stopTimer();

}


/* =========================================================
   SEARCH
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const search =
                this.value
                    .trim()
                    .toLowerCase();


            const cards =
                document.querySelectorAll(
                    ".featured-card, .small-card"
                );


            cards.forEach(
                function (card) {

                    const text =
                        card.textContent
                            .toLowerCase();


                    if (
                        text.includes(search)
                    ) {

                        card.style.display =
                            "";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


/* =========================================================
   MODAL BACKGROUND CLICK
========================================================= */

[buyModal, submitModal, successModal, offerModal]
    .forEach(
        function (modal) {

            if (!modal) {
                return;
            }


            modal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target === modal
                    ) {

                        if (
                            modal === buyModal
                        ) {

                            closeBuyForm();

                        }

                        if (
                            modal === submitModal
                        ) {

                            closeSubmitModal();

                        }

                        if (
                            modal === offerModal
                        ) {

                            closeOfferPopup();

                        }

                    }

                }
            );

        }
    );


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        if (
            !buyModal.classList.contains(
                "hidden"
            )
        ) {

            closeBuyForm();

        }


        if (
            !offerModal.classList.contains(
                "hidden"
            )
        ) {

            closeOfferPopup();

        }

    }
);


/* =========================================================
   INITIAL STATE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        collectionView.classList.add(
            "hidden"
        );

        collectionsSection.classList.remove(
            "hidden"
        );

        const hero =
            document.querySelector(".hero");

        if (hero) {

            hero.classList.remove(
                "hidden"
            );

        }

    }
);
