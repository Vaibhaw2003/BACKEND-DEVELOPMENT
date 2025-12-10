const http = require("http");

const Server = http.createServer(function(res, req){   // ya pe [ res , req] ko same way me likhna jaruri hai nhi to server run nhi hoga.
    req.end("vaibhaw singh");
});

Server.listen(4000);