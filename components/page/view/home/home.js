require("component/menu/menu");
require("component/side/side");

module.exports = Vue.extend({
	inherit:true,
	template:__inline("home.html"),
	data:function(){
		return{
			"width":window.screen.availWidth,//页面宽度
			"height":window.screen.availHeight,//页面高度
			"curLeft":0,
			"header":{
				"title":""
			},
			"list":""
		}
	},
	methods:{
		isShowSide : function(){
			this.curLeft = this.curLeft === 0 ? 80 : 0;
			return this.curLeft; 
		}
	}
})