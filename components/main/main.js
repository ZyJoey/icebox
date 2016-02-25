var Vue = require('bower_components/vue/dist/vue.js');
var Router = require('bower_components/vue-router/dist/vue-router.js');

window.app = new Vue({
	el:"#app",
	data:{
		currentView:"test"
	},
	components:{
		test:test
	}
});

