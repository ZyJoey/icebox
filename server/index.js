'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var route = require('./routes/route');
var config = require('./config/config.json');

var app = express()

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'))

//跨域~
app.all("*", function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	if (req.method == 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
})

app.listen(config.app,function(){
	console.log('server is on port on ' + config.app)
})

route(app)

