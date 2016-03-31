//404
var notFound = Vue.extend({
	template:"<p>呀~什么都没有┑(￣Д ￣)┍</p>"
})

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
	"*":{
		component:notFound
	},
	"/":{
		component:require("page/view/home/home"),
		subRoutes:{
			"/":{
				component:require("component/menu/menu")
			},
			"list":{
				component:require("component/list/list")
			},
			"add":{
				component:require("component/detail/add")
			},
			"detail":{
				component:require("component/detail/detail")
			},
			"/search":{
				component:require("component/search/search")
			}
		}
	},
/*	"/sign":{
		
	}*/
})

router.start(app,"#app");
//router.go('/menu');