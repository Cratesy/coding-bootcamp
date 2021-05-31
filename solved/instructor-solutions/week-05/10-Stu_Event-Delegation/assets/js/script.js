const shoppingFormEl = $("#shopping-form");
const shoppingListEl = $("#shopping-list");

const handleFormSubmit = (event) => {
  event.preventDefault();

  const shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log("No shopping item filled out in form!");
    return;
  }

  const shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val("");
};

const handleRemoveItem = (event) => {
  // get the button
  // get it's parent which is the li
  // remove the li from the DOM tree
  $(event.target).parent().remove();
};

shoppingFormEl.on("submit", handleFormSubmit);
shoppingListEl.on("click", ".delete-item-btn", handleRemoveItem);
