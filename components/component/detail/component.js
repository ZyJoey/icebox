var util = require("common/util");
module.exports = Vue.component("uploadImage",{
	template:__inline("cells/upload.html"),
	data:function(){
		if(this.$parent.food.saveImg){
			bgImg = this.$parent.food.saveImg;
		}else if(this.$parent.isDetail){
			bgImg = "http://7xsnyd.com2.z0.glb.clouddn.com/photo-1436564989038-18b9958df72b.jpg?imageView2/1/w/357/h/150/interlace/0/q/100";
		}else{
			bgImg = "";
		}
		return {
			"isChangeImg" : false,
			"bgImg":bgImg
		}
	},
	methods:{
		setImage:function($event){
			var that = this;
			var reader = new FileReader();
			var setImg = document.getElementById("setImg")
			reader.onloadend = function(e){
				that.bgImg = e.target.result ;
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
			if(this.bgImg){
				return "";
			}else{
				return "--请选择上传图片--"
			}
		}
	}
})