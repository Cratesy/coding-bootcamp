const tipEl = document.querySelector("#tip-percentage");
const totalEl = document.querySelector("#total");
const submitEl = document.querySelector("#submit");
const tipH2El = document.querySelector("#tip-amount");
const totalH2El = document.querySelector("#new-total");

const calculateTip = (total, tipPercentage) => {
  const roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
};

const calculateTotal = (total, tipAmount) => {
  return parseFloat(total) + parseFloat(tipAmount);
};

const displayTip = (tipAmount, newTotal) => {
  tipH2El.textContent = tipAmount;
  totalH2El.textContent = newTotal.toFixed(2);
};

const addTip = (event) => {
  event.preventDefault();

  const tipPercentage = tipEl.value * 0.01;
  const total = totalEl.value;
  const tipAmount = calculateTip(total, tipPercentage);
  const newTotal = calculateTotal(total, tipAmount);

  displayTip(tipAmount, newTotal);
};

submitEl.addEventListener("click", addTip);
