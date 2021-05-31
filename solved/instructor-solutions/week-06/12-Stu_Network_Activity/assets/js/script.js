const requestUrl = "https://api.github.com/orgs/nodejs/repos";

const transformToJSON = (response) => {
  return response.json();
};

const displayRepositories = (data) => {
  console.log(data);
};

fetch(requestUrl).then(transformToJSON).then(displayRepositories);
