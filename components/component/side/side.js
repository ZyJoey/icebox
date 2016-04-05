require('common/util');

module.exports = Vue.component("sideBar",{
	template:__inline("side.html"),
	data:function(){
		var user = {};
		this.$http.get("server/getUser").then(function (data){
			if(data.data.code == 0){
				this.user = data.data.data;
				this.user.join_date = this.user.join_date.substr(0,10);
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