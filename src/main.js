import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import app from './app.vue'
import routerMap from './router'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)

const router = new VueRouter()

routerMap(router)

router.start(app, 'app')