const formEl = $("#skills-form");
const nameInputEl = $("#skill-name");
const dateInputEl = $("#datepicker");
const skillsListEl = $("#skills-list");

const renderSkills = (name, date) => {
  const li = $(`<li class="list-group-item">
    ${name} on ${date}
  </li>`);

  li.appendTo(skillsListEl);
};

const handleFormSubmit = (event) => {
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
  const skills = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
  ];

  $("#skill-name").autocomplete({
    source: skills,
  });
};

const datepicker = () => {
  $("#datepicker").datepicker();
};

formEl.on("submit", handleFormSubmit);

$(autocomplete);
$(datepicker);
