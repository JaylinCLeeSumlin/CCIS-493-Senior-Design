http = require('node:http');

listener = function(request, response) {
    response.writeHead(200, {'Content-Tpye': 'text/html'});
    // writeHead = send HTTP header
    // 200 = HTTP status
    // text/html = content type

    response.end('<h2>Hello World</h2>');
    // send response body as 'Hello World'
}

server = http.createServer(listener);
server.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');