<template>
    <div class="s-wrapper" v-bind:style="{height:$parent.height+'px'}">
        <div class="s-header">
            <img class="s-img" src="../static/images/joey.jpg" alt="头像">
            <div class="s-user">
                <div class="user-msg"><span>{{user.name}}</span></div>
                <div class="user-msg">加入日期: <span>{{user.birth}}</span></div>
            </div>
        </div>
        <div class="s-main">
            <ul @touchend="showSide()">
                <a v-link="{path:'/'}"><li><i class="sprite sprite-menu-chips"></i>储鲜分类</li></a>
                <a v-link="{path:'/list/all'}"><li><i class="sprite sprite-menu-ice"></i>赏味期限</li></a>
                <a v-link="{path:'/search'}"><li><i class="sprite sprite-menu-book"></i>搜索食谱</li></a>
            </ul>
            <ul @touchend="showSide()">
                <a><li><i class="sprite sprite-menu-hamburger"></i>修改密码</li></a>
                <a><li><i class="sprite sprite-menu-juice"></i>退出账号</li></a>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
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
    }
</script>