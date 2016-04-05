'use strict';

var http = require('http'),
	crud = require('./crud'),
	express = require('express'),
	app = express(),
	server = http.createServer(app),
	store  = new express.session.MemoryStore;

app.configure(function(){
	app.use(express.logger('dev')); 
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({secret:'whatever',store:store}));
	
});

app.post('/createUser',crud.createUser);
app.post('/register',crud.register);
app.get('/getUser',crud.getUser);

app.get('/',function(req,res){
	res.send("hello world");
});
server.listen(3000);
console.log('Listening on port 3000...');
