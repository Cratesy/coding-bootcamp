const maths = require("./maths");

const operation = process.argv[2];
const num1 = Number.parseInt(process.argv[3], 10);
const num2 = Number.parseInt(process.argv[4], 10);

const calculate = (operation, num1, num2) => {
  if (operation === "sum") {
    return maths.sum(num1, num2);
  }

  if (operation === "difference") {
    return maths.difference(num1, num2);
  }

  if (operation === "product") {
    return maths.product(num1, num2);
  }

  if (operation === "quotient") {
    return maths.quotient(num1, num2);
  }
};

const result = calculate(operation, num1, num2);
console.log(result);
