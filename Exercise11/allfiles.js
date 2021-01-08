var http=require('http');
var fs=require('fs');
http.createServer(function (req, res) {
fs.readFile('sona.txt', function(err, data) {
res.writeHead(200, {'Content-Type': 'text/html'});
   // res.write("<h1>"+data+"</h1>");
res.end("<h1>"+data+"</h1>");
  });
}).listen(8081);



fs.appendFile('sona.txt', 'All is WELL !', function (err) {
if (err) throwerr;
console.log('Saved!');
});


fs.writeFile('university.txt', 'SCT has attained the status of University', function (err) {
if (err) throwerr;
console.log('Replaced!');
});


fs.unlink('university.txt', function (err) {
if (err) throwerr;
console.log('File deleted!');
});


console.log("Going to create directory /tmp/test");
fs.mkdir('/test',function(err) {
if (err) {
return console.error(err);
   }
console.log("Directory created successfully!");
});

// readfile in a directory

console.log("Going to read directory /tmp");
fs.readdir("./",function(err, files) {
if (err) {
return nconsole.error(err);
   }
files.forEach(function (file) {
console.log(file );
   });
});

