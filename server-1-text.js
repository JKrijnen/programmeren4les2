//
// server-1-text.js
//
var http = require('http');

http.createServer(function (request, response){
    console.log('Er was een request. ');
    response.writeHead(200, {'Content-Type': 'application/json'});
    let result = {
        'firstname': 'Jake',
        'lastname': 'Krijnen'
    };
    response.write(JSON.stringify(result)).end();
}).listen(3000);

console.log('De server luistert op port 3000');