var baseInfo = require('common/baseInfo');
var dialog = require('common/dialog');
require("common/food");
require("common/util");

module.exports = Vue.extend({
	inherit:true,
	template:__inline("detail.html"),
	data:function(){
		var	i,items,id,createFood = {},
			thisFood,indate,
			that = this;
		if(!this.$parent.list){
			baseInfo.getFoodlist(that,getFood);

		}else{
			getFood();
		}
		function getFood(){
			id = that.$route.params.id;
			items = that.$parent.list;
			for(i = 0; i < items.length; i++){
				if(items[i].id == id){
					thisFood = items[i];
					break;
				}
			}
			createFood = food(thisFood);
			indate = thisFood.deadline;
		}
		return{
			food:createFood,
			indate:indate,
			isDetail:true
		}
	},
	methods:{
		submitForm:function(){
			var that = this;
			if(this.indate < 0 ){
				this.$http.delete('server/delFood',{"id":this.$route.params.id}).then(function (data){
					if(data.data.code === 0){
						this.$parent.list = null;
						dialog.info({content:data.data.msg});
						that.$router.go('/list/all');
					}else{
						dialog.info({content:data.data.msg});
					}
				})
			}else{
				if(this.food.saveImg && !/^http\:\/\/127\.0\.0\.1\:3000\/photo\/.*$/.test(this.food.saveImg)){
					baseInfo.uploadImg(this,updateFood);
				}else{
					updateFood();
				}
			}
			function updateFood(){
				option = JSON.stringify(that.food);
				that.$http.put('server/updateFood/'+that.$route.params.id,option).then(function (data){
					if(data.data.code === 0){
						that.$parent.list = null;
						dialog.info({content:data.data.msg});
						that.$router.go('/list/all');

					}else{
						dialog.info({content:data.data.msg});
					}
				})
			}
			
		}
	}
})