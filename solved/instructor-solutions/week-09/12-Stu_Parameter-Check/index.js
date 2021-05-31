const compareArgs = (arg1, arg2) => arg1 === arg2;

const arg1 = process.argv[2];
const arg2 = process.argv[3];

const result = compareArgs(arg1, arg2);
console.log(result);
