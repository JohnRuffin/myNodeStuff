function MyWebServer(){
}

//all instances will share this method
MyWebServer.prototype.handle_request = function(req, resp) {
    var body = 'Programmers rock\n';
    var content_length = body.length;

    resp.writeHead(200, {
        'Content-Length' : content_length,
        'Content-type' : 'text/plain'
    });
    resp.end(body);
}

//all instances share http from Node.js 
MyWebServer.prototype.http = require("http");

//WOW! Already re-using re-usable code in this assignment LOL
//  no need for instances to do this stuff
//  yes, I laugh at my own humor
MyWebServer.prototype.server = 
    MyWebServer.prototype.http.createServer(MyWebServer.prototype.handle_request);


//instantiate a new instance of MyWebServer and port to listen
var mws = new MyWebServer();
mws.server.listen(8080);



