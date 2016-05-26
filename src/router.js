export default (router) => {
    router.map({
        '/': {
            name: 'index',
            component: (resolve) => {
                require(['./views/index.vue'], resolve)
            },
            subRoutes: {
                '/':{
                    component: (resolve) => {
                        require(['./views/menu.vue'], resolve)
                    }
                },
                'list/:type':{
                    component: (resolve) => {
                        require(['./views/list.vue'], resolve)
                    }
                },
                'add':{
                    component: (resolve) => {
                        require(['./views/add.vue'], resolve)
                    }
                },
                'detail/:id':{
                    component: (resolve) => {
                        require(['./views/detail.vue'], resolve)
                    }
                },
                'search':{
                    component: (resolve) => {
                        require(['./views/search.vue'], resolve)
                    }
                }
            }
        },
        "/sign":{
            name: 'sign',
            component: (resolve) => {
                require(['./views/sign.vue'], resolve)
            },
            subRoutes:{
                "/":{
                    component: (resolve) => {
                        require(['./views/sign_up.vue'], resolve)
                    }
                },
                "in":{
                    component: (resolve) => {
                        require(['./views/sign_in.vue'], resolve)
                    }
                }
            }
        },
        '*':{
            name: '404',
            component: (resolve) => {
                require(['./views/404.vue'], resolve)
            }
        }
    })
}