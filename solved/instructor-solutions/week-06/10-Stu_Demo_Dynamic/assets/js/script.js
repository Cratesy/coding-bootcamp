const USERS_URL = "https://api.github.com/users?per_page=5";

const button = document.getElementById("fetch-button");

const handleClick = () => {
  const transformResponseToJSON = (response) => {
    return response.json();
  };

  const renderUsers = (users) => {
    const usersDiv = document.getElementById("users");

    const usersList = document.getElementById("users-list");

    if (usersList) {
      usersList.remove();
    }

    const ul = document.createElement("ul");
    ul.setAttribute("id", "users-list");

    const renderUser = (user) => {
      const loginName = user.login;
      const url = user.html_url;

      const li = document.createElement("li");

      const a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      a.textContent = loginName;

      li.append(a);

      ul.append(li);
    };

    users.forEach(renderUser);

    usersDiv.append(ul);
  };

  fetch(USERS_URL).then(transformResponseToJSON).then(renderUsers);
};

button.addEventListener("click", handleClick);
