const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signUpButton = document.querySelector("#sign-up");
const msgDiv = document.querySelector("#msg");
const userEmailSpan = document.querySelector("#user-email");
const userPasswordSpan = document.querySelector("#user-password");

const renderLastRegistered = () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  if (email && password) {
    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
  }
};

const displayMessage = (type, message) => {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
};

const onSignupClick = (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    displayMessage("success", "Registered successfully");
    renderLastRegistered();
  }
};

renderLastRegistered();

signUpButton.addEventListener("click", onSignupClick);
