const fs = require("fs");

const data = process.argv[2];

const callback = (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Append successful!");
  }
};

const constructLogMessage = (log) => {
  const date = new Date();
  return `- Log message: ${log} [${date}]\n`;
};

fs.appendFile("log.txt", constructLogMessage(data), callback);
