/*
The const declaration creates a read-only reference to a value. 
It does not mean the value it holds is immutable, solely that 
the variable identifier can not be reassigned.
*/
const http = require("http");

const myServer = http.createServer(execute_request);
myServer.listen(8080);

function execute_request(request, response) {
    var body = 'Programmers rock\n';
    var content_length = body.length;

    response.writeHead(200, {
        'Content-Length' : content_length,
        'Content-type' : 'text/plain'
    });
    response.end(body);
}


