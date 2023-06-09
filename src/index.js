import {Exchange} from "./js/exchange";

// THIS FUNCTION WILL POPULATE THE DROP DOWN MENU WITH CURRENCY CODES
// THE VALUE OF EACH ELEMENT WILL BE EXCHANGE RATE
function populateDropdown() {
  // GET API DATA
  let promise = Exchange.getExchange();
  promise.then(function (response) {
    // ACCESS OBJECT WITH CONVERSION RATES AND CURRENCY CODES
    const rates = response.conversion_rates;
    // SELECT DROPDOWN MENU ELEMENT
    const selectBox = document.getElementById("exchange-currency");

    // GET KEY VALUE PAIRS FROM CONVERSION RATES OBJECT
    const currencyInfo = Object.entries(rates);

    currencyInfo.forEach(function (info) {
      const tag = info[0]; // INITIALIZE VARIABLE FOR KEY
      const rate = info[1]; // INITIALIZE VARIABLE FOR VALUE

      const selectOption = document.createElement("option"); // CREATE OPTION ELEMENT TAG
      selectOption.innerText = tag; // KEY GETS ASSIGNED TO INNER TEXT OF ELEMENT
      selectOption.value = rate; // VALUE GETS ASSIGNED TO VALUE ATTRIBUTE OF ELEMENT

      selectBox.appendChild(selectOption); // OPTION ELEMENT IS APPENDED TO DROPDOWN MENU
    });
  });
}

// PRINT ERRORS
export function printError() {
  const errorOutput = document.getElementById('error-msg') 
  errorOutput.innerText = 'Something went wrong!'
}



// DOES MATH FOR CURRENCY EXCHANGE
function exchangeMath(num1, num2) {
  return Math.round(num1 * num2);
}

// GETS USER INPUTTED USD AMOUNT
function handleSubmit(event) {
  event.preventDefault();
  // DOLLAR AMOUNT YOU INPUTTED
  const usdAmount = document.getElementById("usd-amt").value;
  // CURRENCY EXCHANGE VALUE/RATE
  const exchangeSelect = document.getElementById("exchange-currency")
  const exchangeValue = exchangeSelect.value;
  const exchangeText = exchangeSelect.options[exchangeSelect.selectedIndex].text;
  // DIV FOR RESULTS OUTPUT
  const outputDiv = document.getElementById("output-msg");

  

  outputDiv.innerText = null;
  outputDiv.innerText = `Your ${usdAmount} USD is equivalent to ${exchangeMath(
    usdAmount,
    exchangeValue
  )} ${exchangeText}`;
}

// WHEN PAGE LOADS, CALLBACK WILL GRAB FORM ADDING EVENT LISTENER FOR handleSubmit
window.addEventListener("load", function () {
  this.document.getElementById("form").addEventListener("submit", handleSubmit);
});

/* I'm thinking make an API call immediately when the page loads
   so I have data to populate my dropdown menu with!!!! */
window.addEventListener("load", populateDropdown);
