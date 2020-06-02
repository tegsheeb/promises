/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, (err, data) => {
    if (err) {
      callback(err);
    } else {
      var dataLine = data.toString().split('\n');
      callback(null, dataLine[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function(error, response) {
    if (error) {
      // console.log(error);
      callback(error);
    } else {
      callback(null, response.statusCode);
    }
  });
  // request.get({
  //   url: url,
  //   type: 'GET',
  //   success: () => {
  //     callback(err, data.statusCode);
  //   },
  //   error: console.log('error on getting status code')
  // });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
