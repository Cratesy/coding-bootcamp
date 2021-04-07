const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signUpButton = document.querySelector("#sign-up");

const displayLogs = () => {
  const userObjectString = localStorage.getItem("user");

  if (userObjectString) {
    const user = JSON.parse(userObjectString);
    // const email = user.email;
    // const password = user.password;
    // const firstName = user.firstName;
    // const lastName = user.lastName;

    const { email, password, firstName, lastName } = user;

    console.log({ email, password, firstName, lastName });

    console.table(user);
  }
};

const onSignupClick = (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  const userObject = {
    email,
    password,
    firstName,
    lastName,
  };

  const userObjectString = JSON.stringify(userObject);
  localStorage.setItem("user", userObjectString);

  displayLogs();
};

displayLogs();

signUpButton.addEventListener("click", onSignupClick);
