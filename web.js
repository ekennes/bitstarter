var express = require('express');

var app = express.createServer(express.logger());
var buffer = new Buffer(20)


fs.readFileSync('/bitstarter/bitstarter/index.html', buffer)

app.get('/', function(request, response) {
  response.send(buffer.tostring('utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
