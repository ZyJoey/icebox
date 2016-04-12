'use strict';

var fs = require('fs');

exports.uploadImg = function(req,res){
	var data = {};
	if(!req.files){
		data.code = 1;
		data.msg = "未选择上传图片";
		res.send(data);
	}
	fs.readFile(req.files.image.path,function(err,result){
		var imageName,newPath,newImageName;
			imageName = req.files.image.name;
		if(!imageName){
			data.code = 1;
			data.msg = "图片上传失败";
			res.send(data);
		}else{
			newImageName = Date.now()+"."+imageName.split('.')[1]
			newPath = __dirname + "\\photos\\" + newImageName;
			fs.writeFile(newPath,result,function(err){
				if(!err){
					data.code = 0;
					data.msg = "图片上传成功";
					data.result = "http://127.0.0.1:3000/photo/"+newImageName;
					res.send(data);
				}else{
					data.code = 1;
					data.msg = "图片上传失败";
					console.log(err);
					res.send(data);
				}
			})
		}
	})
}
exports.showImg = function(req,res){
	var id = req.params.id;
	var img = fs.readFileSync(__dirname + "\\photos\\" + id);
	res.writeHead(200, {'Content-Type': 'image/jpg' });
	res.end(img, 'binary');
}