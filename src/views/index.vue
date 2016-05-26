<template>
    <side-bar></side-bar>
    <div class="main" v-bind:style="{minHeight:height +'px',left:curLeft+'%'}">
        <div class="header" :style="{left:curLeft+'%'}">
            <a href="javascript:;"><i class="sprite sprite-menu-nav left" @touchend="isShowSide()"></i></a>
            <h2 class="title">{{header.title}}</h2>
            <a v-link="{path:'/add'}"><i class="sprite sprite-menu-add right"></i></a>
        </div>
        <router-view transition="change"></router-view>
    </div>
</template>

<script>
    import sideBar from '../components/side.vue'
    export default{
        data:function(){
            return{
                "width":window.screen.availWidth,//页面宽度
                "height":window.screen.availHeight,//页面高度
                "curLeft":0,
                "header":{
                    "title":"主页"
                }
            }
        },
        methods:{
            isShowSide : function(){
                this.curLeft = this.curLeft === 0 ? 80 : 0;
                return this.curLeft;
            }
        },
        components:{sideBar}
    }
</script>