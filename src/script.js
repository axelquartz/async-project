// DOM elements to create

const container = document.querySelector(".container");
const inputValue = document.getElementById("movie-search");
const submnitButton = document.getElementById("submit-button");
//Temporal element
const displayValue = document.createElement("p");

// Event Listeners
inputValue.addEventListener("input", (e) => {
  displayValue.textContent = e.target.value;
});

submnitButton.addEventListener("click", (e) => {
  e.preventDefault();
  container.appendChild(displayValue);
});
