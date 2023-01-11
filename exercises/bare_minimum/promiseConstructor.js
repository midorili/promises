/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise ((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function(err, content) {
      if (err) {
        reject(err);
      } else {
        resolve(content.slice(0, 22));
      }
    });
  });

  pluckFirstLineFromFileAsync()
    .then(firstLine => { return firstLine; })
    .catch(err => { console.log(err); });

};



// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise ((resolve, reject) => {
    request.get(url, function(err, response) {
      if (!err) {
        resolve(response.statusCode);
      } else {
        reject(err);
      }
    });
  });

  getStatusCodeAsync()
    .then(statusCode => {
      return statusCode;
    }).catch(err => {
      console.log(err);
    });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
