import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: resolve => require(['../view/login/login.vue'], resolve)
}, {
    path: '/register',
    name: 'register',
    component: resolve => require(['../view/login/register.vue'], resolve)
}, {
    path: '/home',
    name: 'home',
    component: resolve => require(['../view/home/home.vue'], resolve),
    children:[
      {
        path: 'homePage', // 预览页
        name: 'homePage',
        component: resolve => require(['../view/homePage/homePage.vue'], resolve)
      },
      {
        path: 'interView', // 首页
        name: 'interView',
        component: resolve => require(['../view/interView/interView.vue'], resolve)
      },{
        path: 'questionbank', // 题库
        name: 'questionbank',
        component: resolve => require(['../view/questionBank/questionBank.vue'], resolve)
      },{
        path: 'mistakes', // 题库
        name: 'mistakes',
        component: resolve => require(['../view/mistakes/mistakes.vue'], resolve)
      },
      {
        path: 'personal', // 个人中心
        name: 'personal',
        component: resolve => require(['../view/personal/personal.vue'], resolve)
      },
      {
        path: 'test', // 做题界面
        name: 'test',
        component: resolve => require(['../view/test/test.vue'], resolve)
      },
    ]
}, {
    path: '*',
    redirect: '/login' //重定向
}]

let router = new VueRouter({
    routes
})

//创建并暴露一个路由器
export default router