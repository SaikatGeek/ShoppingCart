var plusBtn = document.getElementsByClassName("plusBtn");
var minusBtn = document.getElementsByClassName("minusBtn");
var inputBox = document.getElementsByClassName("inputBox");
var price = document.getElementsByClassName("price");
var removeItem = document.getElementsByClassName("remove-item");
var cartItem = document.getElementsByClassName("cart-item");
var subTotal = document.getElementById("subTotal");
var tax = document.getElementById("tax");
var total = document.getElementById("total");
var fullCartBox = document.getElementById("fullCartBox");

// First Cart System
plusBtn[0].addEventListener("click", function() {
    inputBox[0].value = ++inputBox[0].value;
    price[0].innerText = parseFloat(price[0].innerText) + 1219;
    subTotal.innerText = parseFloat(subTotal.innerText) + 1219;
    tax.innerText = (parseFloat(subTotal.innerText) * 0.03).toFixed(2);
    total.innerText = parseFloat(total.innerText) + 1219;
});

minusBtn[0].addEventListener("click", function() {
    if (inputBox[0].value > 1) {
        inputBox[0].value = inputBox[0].value - 1;
        price[0].innerText = parseFloat(price[0].innerText) - 1219;
        subTotal.innerText = parseFloat(subTotal.innerText) - 1219;
        tax.innerText = (parseFloat(subTotal.innerText) * 0.03).toFixed(2);
        total.innerText = parseFloat(total.innerText) - 1219;
    }
});

// Second Cart System
plusBtn[1].addEventListener("click", function() {
    inputBox[1].value = ++inputBox[1].value;
    price[1].innerText = parseFloat(price[1].innerText) + 59;
    subTotal.innerText = parseFloat(subTotal.innerText) + 59;
    tax.innerText = (parseFloat(subTotal.innerText) * 0.03).toFixed(2);
    total.innerText = parseFloat(total.innerText) + 59;
});

minusBtn[1].addEventListener("click", function() {
    if (inputBox[1].value > 1) {
        inputBox[1].value = inputBox[1].value - 1;
        price[1].innerText = parseFloat(price[1].innerText) - 59;
        subTotal.innerText = parseFloat(subTotal.innerText) - 59;
        tax.innerText = (parseFloat(subTotal.innerText) * 0.03).toFixed(2);
        total.innerText = parseFloat(total.innerText) - 59;
    }

});

// First Cart Item remove
removeItem[0].addEventListener("click", function() {
    cartItem[0].style.display = "none";
    subTotal.innerText = price[1].innerText;
    total.innerText = price[1].innerText;

    if (cartItem[0].style.display == "none" && cartItem[1].style.display == "none") {
        fullCartBox.innerHTML = "<h2 class='cardMsg'>This Cart is Empty !!!</h2>";
    }
});

// Second Cart Item remove
removeItem[1].addEventListener("click", function() {
    cartItem[1].style.display = "none";
    subTotal.innerText = price[0].innerText;
    total.innerText = price[0].innerText;

    if (cartItem[0].style.display == "none" && cartItem[1].style.display == "none") {
        fullCartBox.innerHTML = "<h2 class='cardMsg'>This Cart is Empty !!!</h2>";
    }
});