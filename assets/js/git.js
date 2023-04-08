document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://api.github.com/repos/Daetalytica/daetalytica.github.io";
    const starCountElement = document.querySelector(".star-count");
    const forkCountElement = document.querySelector(".fork-count");
    const branchNameElement = document.querySelector(".branch-name");
    const commitLinkElement = document.querySelector(".commit-link");
    const commitHashElement = document.querySelector(".commit-hash");
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        starCountElement.textContent = data.stargazers_count;
        forkCountElement.textContent = data.forks_count;
      })
      .catch((error) => {
        console.error("Error fetching repository information:", error);
      });
  
    fetch(apiUrl + "/branches")
      .then((response) => response.json())
      .then((branches) => {
        const defaultBranch = branches.find((branch) => branch.name === "main" || branch.name === "master");
        if (defaultBranch) {
          branchNameElement.textContent = defaultBranch.name;
        }
      })
      .catch((error) => {
        console.error("Error fetching branches:", error);
      });
  
    fetch(apiUrl + "/commits")
      .then((response) => response.json())
      .then((commits) => {
        if (commits && commits.length > 0) {
          const latestCommit = commits[0];
          const commitHash = latestCommit.sha.slice(0, 7);
          const commitUrl = latestCommit.html_url;
          commitLinkElement.href = commitUrl;
          commitHashElement.textContent = commitHash;
        }
      })
      .catch((error) => {
        console.error("Error fetching commits:", error);
      });
  });
  