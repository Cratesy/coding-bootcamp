const divContainerElement = document.querySelector(".container");
const divCardElements = document.querySelectorAll(".box");

const toggleCardNumber = (element) => {
  const dataAttributes = element.dataset;
  const numberToDisplay = dataAttributes.number;
  const stateOfCard = dataAttributes.state;

  if (stateOfCard === "hidden") {
    element.textContent = numberToDisplay;
    element.setAttribute("data-state", "visible");
  } else {
    element.textContent = "";
    element.setAttribute("data-state", "hidden");
  }
};

const onClickCard = (event) => {
  event.stopPropagation();

  const triggeringElement = event.target;

  toggleCardNumber(triggeringElement);
};

const onClickContainer = (event) => {
  const triggeringElement = event.target;

  if (triggeringElement.matches(".box")) {
    toggleCardNumber(triggeringElement);
  }
};

const addEventListenerToCard = (eachCard) => {
  eachCard.addEventListener("click", onClickCard);
};

divCardElements.forEach(addEventListenerToCard);

divContainerElement.addEventListener("click", onClickContainer);
