let counter = 0;

let countDisplay = document.getElementById("click-counter");

let saveDisplay = document.getElementById("save-counter");

// Function to increment the counter and update the display
function incrementCounter() {
  counter += 1;
  countDisplay.textContent = counter;
}

// Function to decrease the counter and update the display
function decreaseCounter() {
  counter -= 1;
  countDisplay.textContent = counter;
}

// Function to save the current counter value and update the save display
function save() {
  let countStr = " " + counter + " - ";
  saveDisplay.textContent += countStr;
  counter = 0;
  countDisplay.textContent = counter;
}
