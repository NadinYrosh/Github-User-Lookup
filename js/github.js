var apiKey = require('./../.env').apiKey;

exports.Repo = function(){
};

exports.Repo.prototype.getRepos = function(userName){
  ///user information
  $.get('https://api.github.com/users/nadinyrosh?access_token=' + apiKey).then(function(response){
    // $('.showUserName').text("Username: " + response.login);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
