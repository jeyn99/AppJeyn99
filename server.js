var http = require("http");
var fs = require('fs');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'});
  var allData = '';
  var student  = '';

  request.on('data',function(request){
    allData = JSON.parse(request);
    student = allData.name;
    subjectName = allData.subject;
  });

  request.on('end',function(request){
    fs.appendFile(subjectName + ".txt", student + "\n", function(err, data) {
    });
  });
}); server.listen(3000)