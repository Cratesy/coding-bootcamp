const passwordBtnEl = $("#password-btn");
const passwordDisplayEl = $("#password-display");

const getPasswordCharacter = () =>
  String.fromCharCode(Math.floor(Math.random() * 93) + 34);

const passwordGenerator = (num) => {
  let password = "";
  for (let i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
};

const onClick = () => {
  const newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
};

passwordBtnEl.on("click", onClick);
