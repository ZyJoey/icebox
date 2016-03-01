module.exports = Vue.extend({
	inherit:true,
	template:__inline("list.html"),
	data:function(){
		//伪造数据
		var lists = [
			{"name":"可乐","num":"1","cell":"瓶","date":"1","datecell":"天"},
			{"name":"可乐","num":"1","cell":"瓶","date":"2","datecell":"天"}
		],
		sortord = ["按即将过期时间排序(默认)","按放入时间排序(正序)","按放入时间排序(倒序)"],
		select = {
			"sortord":sortord[0]
		}
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

})