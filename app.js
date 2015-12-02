var http = require('http');
var fs = require('fs');
var service = require('./lib/modules/service');

var server = http.createServer(function (request, response) {
    var origin = (request.headers.origin || "*");

    // Ist dieser Request ein Security-Check des Browsers, um die Verfügbarkeit
    // der API zu prüfen? Falls die Methode OPTIONS ist, dann prüft der Browser
    // welche HTTP-Methoden und Properties für ihn zulässig sind.

    if (request.method.toUpperCase() === "OPTIONS") {
        response.writeHead(
            "204",
            "No Content",
            {
                "access-control-allow-origin": origin,
                "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
                "access-control-allow-headers": "content-type, accept",
                "access-control-max-age": 10, // Seconds.
                "content-length": 0
            }
        );
        response.end();
    } else {
        response.writeHead(200, {
            "Access-Control-Allow-Origin": origin,
            "Content-Type": "application/json"
        });
        response.write(JSON.stringify(service.getAllToDoItems()));
        response.end();
    }
});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
