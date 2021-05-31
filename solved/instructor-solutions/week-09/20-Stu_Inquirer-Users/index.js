const inquirer = require("inquirer");

const questions = [
  {
    message: "What is your name?",
    name: "username",
  },
  {
    message: "What languages do you know?",
    name: "languages",
  },
  {
    message: "What is your preferred method of communication?",
    type: "list",
    name: "communication",
    choices: ["Email", "Phone", "Text", "Post"],
  },
];

const handleAnswers = (answers) => {
  console.log(answers);
};

const handleError = (error) => {
  if (error.isTtyError) {
    console.log(error.isTtyError);
  } else {
    console.log(error);
  }
};

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    handleAnswers(answers);
  } catch (error) {
    handleError(error);
  }
};

init();
