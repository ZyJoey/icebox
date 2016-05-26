<template>
    <detail></detail>
</template>

<script>
    import detail from '../components/detail.vue'
    import util from '../static/js/util'
    import dialog from '../static/js/dialog'
    import baseInfo from '../static/js/baseInfo'
    import food from '../static/js/food'

    export default{
        data:function(){
            var curDate,createFood;
            var curDate = new Date().format();

            //设置默认日期
            var createFood = food({
                "prodDate":curDate,
                "storedDate":curDate
            })
            //设置默认单位
            createFood.unit = createFood.UnitOptions[0];
            createFood.category = createFood.categoryOptions[0];
            createFood.saveUnit = createFood.saveUnitOptions[0];
            createFood.saveImg = "";
            return{
                "food":createFood
            }
        },
        methods:{
            submitForm:function(){
                var option,
                        that = this ;
                if(this.food.saveImg !== ""){
                    baseInfo.uploadImg(this,createFood);
                }else{
                    createFood();
                }
                function createFood(){
                    option = JSON.stringify(that.food);
                    that.$http.post('http://localhost:3000/createFood',option).then(function (data){
                        if(data.data.code === 0){
                            dialog.confirm({content:"保存成功,是否继续添加？"},function(){
                                window.location.reload();
                            },function(){
                                that.$parent.list = null;
                                that.$router.go('/list/all');
                            });

                        }else{
                            dialog.info({content:data.data.msg});
                        }
                    })
                };
            }
        },
        components:{detail}
    }
</script>