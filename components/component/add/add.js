require("common/util");
require("common/food");

module.exports = Vue.extend({
	inherit:true,
	template:__inline("add.html"),
	data:function(){
		var curDate,curFood;
		curDate = new Date();
		curDate = curDate.format();	
		curFood = food({
			"prodDate":curDate,
			"storedDate":curDate
		})
		console.log(curFood);
		return{
			"food":curFood
		}
	}

})