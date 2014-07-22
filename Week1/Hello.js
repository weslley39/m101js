var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200);
  response.end("Node.js rodando..");
}).listen(8080);

console.log('Rodando na porta 8080');