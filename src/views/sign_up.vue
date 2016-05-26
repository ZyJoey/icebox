<template>
    <div>
        <form class="center-form" id="myForm" @keydown.enter.stop.prevent="signUp()">
            <input type="text" name="username"  class="text inputt"  placeholder="用户名" v-model="user.username">
            <input type="password" name="password"  class="text inputt"  placeholder="密码" v-model="user.password" >
            <button type="submit" class="text btn" @touchend.prevent="signUp()">登录</button>
        </form>
        <div class="form-link-wrap">
            <a v-link="{path:'/sign/in'}" class="form-link">创建账户</a>
        </div>
    </div>
</template>

<script>
    import dialog from '../static/js/dialog'
    import md5 from 'blueimp-md5'
    export default{
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
                this.$http.post('http://localhost:3000/register',{'username':this.user.username,'password':md5(this.user.password)}).then(function (data){
                    if(data.data.code == 0){
                        this.$router.go('/');
                    }else{
                        dialog.info({"content":data.data.msg});
                    }
                })
            }
        }
    }
</script>