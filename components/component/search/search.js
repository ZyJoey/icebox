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
				rexexp;
			if(!target.nodeName == "LI"){
				return false;
			}
			if(/selected/.test(target.className)){
				this.isSelected[target.getAttribute("data-index")] = false;
				regexp = new RegExp(target.innerText+/\s?/);
				this.searchThing.replace(regexp,"");

			}else{
				this.isSelected[target.getAttribute("data-index")] = true;
				this.searchThing += target.innerText + " ";
			}
		}
	}
})