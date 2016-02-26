require("component/list/list");

module.exports = Vue.extend({
	inherit:true,
	template:__inline("home.html"),
	data:function(){
		return{
			"header":{
				"title":""
			}
		}
	}
})