/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = require('request');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return new Promise((resolve, reject) => {
    fs.readFile(readFilePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        var username = data.toString().split('\n')[0];
        resolve(username);
      }
    });
  }).then((username)=> {
    return new Promise((resolve, reject) => {
      var options = {
        url: 'https://api.github.com/users/' + username,
        headers: { 'User-Agent': 'request' },
        json: true // will JSON.parse(body) for us
      };

      request.get(options, (err, response, body) => {
        if (err) {
          reject(err);
        } else if (body.message) {
          reject(new Error('Failed to get GitHub profile: ' + body.message));
        } else {
          // console.log('this is body: ', body);
          resolve(body);
        }
      });
    });
  }
  ).then( (body) => {
    return new Promise ((resolve, reject) => {
      var bodyJSON = JSON.stringify(body);
      fs.writeFile(writeFilePath, bodyJSON, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }).catch ((err) => {
    console.log(err);
  });
  // missing catch

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
