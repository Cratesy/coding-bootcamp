const transformToJSON = (response) => {
  return response.json();
};

const displayData = (data) => {
  console.log(data);
};

const BASE_URL = "https://api.github.com/repos/nodejs/node/issues";

const url = new URL(BASE_URL);

url.searchParams.append("per_page", "10");
url.searchParams.append("state", "open");
url.searchParams.append("sort", "created");
url.searchParams.append("direction", "desc");

// const url =
//   "https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc";

fetch(url).then(transformToJSON).then(displayData);
