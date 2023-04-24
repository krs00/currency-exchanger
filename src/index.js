// GETS USER INPUTTED USD AMOUNT
function handleSubmit(event) {
  event.preventDefault();
  const usdAmount = document.getElementById("usd-amt").value;
  console.log(usdAmount);
}

// WHEN PAGE LOADS, CALLBACK WILL GRAB FORM ADDING EVENT LISTENER FOR handleSubmit
window.addEventListener("load", function () {
  this.document.getElementById("form").addEventListener("submit", handleSubmit);
});
