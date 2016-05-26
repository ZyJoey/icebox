<template>
    <div class="container">
        <form class="search-form">
            <ul class="label-wrapper" @touchend.stop="selectLabel($event)">
                <li href="" class="search-label" v-for="item in labelItems" data-index="{{$index}}"
                    v-bind:class="{'selected':isSelected[$index]}">{{item.name}}
                </li>
            </ul>
            <div class="text-line">
                <input type="text" class="text" name="" placeholder="想吃什么呢……" v-model="searchThing">
            </div>
            <div class="detail-btn">
                <button type="button" class="btn form-btn" @touchend="searchFood()">搜 索</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        data: function () {
            var labelItems = [],
                    isSelected = [],
                    searchThing = "";
            labelItems = [
                {"name": "鸡肉"},
                {"name": "养乐多"},
                {"name": "可乐"}
            ];
            isSelected = new Array(labelItems.length);
            return {
                labelItems: labelItems,
                isSelected: isSelected,
                searchThing: searchThing
            }
        },
        methods: {
            selectLabel: function (event) {
                var target = event.target,
                        rexexp,
                        index = Number(target.getAttribute("data-index"));
                if (!target.nodeName == "LI") {
                    return false;
                }
                if (/selected/.test(target.className)) {
                    regexp = new RegExp(target.innerText + "\\s?");
                    this.searchThing = this.searchThing.replace(regexp, "");
                    this.isSelected.$set([index], false);
                } else {
                    this.searchThing += target.innerText + " ";
                    this.isSelected.$set([index], true);
                }
            },
            searchFood: function () {
                window.location.assign("http://m.haodou.com/recipe/search?keyword=" + this.searchThing);
            }
        }
    }
</script>