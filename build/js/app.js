(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '692440cd8c36ef6271c3bb3f96d7a1ac46c77a6a';

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
