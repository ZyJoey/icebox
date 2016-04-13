var deadline = require('common/deadline')
require("common/dialog");

module.exports = Vue.extend({
	inherit:true,
	template:__inline("list.html"),
	data:function(){
		//伪造数据
		var lists = [],
		sortord = ["按即将过期时间排序(默认)","按放入时间排序(正序)","按放入时间排序(倒序)"],
		select = {
			"sortord":sortord[0]
		},
		listOrder = 'date';
		this.$http.get('server/foodList').then(function(data){
			if(data.data.code == 0){
				this.lists = data.data.result;
					
			}else{
				dialog.info(data.data.msg);
			}
		})
		return {
			lists:lists,
			sortord:sortord,
			showSelect:false,
			select:select,
			listOrder:listOrder
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

})