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
	}
});