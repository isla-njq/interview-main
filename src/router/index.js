import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: resolve => require(['../view/login/login.vue'], resolve)
},{
    path: '/register',
    name: 'register',
    component: resolve => require(['../view/login/register.vue'], resolve)
},{
    path: '/home',
    name: 'home',
    component: resolve => require(['../view/home/home.vue'], resolve),
    children:[
      {
        path: 'homePage',
        name: 'homePage',
        component: resolve => require(['../view/homePage/homePage.vue'], resolve)
      },
      {
        path: 'interView',
        name: 'interView',
        component: resolve => require(['../view/interView/interView.vue'], resolve)
      },
      {
        path: 'test',
        name: 'test',
        component: resolve => require(['../view/test/test.vue'], resolve)
      }
    ]
},{
    path: '*',
    redirect: '/login' //重定向
}]

let router = new VueRouter({
    routes
})

//创建并暴露一个路由器
export default router