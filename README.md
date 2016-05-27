# Github User Lookup

#### Web app for a searching users by theirs gitHub user names.| May 27, 2016

#### By Nadiya Yeroshkina

## Description
This app is using GitHub API. You can search for a user by the GitHub user name and it will display  general information about the user with a list of  their public repositories.
## Setup/Installation Requirements

Clone this repository.
```
$ cd ~/Desktop
$ git clone https://github.com/NadinYrosh/Github-User-Lookup.git
$ cd Github-User-Lookup
```
Open terminal and run:
```
$ npm install
```
```
$ bower install
```
```
$ gulp build
```
```
$ gulp serve
```
To properly utilize this site you will need to use a github API key, and create a file called ".env" in the top level of the directory, with this:

exports.apiKey = "API-KEY-GOES-HERE";

Know this is for security.

You can get a github API key from the "Settings" page of your account, and click "Personal access tokens". With access to a key, you can run this site by typing "gulp serve" at the top of the directory in bash.

## Support and contact details

_Questions or comments can be directed to the developer_

_HTML, CSS, Bootstrap, JavaScript, JQuery, GitHub API._

### License

**This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).**

Copyright (c) 2016 Yeroshkina N.
