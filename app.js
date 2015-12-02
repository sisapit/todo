var http = require('http');
var fs = require('fs');

var data = {items: [{text: "Hals waschen", done: false}, {text: "Brav sein", done: true}]}
var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        "Access-Control-Allow-Origin": "http://localhost:63342",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(data));
    response.end();
});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
