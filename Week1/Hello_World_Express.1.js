var express = require('express'),
	app = express(),
	cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

app.get('/', function(red, res){
	res.render('hello', {'name' : 'Swig'});
})

app.get('*', function(red, res){
	res.send("Page Not Found", 404)
})

app.listen(process.env.PORT)
console.log("Express Server Started on Port " + process.env.PORT)