<template>
    <div class="view">
        <div class="sign-bg view-container" :style="{height:height+'px'}">
            <div class="title-wrap">
                <h1 class="text-hide">储鲜</h1>
                <h2 class="text-hide">我的冰箱助手</h2>
            </div>
            <router-view transition="signChange"></router-view>
        </div>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                "height":window.screen.availHeight
            }
        }
    }
</script>