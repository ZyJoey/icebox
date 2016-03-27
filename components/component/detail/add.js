var util = require("common/util");
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
			"food":createFood,
			"imgPosition":"50% 50%"
		}
	},
	methods:{
		
	}

})