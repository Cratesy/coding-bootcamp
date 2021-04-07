const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

const renderTodoItems = (todoItems) => {
  todoList.innerHTML = "";
  todoCountSpan.textContent = todoItems.length;

  const createListItem = (todoItem, index) => {
    const li = document.createElement("li");
    li.textContent = todoItem;
    li.setAttribute("data-index", index);

    const button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  };

  todoItems.forEach(createListItem);
};

const getTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  const todosParsed = JSON.parse(todos);

  if (todosParsed !== null) {
    return todosParsed;
  } else {
    return [];
  }
};

const init = () => {
  const todoItems = getTodosFromLocalStorage();

  renderTodoItems(todoItems);
};

const storeTodosInLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const onSubmit = (event) => {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText === "") {
    return;
  }

  const todoItems = getTodosFromLocalStorage();

  todoItems.push(todoText);
  todoInput.value = "";

  storeTodosInLocalStorage(todoItems);
  renderTodoItems(todoItems);
};

const onClick = (event) => {
  const element = event.target;

  if (element.matches("button")) {
    const index = element.parentElement.getAttribute("data-index");
    const todoItems = getTodosFromLocalStorage();
    todoItems.splice(index, 1);

    storeTodosInLocalStorage(todoItems);
    renderTodoItems(todoItems);
  }
};

todoForm.addEventListener("submit", onSubmit);
todoList.addEventListener("click", onClick);

init();
