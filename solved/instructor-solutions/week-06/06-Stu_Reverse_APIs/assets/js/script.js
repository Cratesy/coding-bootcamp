const requestUrl = "https://api.github.com/orgs/Netflix/repos";

// JQuery AJAX

/**
 * JQuery AJAX requests require the follow:
 * 1. options
 * 2. a function to handle the response from the API
 */

const ajaxOptions = {
  url: requestUrl,
  method: "GET", // others include POST, DELETE, PUT (HTTP request methods)
};

// this function will always receive the response from the API as the parameter
const handleResponse = (response) => {
  console.log("AJAX Response \n-------------");
  console.log(response);
};

// AJAX Request
$.ajax(ajaxOptions).then(handleResponse);

// Browser Fetch Method

/**
 * Browser Fetch Method requests require the follow:
 * 1. URL to the API
 * 2. a function to transform the response to a JSON object
 * 3. a function to handle the response from the API
 */

// this function will always receive the response from the API as the parameter (a function to transform the response to a JSON object)
const jsonResponse = (response) => {
  return response.json();
};

// this function will always receive the response from the API as the parameter (a function to handle the response from the API)
const handleFetchResponse = (response) => {
  console.log("Fetch Response \n-------------");
  console.log(response);
};

// Fetch Request
fetch(requestUrl).then(jsonResponse).then(handleFetchResponse);

// Browser XMLHttpRequest (XHR)

const xhr = new XMLHttpRequest();

const onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log("XMLHttpRequest Response \n-------------");
    console.log(xhr.response);
  }
};

xhr.onreadystatechange = onreadystatechange;
xhr.open("GET", requestUrl);
xhr.send();
