const ISSUES_URL =
  "https://api.github.com/repos/twitter/chill/issues?per_page=5";

const transformResponseToJSON = (response) => response.json();

const handleIssues = (issues) => {
  const displayInfo = (issue) => {
    const url = `URL: ${issue.url}`;
    const username = `USERNAME: ${issue.user.login}`;
    console.log(url);
    console.log(username);
  };

  issues.forEach(displayInfo);
};

fetch(ISSUES_URL).then(transformResponseToJSON).then(handleIssues);
