import Exchange from "./js/exchange";

function populateDropdown() {
  let promise = Exchange.getExchange();
  promise.then(function (response) {
    
    const rates = response.conversion_rates
    const selectBox = document.getElementById('exchange-currency')
    console.log(selectBox)

    for (let i = 0; i < rates[0].length; i++) {
      const selectOption = document.createElement('option') 
      selectOption.innerText = 'hi'
      selectBox.appendChild(selectOption) 
    }

  });
}

populateDropdown();

// GETS USER INPUTTED USD AMOUNT
function handleSubmit(event) {
  event.preventDefault();
  const usdAmount = document.getElementById("usd-amt").value;
  usdAmount;
}

// WHEN PAGE LOADS, CALLBACK WILL GRAB FORM ADDING EVENT LISTENER FOR handleSubmit
window.addEventListener("load", function () {
  this.document.getElementById("form").addEventListener("submit", handleSubmit);
});

/* I'm thinking make an API call immediately when the page loads
   so I have data to populate my dropdown menu with!!!! */
