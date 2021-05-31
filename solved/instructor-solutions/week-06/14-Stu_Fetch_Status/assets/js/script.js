const badRequestUrl = "https://api.github.com/orgs/nodejs/reposs?per_page=5";

const responseText = document.getElementById("response-text");

const getApi = (url) => {
  const transformToJSON = (response) => {
    const status = response.status;

    if (status === 404) {
      responseText.textContent = `${status} status`;
    }
    if (status === 200) {
      responseText.textContent = "See console log for data!!";
    }

    return response.json();
  };

  const displayData = (data) => {
    console.log(data);
  };

  fetch(url).then(transformToJSON).then(displayData);
};

getApi(badRequestUrl);
