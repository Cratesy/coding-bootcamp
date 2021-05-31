const listItems = document.querySelectorAll("#songs li");

for (const li of listItems) {
  li.setAttribute("class", "red");
}
