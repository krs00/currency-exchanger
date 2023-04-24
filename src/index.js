





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
   window.addEventListener("load", function () {
    this.fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
    )
      .then(function (response) {
        return response.json();
      }) 
      .then(function (data) {
        return data; 
      });
  });
  
