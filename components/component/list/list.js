var baseInfo = require('common/baseInfo');
var util = require('common/util');
var dialog = require("common/dialog");

module.exports = Vue.extend({
	inherit:true,
	template:__inline("list.html"),
	data:function(){
		var	result,
			sortord = ["按即将过期时间排序","按放入时间排序(正序)","按放入时间排序(倒序)"],
			select = {
				"sortord":sortord[0]
			},
			listOrder = 'deadline',
			sortKey = 1;
			type = this.$route.params.type;

		type = type === "all" ? "" : type;
		if(!this.$parent.list){
			baseInfo.getFoodlist(this);
		}
		return {
			sortord:sortord,
			showSelect:false,
			select:select,
			listOrder:listOrder,
			sortKey:sortKey,
			type:type,
			btnW : new Array()
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
				switch (val){
					case "按即将过期时间排序":
						this.listOrder = "deadline";
						this.sortKey = 1;
						break;
					case "按放入时间排序(正序)":
						this.listOrder = "storedDate";
						this.sortKey = 1;
						break;
					case "按放入时间排序(倒序)":
						this.listOrder = "storedDate";
						this.sortKey = -1;
						break;
				}
				this.select.sortord = val;
				this.showSelect = false;
			}
			return false;
		},
		showBtn:function(index,e){
			var 	i,
				that = this;
			move(e.target,e,function(x,y){
				for(i = 0 ;i < that.btnW.length ;i++ ){
					if(i == index){
						continue;
					} 
					that.btnW.$set([i],0);
				}
				if(x < -5 && x > -30){
					that.btnW.$set([index],-2*x);
				}else if(x <= -30){
					that.btnW.$set([index],60);
				}else{
					that.btnW.$set([index],0);
				}
			});
		},
		removeFood:function(index,id){
			var that = this;
			this.btnW.$set([index],0);
			this.$http.delete('server/delFood',{"id":id}).then(function (data){
				if(data.data.code === 0){
					baseInfo.getFoodlist(that);

					dialog.info({content:data.data.msg});
				}else{
					dialog.info({content:data.data.msg});
				}
			})
		}
	}

})