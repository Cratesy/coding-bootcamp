const students = ["Alice", "Carol", "Tom", "Lisa", "John"];

const length = students.length;

console.log("Number of students", length);

let i = 0;

while (i < length) {
  // get current student
  const currentStudent = students[i];

  // construct message
  const message = `Great to see you, ${currentStudent}!`;

  // log message
  console.log(message);

  i = i + 1;
}

console.log("DONE");
