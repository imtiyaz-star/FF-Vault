/* =====================================================
   FF RARE VAULT
   SIMPLE FRONTEND SCRIPT
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

let orderId = null;

let countdownInterval = null;


/* =========================
   OPEN CATEGORY
========================= */

function openCategory(category) {

    const data = collections[category];

    if (!data) {

        console.error(
            "Category not found:",
            category
        );

        return;
    }


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

        console.error(
            "Collection elements missing."
        );

        return;
    }


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


    itemsGrid.innerHTML = "";


    if (collectionTitle) {

        collectionTitle.textContent =
            titles[category] ||
            "Collection";

    }


    collectionView.classList.remove(
        "hidden"
    );


    data.forEach(item => {

        const itemName = item[0];

        const rarity = item[1];

        const image = item[2];

        const price = item[3];


        const card =
            document.createElement(
                "div"
            );


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
                function (event) {

                    event.stopPropagation();


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
   BUY FORM
========================= */

function openBuyForm(item, price) {

    selectedItem = item;

    selectedPrice = price;


    const itemName =
        document.getElementById(
            "buyItemName"
        );


    const itemPrice =
        document.getElementById(
            "buyItemPrice"
        );


    if (itemName) {

        itemName.textContent =
            selectedItem;

    }


    if (itemPrice) {

        itemPrice.textContent =
            selectedPrice;

    }


    const buyModal =
        document.getElementById(
            "buyModal"
        );


    if (buyModal) {

        buyModal.classList.remove(
            "hidden"
        );

    }

}


/* =========================
   CLOSE BUY FORM
========================= */

function closeBuyForm() {

    const modal =
        document.getElementById(
            "buyModal"
        );


    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }

}


/* =========================
   CREATE ORDER
========================= */

const buyForm =
    document.getElementById(
        "buyForm"
    );


if (buyForm) {

    buyForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "buyerEmail"
                );


            const nickname =
                document.getElementById(
                    "buyerNickname"
                );


            const emailValue =
                email
                    ? email.value.trim()
                    : "";


            const nicknameValue =
                nickname
                    ? nickname.value.trim()
                    : "";


            if (!emailValue) {

                alert(
                    "Please enter your email."
                );

                return;
            }


            if (!nicknameValue) {

                alert(
                    "Please enter your nickname."
                );

                return;
            }


            if (
                !selectedItem ||
                !selectedPrice
            ) {

                alert(
                    "Please select an item first."
                );

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

                                email:
                                    emailValue,

                                nickname:
                                    nicknameValue,

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
                        "Unable to create order."
                    );

                    return;
                }


                orderId =
                    data.id ||
                    null;


                closeBuyForm();


                const itemName =
                    document.getElementById(
                        "submitItemName"
                    );


                const itemPrice =
                    document.getElementById(
                        "submitItemPrice"
                    );


                if (itemName) {

                    itemName.textContent =
                        selectedItem;

                }


                if (itemPrice) {

                    itemPrice.textContent =
                        selectedPrice;

                }


                const submitModal =
                    document.getElementById(
                        "submitModal"
                    );


                if (submitModal) {

                    submitModal.classList.remove(
                        "hidden"
                    );

                }


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

    clearInterval(
        countdownInterval
    );


    let seconds = 120;


    const timer =
        document.getElementById(
            "timer"
        );


    const button =
        document.getElementById(
            "finalSubmitBtn"
        );


    if (button) {

        button.disabled = true;

        button.style.opacity = "0.5";

        button.style.cursor =
            "not-allowed";

    }


    function updateTimer() {

        const minutes =
            Math.floor(
                seconds / 60
            );


        const remaining =
            seconds % 60;


        if (timer) {

            timer.textContent =
                `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;

        }


        if (seconds <= 0) {

            clearInterval(
                countdownInterval
            );


            if (button) {

                button.disabled = false;

                button.style.opacity = "1";

                button.style.cursor =
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
   CLOSE SUBMIT
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

        modal.classList.add(
            "hidden"
        );

    }

}


/* =========================
   FINAL SUBMIT
========================= */

async function finalSubmit() {

    const button =
        document.getElementById(
            "finalSubmitBtn"
        );


    if (
        button &&
        button.disabled
    ) {

        return;
    }


    clearInterval(
        countdownInterval
    );


    /*
       The public page submits the request.
       Admin can review/update it from admin.html.
    */


    const submitModal =
        document.getElementById(
            "submitModal"
        );


    if (submitModal) {

        submitModal.classList.add(
            "hidden"
        );

    }


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
   SUCCESS
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

    const modal =
        document.getElementById(
            "offerModal"
        );


    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


function closeOfferPopup() {

    const modal =
        document.getElementById(
            "offerModal"
        );


    if (modal) {

        modal.classList.add(
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

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) {

        return;
    }


    const query =
        input.value
            .trim()
            .toLowerCase();


    if (!query) {

        return;
    }


    const results = [];


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
            document.createElement(
                "div"
            );


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
                function (event) {

                    event.stopPropagation();

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

            if (
                event.key === "Enter"
            ) {

                searchItems();

            }

        }
    );

}


/* =========================
   MODAL CLICK
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


        if (
            event.target ===
            buyModal
        ) {

            closeBuyForm();

        }


        if (
            event.target ===
            submitModal
        ) {

            closeSubmitModal();

        }


        if (
            event.target ===
            successModal
        ) {

            closeSuccess();

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
   ESC
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeBuyForm();

            closeSubmitModal();

            closeOfferPopup();

        }

    }
);


console.log(
    "FF Rare Vault loaded successfully."
);
