require('common/util');

module.exports = Vue.component("sideBar",{
	template:__inline("side.html"),
	data:function(){
		var user = {};
		this.$http.get("server/getUser").then(function (data){
			if(data.data.code == 0){
				this.user = data.data.data;
				this.user.join_date = this.user.join_date.substr(0,10);
				this.user.photo = "http://7xsnyd.com2.z0.glb.clouddn.com/3bb09abea4c3.png";
			}else{
				this.$router.go('/sign');
			}
		})
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