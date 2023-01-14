// Import our custom CSS
import "../scss/style.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// The power of JavaScript -- Here we can find the select element
const select = document.querySelector("#campsite-select");
const reserveButton = document.querySelector("#reserve-button");
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
    reserveButton.classList.add("btn-light");
    reserveButton.innerHTML = "Select number of people";
  }
});

reserveButton.addEventListener("click", (e) => {
  // what is an alert? Why do we need the parenthesis around the ternary operator (order of operations and precedence)? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
  alert(
    "You reserved for " +
      select.value +
      (Number(select.value) === 1 ? " person!" : " people!")
  );
});
