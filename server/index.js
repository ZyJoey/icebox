'use strict';

var http = require('http'),
	express = require('express'),
	app = express(),
	server = http.createServer(app);

app.get('/',function(request,response){
	var arr = [
			{"name":"可乐","num":"2","cell":"瓶","date":"1","datecell":"天"},
			{"name":"养乐多","num":"1","cell":"瓶","date":"2","datecell":"天"},
			{"name":"橙汁","num":"3","cell":"瓶","date":"1","datecell":"天"},
			{"name":"芬达","num":"1","cell":"瓶","date":"2","datecell":"天"},
		];
	response.send(arr);
});

server.listen(3000);
