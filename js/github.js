var apiKey = require('./../.env').apiKey;

exports.Repo = function(){
};

exports.Repo.prototype.getRepos = function(userName, public_repos, avatar_url){
  ///user information
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $('.showUserName').empty();
    $('.showUserName').append('<h3>Username: '  + response.login + '</h3>');
    $('.showNumberOfRepos').empty();
    $('.showNumberOfRepos').append('<h3>Number of repositories: ' + response.public_repos + '</h3>');
    $('.showImg').empty();
    $('.showImg').append("<img src=" + response.avatar_url + ">");
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.Repo);
  });


/// display list of repositories with a link to it
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++){
      $('.showRepos').append('<h3>' + 'Repo name: ' + '<h4>' + response[i].name + '</h4><p>' + response[i].description + ' <a href="' + response[i].html_url + '"><br> <h4> Link </h4> </a></p>');
    }
    $('.showRepos').append('</ol>');
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.Repo);
  });
};
