var dialog = require('common/dialog');
module.exports = Vue.extend({
	inherit:true,
	template:__inline("sign_in.html"),
	data:function(){
		var user = {};
		return{
			'user':user
		}
	},
	methods:{
		signIn:function(){
			if(!this.user.username){
				dialog.info({content:"请输入用户名"});
				return false;
			}
			if(/^[\_|\.]*$/.test(this.user.name)){
				dialog.info({content:"用户名请勿使用非法字符"});
				return false;
			}
			if(!this.user.password || !this.user.repeatpwd){
				dialog.info({content:"请输入密码"});
				return false;
			}
			if(this.user.password !== this.user.repeatpwd){
				dialog.info({content:"密码错误，请重新输入"});
				this.user.password = "";
				this.user.repeatpwd = "";
				return false;
			}
			/*数据接口*/
		}
	}
})