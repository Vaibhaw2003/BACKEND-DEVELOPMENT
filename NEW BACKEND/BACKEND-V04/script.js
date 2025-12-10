const http = require('http');

const server = http.createServer(function(res , req){
    req.end("harsh singh ");

});


server.listen(3000);

