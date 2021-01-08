var express=require('express');

var mysql=require('mysql');

var con=mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "test"
});

con.connect(function(err){
	if(err) throw err;
console.log("connection established");
	});
var app=express();

app.get('/client.html', function (request, response) {
response.sendFile(__dirname+"/"+"client.html");
})

app.get('/process_get', function (request, res) {
var name=request.query.name;

console.log("Welcome to Node JS program "+name);
con.query("SELECT * FROM dictionary where word=\'"+name+"\'", function (err, result, fields) {
if (err) throw err;
console.log(result);
console.log(result.length)
if(result.length==1)
    {
	var Data=JSON.stringify(result);
		console.log(Data);
		var out=JSON.parse(Data);
		console.log(out[0].meaning+out.length);
	    res.end("<h1> Meaning of the word "+out[0].word+" is "+out[0].meaning+"</h1>");
	}
	else
	{
		res.end("<h1> Meaning of the word "+name+" Not Found</h1>");
	}
  });

});

var server=app.listen(1234, function () {
console.log("Example app listening at http://127.0.0.1:1234");
});

