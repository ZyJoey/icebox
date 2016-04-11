'use strict';
var 	mongo = require('mongodb'),
	objectId = mongo.ObjectId(),
	Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var 	server = new Server('localhost',27017,{auto_reconnect: true},{safe:true}),
	db = new Db('icebox',server);

db.open();

/*用户注册*/
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

/*用户登录*/
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

/*查询用户基本信息*/
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
			res.json(data);
		}else{
			data.code = 1;
			data.msg = "查询失败";
			res.send(data);
		}
		
	})
}

/*查询用户存储列表*/
exports.foodList = function(req,res){
	var username = req.session.username,
		data = {};
	db.collection('list').findOne({"username":username},function(err,result){
		if(result){
			data.code = 0;
			data.msg = "查询成功";
			data.result = result.foodList;
			res.json(data);
		}else{
			data.code = 1;
			data.msg = "查询失败";
			res.send(data);
		}
	})
}

/*新增列表记录*/
exports.createFood = function(req,res,newPath){
	var username = req.session.username,
		data = {},
		autoindex,
		length;
	db.collection('list').findOne({"username":username},function(err,result){
		if(result){
			if(result.foodList.length === 0){
				autoindex = 0;
			}else{
				length = result.foodList.length;
				autoindex = result.foodList[length-1].id + 1;
			}
			console.log(autoindex);
		}else{
			data.code = 1;
			data.msg = "查询失败";
			res.send(data);
		}
		updateFood();
	})
	function updateFood(){
		db.collection('list').update({"username":username},{$push:{"foodList":{
			"id":autoindex,
			"name": req.body.name,
			"category":req.body.category,
			"num": req.body.num,
			"unit":req.body.unit,
			"prodDate":req.body.prodDate,
			"storedDate":req.body.storedDate,
			"saveTime":req.body.saveTime,
			"saveUnit":req.body.saveUnit,
			"saveImg":newPath,
			"imgPosition":req.body.imgPosition
		}}},function(err,result){
			if(!err){
				data.code = 0;
				data.msg = "保存成功";
				res.send(data);
			}else{
				data.code = 1;
				data.msg = "保存失败";
				res.send(data);
			}
		})
	}
	
}