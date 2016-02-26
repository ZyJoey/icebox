module.exports = Vue.extend({
	inherit:true,
	template:__inline("list.html"),
	data:function(){
		//伪造数据
		var lists = [
			{"name":"可乐","num":"1","cell":"瓶","date":"1","datecell":"天"},
			{"name":"可乐","num":"1","cell":"瓶","date":"2","datecell":"天"}
		]
		return {
			lists:lists
		}
	}

})