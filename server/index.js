'use strict';

var http = require('http'),
	crud = require('./crud'),
	express = require('express'),
	app = express(),
	server = http.createServer(app);

app.configure(function(){
	app.use(express.logger('dev')); 
	//app.use(express.methodOverride());
	app.use(express.bodyParser());
	
});
app.post('/createUser',crud.createUser);

app.get('/',function(req,res){
	res.send("hello world");
});
server.listen(3000);
console.log('Listening on port 3000...');
