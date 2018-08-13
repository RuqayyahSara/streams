var fs = require ("fs");

var readstream = fs.createReadStream("readstream.txt", "utf8");
var writestream = fs.createWriteStream("writestream.txt");

readstream.on("data", function(chunk){
    console.log("---------------------------");
    writestream.write(chunk);
});

readstream.on("end", function(chunk){
    console.log("------------------end------------------------");
});

