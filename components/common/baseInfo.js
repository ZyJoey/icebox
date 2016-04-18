var deadline = require('common/deadline');
var dialog = require('common/dialog');


/*获取列表信息*/
function getFoodlist(that,fn){
	that.$http.get('server/foodList').then(function(data){
		if(data.data.code == 0){
			result = data.data.result;
			for(i = 0; i < result.length;i++){
				result[i].deadline = deadline(result[i].prodDate,result[i].saveTime,result[i].saveUnit.text);
			}
			that.$parent.list = result;
			if(fn){
				fn();	
			}
		}else{
			dialog.info(data.data.msg);
		}
	})
}
function uploadImg(that,fn){
	var fileUploadFormData = new FormData();
	var uploadImg = document.getElementById("uploadImg");
	fileUploadFormData.append('image',uploadImg.files[0]);
	that.$http.post('server/uploadImg',fileUploadFormData).then(function (data){
		if(data.data.code === 0){
			that.food.saveImg = data.data.result;
			fn();
		}else{
			dialog.info({content:data.data.msg});
			return false;
		}
	})
}
module.exports = {
	getFoodlist:getFoodlist,
	uploadImg:uploadImg
}
