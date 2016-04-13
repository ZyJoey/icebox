var deadline = require('common/deadline')
require("common/dialog");

module.exports = Vue.extend({
	inherit:true,
	template:__inline("list.html"),
	data:function(){
		var i,
		result,
		list = [],
		sortord = ["按即将过期时间排序(默认)","按放入时间排序(正序)","按放入时间排序(倒序)"],
		select = {
			"sortord":sortord[0]
		},
		listOrder = 'deadline',
		type = this.$route.params.type;
		type = type === "all" ? "" : type;
		this.$http.get('server/foodList').then(function(data){
			if(data.data.code == 0){
				result = data.data.result;
				for(i = 0; i < result.length;i++){
					result[i].deadline = deadline(result[i].prodDate,result[i].saveTime,result[i].saveUnit.text);
				}
				this.list = result;

			}else{
				dialog.info(data.data.msg);
			}
		})
		return {
			list:list,
			sortord:sortord,
			showSelect:false,
			select:select,
			listOrder:listOrder,
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
				this.select.sortord = val;
				this.showSelect = false;
			}
			return false;
		}
	}

})