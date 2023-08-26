// card 1 name print
function card1Name() {

    const product1Name = document.getElementById('product-name');
    const product1NameString = product1Name.innerText;

    const card1 = document.getElementById('card-1');
    card1.innerText = product1NameString;

    // card 1 price number
    const card1Price = document.getElementById('card1-price');
    const card1PriceString = card1Price.innerText;
    const card1PriceStringNumber = parseFloat(card1PriceString);

    // get the total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceString);

    // set the total price
    const newPrice = totalPriceNumber + card1PriceStringNumber;
    totalPrice.innerText = newPrice;
    disabledPurchaseBtn(newPrice);
}

// card 2 name print
function card2Name() {
    const product2Name = document.getElementById('product2-name');
    const product2NameString = product2Name.innerText;

    const card2 = document.getElementById('card2');
    card2.innerText = product2NameString;

    // get the card 2 price
    const card2Price = document.getElementById('card2-price');
    const card2PriceString = card2Price.innerText;
    const card2PriceNumber = parseFloat(card2PriceString);

    // get the total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceString);

    // Set the total price 
    const newPrice = totalPriceNumber + card2PriceNumber;
    totalPrice.innerText = newPrice;
    disabledPurchaseBtn(newPrice);
}

// card 3 name print
function card3Name() {

    const product3Name = document.getElementById('product3-name');
    const product3NameString = product3Name.innerText;

    const card3 = document.getElementById('card3');
    card3.innerText = product3NameString;

    // get the card 3 price
    const card3Price = document.getElementById('card3-price');
    const card3PriceString = card3Price.innerText;
    const card3PriceNumber = parseFloat(card3PriceString);

    // get the total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceString);

    // Set the total price 
    const newPrice = totalPriceNumber + card3PriceNumber;
    totalPrice.innerText = newPrice;
    disabledPurchaseBtn(newPrice);
}

// card 4 name print
function card4Name() {
    const product4Name = document.getElementById('product4-name');
    const product4NameString = product4Name.innerText;

    const card4 = document.getElementById('card4');
    card4.innerText = product4NameString;

    // get the card 4 price 
    const card4Price = document.getElementById('card4-price');
    const card4PriceString = card4Price.innerText;
    const card4PriceNumber = parseFloat(card4PriceString);

    // get the total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceString);

    // Set the total price 
    const newPrice = totalPriceNumber + card4PriceNumber;
    totalPrice.innerText = newPrice;
    disabledPurchaseBtn(newPrice);
}

// card 5 name print
function card5Name() {
    const product5Name = document.getElementById('product5-name');
    const product5NameString = product5Name.innerText;

    const card5 = document.getElementById('card5');
    card5.innerText = product5NameString;

    // get the card 5 price
    const card5Price = document.getElementById('card5-price');
    const card5PriceString = card5Price.innerText;
    const card5PriceNumber = parseFloat(card5PriceString);

    // get the total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceString);

    // Set the total price 
    const newPrice = totalPriceNumber + card5PriceNumber;
    totalPrice.innerText = newPrice;
    disabledPurchaseBtn(newPrice);
}

// card 6 name print
function card6Name() {
    const product6Name = document.getElementById('product6-name');
    const product6NameString = product6Name.innerText;

    const card6 = document.getElementById('card6');
    card6.innerText = product6NameString;

    // get the card 6 price
    const card6Price = document.getElementById('card6-price');
    const card6PriceString = card6Price.innerText;
    const card6PriceNumber = parseFloat(card6PriceString);

    // get the total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceString);

    // Set the total price 
    const newPrice = totalPriceNumber + card6PriceNumber;
    totalPrice.innerText = newPrice;
    disabledPurchaseBtn(newPrice);
};

// calculate funntion

function discountCalculate() {
    const codeField = document.getElementById('code-field');
    const cupponCode = codeField.value;

    if (cupponCode === 'SELL200') {
        // get the total price
        const totalPrice = document.getElementById('total-price');
        const totalPriceString = totalPrice.innerText;
        const totalPriceNumber = parseFloat(totalPriceString);

        // Prsentage calculate
        const parsentage = 0.20;
        const calculateDiscount = totalPriceNumber * parsentage;

        // Get the discount id and innertext
        const discount = document.getElementById('discount');
        discount.innerText = calculateDiscount;

        // AFTER DISCOUNT TOTAL MONEY
        const discountTotalMoney = totalPriceNumber - calculateDiscount;

        // get hte total money id
        const totalId = document.getElementById('total-id');
        totalId.innerText = discountTotalMoney;
    }
    else {
        alert('Please provide a valid cuppon code');
    }
};

// go home btn
function reloadPage() {
    location.reload(true);
};

// purchace btn
 function disabledPurchaseBtn(total) {
    const purchaceBtn = document.getElementById('purchace-btn');
    if (total > 0){
        purchaceBtn.removeAttribute("disabled");
    };
};