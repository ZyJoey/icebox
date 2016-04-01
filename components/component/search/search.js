module.exports = Vue.extend({
	inherit:true,
	template:__inline("search.html"),
	data:function(){
		var labelItems = [],
			isSelected = [],
			searchThing = "";
		labelItems = [
			{"name":"鸡肉"},
			{"name":"养乐多"},
			{"name":"可乐"}
		];
		isSelected = new Array(labelItems.length);
		return {
			labelItems :labelItems,
			isSelected : isSelected,
			searchThing : searchThing
		}
	},
	methods:{
		selectLabel:function(event){
			var target = event.target ,
				rexexp,
				index = Number(target.getAttribute("data-index"));
			if(!target.nodeName == "LI"){
				return false;
			}
			if(/selected/.test(target.className)){
				regexp = new RegExp(target.innerText+"\\s?");
				this.searchThing = this.searchThing.replace(regexp,"");
				this.isSelected.$set([index],false);
			}else{
				this.searchThing += target.innerText + " ";
				this.isSelected.$set([index],true);
			}
		},
		searchFood:function(){
			window.location.assign("http://m.haodou.com/recipe/search?keyword="+this.searchThing);
		}
	}
})