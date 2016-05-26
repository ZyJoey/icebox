<template>
    <div class="container">
        <div class="select-list">
            <div class="select-selected option" v-on:touchend="isShowSelect()">
                {{select.sortord}}
                <i v-bind:class="[showSelect ? 'down-triangle' : 'left-triangle']"></i>
            </div>
            <ul class="select-option-wrapper" v-show="showSelect" @touchend.stop="selectSortord($event)">
                <li class="option" v-for='item in sortord' :class="[select.sortord === item ? 'current' : '']">{{item}}</li>
            </ul>

        </div>
        <ul class="list">
            <a href="javascript:;" v-for="food in lists">
                <li class="list-li">
                    <span class="name">{{food.name}}</span>
                    <span class="net-content">{{food.num}}</span>
                    <span class="unit">{{food.cell}}</span>
                    <div class="list-right">
                        <p>
                            还有
                            <span class="deadline color-red">{{food.date}}</span>
                            <span class="deadline-unit">{{food.datecell}}</span>
                            过期
                        </p>
                    </div>
                </li>
            </a>
        </ul>
    </div>
</template>

<script>
    export default{
        data:function(){
            //伪造数据
            var lists = [],
                    sortord = ["按即将过期时间排序(默认)","按放入时间排序(正序)","按放入时间排序(倒序)"],
                    select = {
                        "sortord":sortord[0]
                    }
            this.$http.get('http://localhost:3000/').then(function(data){
                if(data.status == 200){
                    this.lists = data.data;
                }
            })
            return {
                lists:lists,
                sortord:sortord,
                showSelect:false,
                select:select
            }
        },
        methods:{
            isShowSelect:function(){
                this.showSelect = this.showSelect === false ? true : false;
                return this.showSelect;
            },
            selectSortord:function(event){
                var val = event.target.textContent;
                if(val !== ""){
                    this.select.sortord = val;
                    this.showSelect = false;
                }
                return false;
            }
        }
    }
</script>