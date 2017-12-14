
var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type" : "text/plain"});
    response.end("Sup J-Dog, Does it work?  \n");
});

server.listen(8080);




