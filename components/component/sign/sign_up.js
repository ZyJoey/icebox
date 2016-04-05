var dialog = require('common/dialog');
module.exports = Vue.extend({
	inherit:true,
	template:__inline("sign_up.html"),
	data:function(){
		var user = {};
		return {
			user:user
		}
	},
	methods:{
		signUp:function(){
			if(!this.user.username){
				dialog.info({content:"请输入用户名"});
				return false;
			}else if(!this.user.password){
				dialog.info({content:"请输入密码"})
			}
			/*数据接口*/
			this.$http.post('/server/register',{'username':this.user.username,'password':md5(this.user.password)}).then(function (data){
				if(data.data.code == 0){
					this.$router.go('/');
				}else{
					dialog.info({"content":data.data.msg});
				}
			})
		}
	}
})