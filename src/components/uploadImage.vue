<template>
    <div class="wrap-img">
        <div class="set-img" id="setImg" @touchstart="changePostion($event)" @touchend="stopMove($event)"
             data-position="{{$parent.imgPosition}}">
            <input id="uploadImg" type="file" class="input-img" v-model="$parent.food.saveImg"
                   accept="image/gif, image/jpeg, image/png" @change="setImage($event)">
            <p>{{upLoadText}}</p>
        </div>
    </div>
</template>

<script>
    import util from "../static/js/util"
    export default{
        data: function () {
            return {
                "isChangeImg": false
            }
        },
        methods: {
            setImage: function ($event) {
                var reader = new FileReader();
                var setImg = document.getElementById("setImg")
                reader.onloadend = function (e) {
                    setImg.style.backgroundImage = "url(" + e.target.result + ")";
                    setImg.style.backgroundSize = "100% auto";
                    setImg.style.backgroundPosition = "50% 50%";
                }
                reader.readAsDataURL($event.target.files[0]);
                this.upLoadText = "";
                this.isChangeImg = true;
            },
            changePostion: function ($event) {
                var setImg = document.getElementById("setImg");
                var current,
                        diff;

                if (!this.isChangeImg) {
                    return false;
                }

                document.addEventListener("touchmove", util.preventDefault, false);
                move(setImg, $event, function (x, y) {
                    if (y > -150 && y < 150) {
                        diff = 50 + Math.round((y / 3)) + "%"
                        setImg.style.backgroundPositionY = diff;
                    }
                })
            },
            stopMove: function ($event) {
                var setImg = document.getElementById("setImg");
                document.removeEventListener("touchmove", util.preventDefault, false);
                this.$parent.imgPosition = "50% " + setImg.style.backgroundPositionY;
            }
        },
        computed: {
            upLoadText: function () {
                if (this.$parent.food.saveImg) {
                    return "";
                } else {
                    return "--请选择上传图片--"
                }
            }
        }
    }
</script>