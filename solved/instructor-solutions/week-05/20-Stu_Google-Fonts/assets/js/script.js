const formEl = $("#guestbook-form");
const nameInputEl = $("#name-input");
const commentInputEl = $("#comment-input");

const guestBookDisplayEl = $("#guest-book-display");

const renderGuestData = (name, comment) => {
  const card = `<div class="col-12 col-sm-4 col-md-3">
    <div class="card h-100 custom-card">
      <h5 class="card-header custom-card-header">${name}</h5>
      <div class="card-body">
        <p class="card-text">${comment}</p>
      </div>
    </div>
  </div>`;

  guestBookDisplayEl.append(card);
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const nameInput = nameInputEl.val();
  const commentInput = commentInputEl.val();

  if (!nameInput || !commentInput) {
    console.log("You need to fill out the form!");
    return;
  }

  renderGuestData(nameInput, commentInput);

  // reset form
  nameInputEl.val("");
  commentInputEl.val("");
};

formEl.on("submit", handleFormSubmit);
