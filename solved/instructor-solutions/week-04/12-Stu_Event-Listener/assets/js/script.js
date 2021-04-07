// target elements and declare in memory
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const counterSpan = document.getElementById("count");
const stepInput = document.getElementById("step");

// initialise counter value to 0
let count = 0;
let step = 1;

// function to set the counter value on the span element
const setCounterText = () => {
  counterSpan.textContent = count;
};

const onStep = (event) => {
  const value = event.target.value;
  if (value && value !== "0") {
    step = parseInt(value, 10);
  } else {
    step = 1;
  }
};

const onIncrement = () => {
  count = count + step;
  setCounterText();
};

const onDecrement = () => {
  if (count > 0) {
    count = count - step;
  }
  setCounterText();
};

const onReset = () => {
  count = 0;
  setCounterText();
};

// Add event listener to increment button
incrementButton.addEventListener("click", onIncrement);

// Add event listener to decrement button
decrementButton.addEventListener("click", onDecrement);

// Add event listener to reset button
resetButton.addEventListener("click", onReset);

// Add event listener to step input
stepInput.addEventListener("change", onStep);
