var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
var fs = require('fs');
var buffer = new buffer();  
    response.send(buffer.tostring('utf 8', fs.readFileSync("index.hmt")))});



});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
