'use strict';

var http = require('http'),
	crud = require('./crud'),
	photo = require('./photo'),
	express = require('express'),
	app = express(),
	server = http.createServer(app),
	store  = new express.session.MemoryStore;

app.configure(function(){
	app.use(express.logger('dev')); 
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({secret:'whatever',store:store}));
	app.set('photos',__dirname + '/photos');
	
});

app.post('/createUser',crud.createUser);

app.post('/register',crud.register);

app.get('/getUser',crud.getUser);

app.post('/createFood',function(req,res){
	var newPath = photo.uploadPhoto(req,res);
	crud.createFood(req,res,newPath);
});

app.get('/foodList',crud.foodList);

server.listen(3000);
console.log('Listening on port 3000...');
