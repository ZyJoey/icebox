var baseInfo = require('common/baseInfo');

module.exports = Vue.extend({
	inherit:true,
	template:__inline("search.html"),
	data:function(){
		var 	i,j,result,
			that = this,
			labelItems = [],
			isSelected = [],
			searchThing = "";

		if(!this.$parent.list){
			baseInfo.getFoodlist(this,getLabel)

		}else{
			getLabel();
		}
		function getLabel(){
			result = that.$parent.list;
			start:for(i = 0;i < result.length;i++){
				for(j = 0 ;j<labelItems.length;j++){
					if(labelItems[j] === result[i].name){
						continue start;
					}
				}
				labelItems.push(result[i].name);
			}
			isSelected = new Array(labelItems.length);
		}
		return {
			labelItems :labelItems,
			searchThing : searchThing,
			isSelected:isSelected
		}
	},
	methods:{
		selectLabel:function(event){
			var target = event.target ,
				rexexp,
				index = Number(target.getAttribute("data-index"));
			if(target.nodeName !== "LI"){
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