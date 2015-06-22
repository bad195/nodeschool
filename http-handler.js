var http = require('http');

module.exports = function (url, callback) { 
  http.get(url, function(res) {
    res.setEncoding('utf8');

    res.on('error', function(err) {
      callback(err, null);
    });

     res.on('data', function(res) {
      callback(null, res);
    })
  });
}
