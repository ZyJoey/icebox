//404
var notFound = Vue.extend({
	template:"<p>呀~什么都没有┑(￣Д ￣)┍</p>"
})

Vue.use(VueRouter);

var router = new VueRouter({
	
});

router.map({
	"*":{
		component:notFound
	},
	"/":{
		component:require("page/view/home/home"),
		subRoutes:{
			"list":{
				component:require("component/list/list")
			},
			"menu":{
				component:require("component/menu/menu")
			},
			"add":{
				component:require("component/detail/add")
			},
			"detail":{
				component:require("component/detail/detail")
			}/*,
			"/search":{

			}*/
		}
	},
/*	"/sign":{
		
	}*/
})

router.start(app,"#app");
//router.go('/menu');