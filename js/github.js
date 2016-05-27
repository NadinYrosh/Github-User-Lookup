var apiKey = require('./../.env').apiKey;

exports.Repo = function(){
};

exports.Repo.prototype.getRepos = function(userName,public_repos){
  ///user information
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $('.showUserName').text("Username: " + response.login);
    $('.showRepos').text("Here is how many repos: " + response.public_repos);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
