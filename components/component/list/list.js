var baseInfo = require('common/baseInfo');
require("common/dialog");

module.exports = Vue.extend({
	inherit:true,
	template:__inline("list.html"),
	data:function(){
		var i,
		result,
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
			type:type
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
		}
	}

})