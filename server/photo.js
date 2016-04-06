'use strict';

var fs = require('fs');

exports.uploadPhoto = function(req,res){
	var data = {};
	if(!req.files){
		return "";
	}
	fs.readFile(req.files.image.path,function(err,data){
		var imageName,newPath;
			imageName = req.files.image.name;
		if(!imageName){
			data.code = 1;
			data.msg = "图片上传失败";
			res.send(data);
		}else{
			newPath = __dirname + '/photos/' + imageName;
			fs.writeFile(newPath,data,function(err){
				if(!err){
					return newPath;
				}else{
					data.code = 1;
					data.msg = "图片上传失败";
					console.log("cannot writeFile");
					res.send(data);
				}
			})
		}
	})
}