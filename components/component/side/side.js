module.exports = Vue.component("sideBar",{
	template:__inline("side.html"),
	data:function(){
		var user = {
			"name":"joey11",
			"birth":"2016-02-29"
		}
		return{
			user:user
		}
	},
	methods:{
		showSide:function(){
			return this.$parent.curLeft = 0;
		}
	}
});