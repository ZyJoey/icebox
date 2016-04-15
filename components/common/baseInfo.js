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
module.exports = {
	getFoodlist:getFoodlist
}
