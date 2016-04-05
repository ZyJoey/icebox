'use strict';
var 	mongo = require('mongodb'),
	objectId = mongo.ObjectId(),
	Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var 	server = new Server('localhost',27017,{auto_reconnect: true},{safe:true}),
	db = new Db('icebox',server);

db.open();

exports.createUser = function(req,res){
	var username = req.body.username,
		password = req.body.password,
		data = {};

	db.collection("list").findOne({
		"username":username
	},function(err,result){
		if(!err){
			if(result){
				data.code = 1;
				data.msg = "用户名已存在，请重新输入";
				res.send(data);
			}
		}
		insertList();
	});

	function insertList(){
		db.collection("list").insert({
			"_id":objectId,
			"username":username,
			"foodList":[]
		},function(err,result){
			if(!err){
				insertUser();
			}
		})
	}
	function insertUser(){
		db.collection("user").insert({
			"username":username,
			"password":password,
			"join_date":new Date(),
			"foodList":{
				"$ref":"list",
				"$id":objectId,
				"$db":"icebox"
			}
		},function(err,result){
			if(!err){
				data.code = 0;
				data.msg = "创建成功";
				req.session.username = username;
				res.send(data);
			}
		})
	}
};

exports.register = function(req,res){
	var username = req.body.username,
		password = req.body.password,
		data = {};
	db.collection('user').findOne({"username":username},function(err,result){
		if(result === null){
			data.code = 1;
			data.msg = "用户不存在";
			res.send(data);
		}else if(result.password !== password){
			data.code = 1;
			data.msg = "密码错误，请重新输入";
			res.send(data);
		}else{
			data.code = 0;
			data.msg = "登陆成功";
			req.session.username = username;
			console.log(req.session.username);
			res.send(data);
		}
		
	})
}
exports.getUser = function(req,res){
	var 	username = req.session.username,
		data = {};
	db.collection('user').findOne({"username":username},function(err,result){
		if(result){
			data = {
				code : 0,
				msg:"查询成功",
				data:{
					username : result.username,
					join_date :result.join_date
				}
			}
			res.send(data);
		}else{
			data.code = 1;
			data.msg = "查询失败";
			res.send(data);
		}
		
	})
}