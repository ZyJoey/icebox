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
	
});

app.post('/createUser',crud.createUser);

app.post('/register',crud.register);

app.get('/getUser',crud.getUser);

app.post('/uploadImg',photo.uploadImg);

app.post('/createFood',crud.createFood);

app.get('/foodList',crud.foodList);

app.get('/photo/:id',photo.showImg);

app.put('/updateFood/:id',crud.updateFood);

app.delete('/delFood',crud.delFood);

app.get('/returnSign',function (req,res){
	var data = {};
	req.session.username = null;
	data = {
		"code":0,
		"msg":"退出成功"
	};
	res.send(data);
})

server.listen(3000);
console.log('Listening on port 3000...');
