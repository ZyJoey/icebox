<template>
    <div>
        <form class="center-form" id="myForm" @keydowm.enter.stop.prevent="signIn()">
            <input type="text" name="username"  class="text inputt" placeholder="请输入用户名" v-model="user.username">
            <input type="password" name="password" class="text inputt"  placeholder="密码" v-model="user.password">
            <input type="password" name="repeatpwd" class="text inputt"  placeholder="重复密码" v-model="user.repeatpwd" >
            <button type="submit" class="text btn" @touchend.prevent="signIn()">注册</button>
        </form>
        <div class="form-link-wrap">
            <a v-link="{path:'/sign'}" class="form-link">返回登陆</a>
        </div>
    </div>
</template>

<script>
    import dialog from '../static/js/dialog'
    import md5 from 'blueimp-md5'
    export default{
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
                this.$http.post('http://localhost:3000/createUser',{'username':this.user.username,'password':md5(this.user.password)}).then(function (data){
                    if(data.data.code == 0){
                        this.$router.go('/');
                    }else{
                        dialog.info(data.data.msg);
                    }
                })
            }
        }
    }
</script>