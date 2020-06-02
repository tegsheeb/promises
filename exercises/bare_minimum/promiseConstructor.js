/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO

  return new Promise((resolve, reject) => {
  // return new Promise( (resolve, reject) => {
    fs.readFile(filePath, (err, data) =>{
      if (err) {
        reject(err);
      } else {
        var firstline = data.toString().split('\n')[0];
        resolve(firstline);
      }
    });
  });
};



// fs.readFile(filePath, (err, data) => {
//   if (err) {
//     callback(err);
//   } else {
//     var dataLine = data.toString().split('\n');
//     callback(null, dataLine[0]);
//   }
// });


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
};

// var getStatusCode = function (url, callback) {
//   // TODO
//   request(url, function(error, response) {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, response.statusCode);
//     }
//   });

// };


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
