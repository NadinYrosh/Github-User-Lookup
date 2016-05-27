var apiKey = require('./../.env').apiKey;
var Repo = require('./../js/github.js').Repo;

console.log('test!!');

$(document).ready(function(event) {
 event.preventDefault;

 var newUser = new Repo();
   $("#formId").submit(function() {

    var userName = $('#userInput').val();
    $('#userInput').val('');

    newUser.getRepos(userName);
    $('.showUserName').text(userName);
  });
});
