var http = require("http");
var fs = require ("fs");

var httpServer = http.createServer(function(req,res){
res.writeHead(200,{"Content-Type": "text/plain"});

var readstream = fs.createReadStream("readstream.txt", "utf8");
readstream.pipe(res);
});

httpServer.listen(2018, function(req,res){
    console.log("listening to http server 2018");
});