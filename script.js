function calculate(){
const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const resultElement = document.querySelector(".js-result");
const currencyElement = document.querySelector(".js-whatCurrency");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = (amount / currency);
    resultElement.innerText = result.toFixed(2);

});
}

