var fs = require ("fs");

var readstream = fs.createReadStream("readstream.txt", "utf8");

readstream.on("data",function(chunk){
    try{
    console.log("---------------------------------");
    console.log(chunk);
    } catch(err){
        console.log(err);
    }
});

readstream.on("end", function(chunk){
    console.log("------------------end------------------------");
});
