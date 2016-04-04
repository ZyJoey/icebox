module.exports = Vue.extend({
	inherit:true,
	template:__inline("sign.html"),
	data:function(){
		return {
			"height":window.screen.availHeight
		}
	}
})