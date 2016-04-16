var baseInfo = require('common/baseInfo');
var toFood = require("common/food");
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
			
		}
	}
})