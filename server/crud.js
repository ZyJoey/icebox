'use strict';
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
var url = 'mongodb://localhost:27017/icebox';
MongoClient.connect(url,function(err,db){
	assert.equal(null,err);
	console.log("Connected correctly to server");
	db.close();
});