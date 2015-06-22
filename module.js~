var fs = require('fs');
var path = require('path');
module.exports = function (pathName, extName, callback) { 
  var list = Array();  
  fs.readdir(pathName, function readExts(err, data) {
    if (err) 
      return callback(err);

    for (var i in data) {
       if (path.extname(data[i]) === '.' + extName) {
          list.push(data[i]);
       }
    }
    callback(null, list);
  });
}
