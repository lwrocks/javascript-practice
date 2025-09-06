let counter = 0;

let countDisplay = document.getElementById("click-counter");

function incrementCounter() {
  counter += 1;
  countDisplay.textContent = counter;
}

function save() {
  console.log("saved!");
}
