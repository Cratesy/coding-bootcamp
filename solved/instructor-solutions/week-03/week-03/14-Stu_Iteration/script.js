// Declare the students array
const students = ["Alice", "Carol", "Tom", "Lisa", "John"];

// Store the length of students array in variable
const length = students.length;

console.log("Number of students", length);

// For loop
for (let i = 0; i < length; i++) {
  // store current student name
  const currentStudent = students[i];

  // construct your message and store
  const message = `Great to see you, ${currentStudent}!`;

  // console log message
  console.log(message);
}
