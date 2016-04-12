var util = require("common/util");
module.exports = Vue.component("uploadImage",{
	template:__inline("cells/upload.html"),
	data:function(){
		return {
			"isChangeImg" : false
		}
	},
	methods:{
		setImage:function($event){
			var reader = new FileReader();
			var setImg = document.getElementById("setImg")
			reader.onloadend = function(e){
				setImg.style.backgroundImage = "url("+e.target.result+")";
				setImg.style.backgroundSize = "100% auto";
				setImg.style.backgroundPosition = "50% 50%";
			}
			reader.readAsDataURL($event.target.files[0]);
			this.$parent.food.saveImg = $event.target.files[0].name;
			this.upLoadText = "";
			this.isChangeImg = true;
		},
		changePostion:function($event){
			var setImg = document.getElementById("setImg");
			var current, 
				diff;

			if(!this.isChangeImg){
				return false;
			}

			document.addEventListener("touchmove",util.preventDefault,false);
			move(setImg,$event,function(x,y){
				if(y > -150 && y < 150){
					diff = 50 + Math.round((y/3)) + "%"
					setImg.style.backgroundPositionY = diff;
				}
			})
		},
		stopMove:function($event){
			var setImg = document.getElementById("setImg");
			document.removeEventListener("touchmove",util.preventDefault,false);
			this.$parent.food.imgPosition = "50% " + setImg.style.backgroundPositionY;
		}
	},
	computed:{
		upLoadText:function(){
			if(this.$parent.food.saveImg){
				return "";
			}else{
				return "--请选择上传图片--"
			}
		}
	}
})