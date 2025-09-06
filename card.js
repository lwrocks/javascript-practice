let counter = 0;

let countDisplay = document.getElementById("click-counter");

function incrementCounter() {
  countDisplay.innerText = counter++;
}
