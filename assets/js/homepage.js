var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
    console.log("function was called");
  };
  
  getUserRepos();
