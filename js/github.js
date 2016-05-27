var apiKey = require('./../.env').apiKey;

exports.Repo = function(){
};

exports.Repo.prototype.getRepos = function(userName,public_repos){
  ///user information
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $('.showUserName').text("Username: " + response.login);
    $('.showNumberOfRepos').text("Here is how many repos: " + response.public_repos);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });


/// display list of repositories
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++){

      $('.showRepos').append(response[i].name + '<br>');
    }
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
