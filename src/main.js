import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import 'babel-polyfill'
import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    hashbang: true, // 将路径格式化为#!开头
    history: true, // use history=false when testing
    mode: 'history',
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition || 0 }
        }
    }
})
router.beforeEach((to, from, next) => {
    if (to.meta.title === undefined) {
        document.title = '重庆数资区块链研究院'
    } else {
        document.title = to.meta.title
    }
    next()
})

new Vue({
    router,
}).$mount('#app')
