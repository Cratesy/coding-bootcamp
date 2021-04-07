const shoppingForm = $("#shopping-form");
const shoppingInput = $("#shopping-input");
const shoppingList = $("#shopping-list");

const onSubmit = (event) => {
  event.preventDefault();

  const shoppingItem = shoppingInput.val();

  if (!shoppingItem) {
    alert("Item cannot be empty. Please add an item!!");
  } else {
    const li = $("<li>").text(shoppingItem);

    shoppingList.append(li);

    shoppingInput.val("");
  }
};

shoppingForm.on("submit", onSubmit);
