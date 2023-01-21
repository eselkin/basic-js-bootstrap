// Import our custom CSS
import "../scss/style.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// The power of JavaScript -- Here we can find the select element
const select = document.querySelector("#campsite-select");
const reserveButton = document.querySelector("#reserve-button");
const reserveModalButton = document.querySelector("#reserve-modal-button");
/* Then we can make a list and loop over the list to create the options and insert them into the select element
   This is a cool little trick to create a list of numbers from 1 to N
   Array(20) creates an array of 20 elements (but they are undefined values-- not numbers -- nothing is in the elements)
   Any array has a .keys() method that returns an iterator of the indexes of the array
   Array.from() takes an iterator and creates an array from it
   So Array.from(Array(20).keys()) creates an array of numbers from 0 to 19 (we add 1 to each number later)
   See what happens when you change the number in the Array(N) to something else then refresh your page */
Array.from(Array(20).keys()).forEach((num) => {
  const opt = document.createElement("option");
  opt.value = num + 1;
  opt.innerHTML = num + 1 + " " + (num + 1 === 1 ? "person" : "people");
  select.appendChild(opt);
});

/*
 Now we can add an event listener to the select element
 When the user changes the value of the select element, we can update the summary-element span
*/
select.addEventListener("change", (e) => {
  // what do you think this tests for?
  if (e.target.value) {
    // we can change whether a button is disabled or not (disabled is a property on a button element)
    reserveButton.disabled = false;
    // we can add or remove classes from an element (classList is a property on any element)
    reserveButton.classList.remove("btn-light");
    reserveButton.classList.add("btn-primary");
    reserveButton.innerHTML =
      "Reserve for: " +
      e.target.value +
      " " +
      // what do you think Number(e.target.value) does?
      // what is this x ? y : z syntax? It's a ternary operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
      (Number(e.target.value) === 1 ? "person" : "people");
  } else {
    reserveButton.disabled = true;
    reserveButton.classList.add("btn-light");
    reserveButton.classList.remove("btn-primary");
    reserveButton.innerHTML = "Select number of people";
  }
});

reserveButton.addEventListener("click", (e) => {
  // what is an alert? Why do we need the parenthesis around the ternary operator (order of operations and precedence)? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

  reserveButton.disabled = true;
  reserveButton.classList.add("btn-light");
  reserveButton.classList.remove("btn-primary");
  reserveButton.innerHTML = "Select number of people";
  const button = document.getElementById("reserve-close-button");
  // Why do we need the click? because modal.hide() doesn't seem to close the modal... not sure why (maybe because it has that close data attribute)
  button.click();
  const alertDiv = document.getElementById("success-alert");
  // The text inside the alert gets updated with the number of people the user selected
  alertDiv.innerHTML = "You have successfully reserved for " + select.value;
  alertDiv.classList.remove("d-none");
  setTimeout(() => {
    // vanishing alert look up setTimeout
    select.value = "";
    alertDiv.innerHTML = "";
    alertDiv.classList.add("d-none");
  }, 3000);
});

reserveModalButton.addEventListener("click", (e) => {
  // this is how you do it in vanilla JS
  // "new" here is a keyword that creates a new instance of a class (the class is in the namespace bootstrap)
  // The actual class name is Modal but we can't access it directly because we imported all of bootstrap's JS
  // into the "bootstrap" variable on line 5
  var modal = new bootstrap.Modal(document.getElementById("reserveModal"), {});
  modal.show();
});
