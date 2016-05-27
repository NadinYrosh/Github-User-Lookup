(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '692440cd8c36ef6271c3bb3f96d7a1ac46c77a6a';

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Repo = require('./../js/github.js').Repo;


$(document).ready(function() {
  var newUser = new Repo();
  $("#formId").submit(function(event) {
    event.preventDefault();
    var userName = $('#userInput').val();
    $('#userInput').val('');
    newUser.getRepos(userName);
  });
});

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
