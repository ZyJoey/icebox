var util = require("common/util");
var dialog = require("common/dialog");
require("common/food");
require("component");

module.exports = Vue.extend({
	inherit:true,
	template:__inline("detail.html"),	//与详情引用的模板相同
	data:function(){
		var curDate,createFood;
		curDate = new Date();
		curDate = curDate.format();	

		//设置默认日期
		createFood = food({
			"prodDate":curDate,
			"storedDate":curDate
		})
		//设置默认单位
		createFood.unit = createFood.UnitOptions[0];
		createFood.category = createFood.categoryOptions[0];
		createFood.saveUnit = createFood.saveUnitOptions[0];
		createFood.saveImg = "";
		return{
			"food":createFood
		}
	},
	methods:{
		submitForm:function(){
			var option,
				that = this ;
			var fileUploadFormData = new FormData();
			var uploadImg = document.getElementById("uploadImg");
			if(this.food.saveImg !== ""){
				fileUploadFormData.append('image',uploadImg.files[0]);
				this.$http.post('server/uploadImg',fileUploadFormData).then(function (data){
					if(data.data.code === 0){
						that.food.saveImg = data.data.result;
						createFood();
					}else{
						dialog.info({content:data.data.msg});
						return false;
					}
				})
			}else{
				createFood();
			}
			function createFood(){
				option = JSON.stringify(that.food);
				that.$http.post('server/createFood',option).then(function (data){
					if(data.data.code === 0){
						dialog.confirm({content:"保存成功,是否继续添加？"},function(){
							that.$router.go('/add');
						},function(){
							this.$parent.list = null;
							that.$router.go('/list/all');
						});

					}else{
						dialog.info({content:data.data.msg});
					}
				})
			};
		}
	}

})