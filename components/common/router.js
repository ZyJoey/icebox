//404
var notFound = Vue.extend({
	template:"<p>呀~什么都没有┑(￣Д ￣)┍</p>"
})

Vue.use(VueRouter);

var router = new VueRouter({
	root:"/list"
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
			}/*,
			"/store":{

			},
			"/detail":{

			},
			"/search":{

			}*/
		}
	},
/*	"/sign":{
		
	}*/
})

router.start(app,"#app");