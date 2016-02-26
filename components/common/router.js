//404
var notFound = Vue.extend({
	template:"<p>呀~什么都没有┑(￣Д ￣)┍</p>"
})

Vue.use(VueRouter);

var router = new VueRouter({
	root:"/"
});

router.map({
	"*":{
		component:notFound
	},
	"/":{
		component:require("component/test/test")
	},
	"/list":{
		component:require("")
	},
	"/store":{
		component:require("")
	},
	"/detail":{
		component:require("")
	},
	"/search":{
		component:require("")
	},
	"/sign":{
		component:require("")
	}
})

router.start(app,"#app");