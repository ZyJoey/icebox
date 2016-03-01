//404
var notFound = Vue.extend({
	template:"<p>呀~什么都没有┑(￣Д ￣)┍</p>"
})

Vue.use(VueRouter);

var router = new VueRouter({
	root:"/menu"
});

router.map({
	"*":{
		component:notFound
	},
	"/":{
		component:require("page/view/home/home"),
		subRoutes:{
			"/list":{
				component:require("component/list/list")
			},
			"/menu":{
				component:require("component/menu/menu")
			},
			"add":{
				component:require("component/add/add")
			}/*,
			"/store":{

			},
			"/search":{

			}*/
		}
	},
/*	"/sign":{
		
	}*/
})

router.start(app,"#app");