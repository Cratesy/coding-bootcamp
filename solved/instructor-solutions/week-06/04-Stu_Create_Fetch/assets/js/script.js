const repoList = document.querySelector("ul");
const fetchButton = document.getElementById("fetch-button");

const getApi = () => {
  const requestUrl = "https://api.github.com/users/surajverma2587/repos";

  const responseJson = (response) => {
    return response.json();
  };

  const renderRepos = (data) => {
    const callback = (each) => {
      const listItem = document.createElement("li");

      listItem.textContent = each.html_url;

      repoList.appendChild(listItem);
    };

    data.forEach(callback);
  };

  fetch(requestUrl).then(responseJson).then(renderRepos);
};

fetchButton.addEventListener("click", getApi);

// General format

// const convertResponseToJSON = (response) => {
//   return response.json();
// };

// const doSomethingWithJsonData = (jsonData) => {
//   // do something here
// };

// fetch(url).then(convertResponseToJSON).then(doSomethingWithJsonData);
