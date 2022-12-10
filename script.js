let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-whatCurrency");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;

    let result = (amount / currency);

    resultElement.innerText = result.toFixed(2);

});


