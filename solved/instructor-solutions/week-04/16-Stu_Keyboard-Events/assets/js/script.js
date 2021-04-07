const keyPressedElement = document.getElementById("key");
const keyCodeElement = document.getElementById("code");
const eventStatusElement = document.getElementById("status");

const displayInfo = (event, status) => {
  const key = event.key;
  const code = event.code;

  keyPressedElement.textContent = key;
  keyCodeElement.textContent = code;
  eventStatusElement.textContent = status;
};

const startTimer = (time) => {
  const resetDisplay = () => {
    keyPressedElement.textContent = "";
    keyCodeElement.textContent = "";
    eventStatusElement.textContent = "";

    clearTimeout(timer);
  };

  const timer = setTimeout(resetDisplay, time);
};

const onKeyDown = (event) => {
  displayInfo(event, "KEYDOWN");
};

const onKeyUp = (event) => {
  displayInfo(event, "KEYUP");
  startTimer(5000);
};

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
