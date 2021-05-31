const url = "https://api.github.com/userss";
const redirectUrl = "404.html";

const transformToJSON = (response) => {
  const status = response.status;

  if (status === 404) {
    document.location.replace("redirectUrl");
  } else {
    return response.json();
  }
};

const displayData = (data) => {
  console.log(data);
};

fetch(url).then(transformToJSON).then(displayData);
