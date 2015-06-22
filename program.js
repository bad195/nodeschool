var http = require('http');
var url = require('url');
var port = process.argv[2];

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var server = http.createServer(function (req, res) {
  if (req.method != 'GET') {
    return null;
  }
  
  var urlObject = url.parse(req.url, true);
  var path = urlObject.pathname;
  var query = urlObject.query;
  
  if (typeof query.iso != 'undefined') {
    var date = new Date(query.iso);
    
    switch  (path) {
      case '/api/parsetime':
        var jsonData = {};
        jsonData.hour = addZero(date.getHours());
        jsonData.minute = addZero(date.getMinutes());
        jsonData.second = addZero(date.getSeconds());
        return res.end(JSON.stringify(jsonData));
        break;
        
      case '/api/unixtime':
        var jsonData = {};
        jsonData.unixtime = date.getTime();
        return res.end(JSON.stringify(jsonData));
        break;
    }
  }
  else {
    return null;
  }
})
server.listen(port);





