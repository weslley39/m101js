var express = require('express'),
	app = express();

app.get('/', function(red, res){
	res.send("Hello Worl From Express");
})

app.get('*', function(red, res){
	res.send("Page Not Found", 404)
})

app.listen(process.env.PORT)
console.log("Express Server Started on Port " + process.env.PORT)