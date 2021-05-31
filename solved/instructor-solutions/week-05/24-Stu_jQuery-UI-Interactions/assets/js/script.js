const formEl = $("#skills-form");
const nameInputEl = $("#skill-name");
const dateInputEl = $("#datepicker");
const skillsListEl = $("#skills-list");

const renderSkills = function (name, date) {
  const li = $(`<li class="list-group-item">${name} on ${date}</li>`);
  li.appendTo(skillsListEl);
};

const handleFormSubmit = function (event) {
  event.preventDefault();

  const nameInput = nameInputEl.val();
  const dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log("You need to fill out the form!");
    return;
  }

  renderSkills(nameInput, dateInput);

  nameInputEl.val("");
  dateInputEl.val("");
};

const autocomplete = () => {
  const skillNames = [
    "Bootstrap",
    "C",
    "C++",
    "CSS",
    "Express.js",
    "Git",
    "HTML",
    "Java",
    "JavaScript",
    "jQuery",
    "JSON",
    "MySQL",
    "Node.js",
    "NoSQL",
    "PHP",
    "Python",
    "React",
    "Ruby",
  ];

  $("#skill-name").autocomplete({
    source: skillNames,
  });
};

const datepicker = () => {
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
  });
};

const sortable = () => {
  $("#skills-list").sortable({
    placeholder: "ui-state-highlight",
  });
  $("#skills-list").disableSelection();
};

formEl.on("submit", handleFormSubmit);

$(autocomplete);
$(datepicker);
$(sortable);
