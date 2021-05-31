const fetchMoreButton = document.getElementById("fetch-more");
const fetchSameButton = document.getElementById("fetch-same");

const transformToJSON = (response) => {
  return response.json();
};

const displayData = (data) => {
  console.log(data);
};

const fetchData = (url) => {
  fetch(url, { cache: "reload" }).then(transformToJSON).then(displayData);
};

const fetchMore = () => {
  fetchData("https://api.github.com/repos/nodejs/node/issues?per_page=10");
};

const fetchSame = () => {
  fetchData("https://api.github.com/repos/nodejs/node/issues?per_page=5");
};

const fetchInitialData = () => {
  fetchData("https://api.github.com/repos/nodejs/node/issues?per_page=5");
};

fetchMoreButton.addEventListener("click", fetchMore);
fetchSameButton.addEventListener("click", fetchSame);
window.addEventListener("load", fetchInitialData);
