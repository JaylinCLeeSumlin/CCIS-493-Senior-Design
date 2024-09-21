// use require() to load http module and store returned HTTP instance in http module
http = require('node:http');

// executes when server gets request from client
// processes incomign request and forms server response
listener = function(request, response) {
    // writeHead = send HTTP header
    // 200 = HTTP status
    // text/html = content type
    response.writeHead(200, {'Content-Tpye': 'text/html'});

    // send response body as 'Hello World'
    response.end('<h2 style="text-align: center;">Hello World</h2>');
}

// start server using createServer() and bind port 3000 using listen()
server = http.createServer(listener);
server.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');