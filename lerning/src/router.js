import Vue from 'vue'
import Router from 'vue-router'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/sis',
      name: 'sis',
      component: () => import('./views/Sis.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test.vue')
    },
    {
      path: '/myapi',
      name: 'myapi',
      component: () => import('./views/Myapi.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/singup',
      name: 'singup',
      component: () => import('./views/Singup.vue')
    },
    {
      path: '/area',
      name: 'area',
      component: () => import('./views/Area.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/Main.vue'),
      children: [
        {
          path: '/factory',
          name: 'factory',
          component: () => import('./views/Factory.vue')
        },
        {
          path: '/department',
          name: 'department',
          component: () => import('./views/Department.vue')
        },
        {
          path: '/machine',
          name: 'machine',
          component: () => import('./views/Machine.vue')
        },
        {
          path: '/admin',
          name: 'admin',
          component: () => import('./views/Admin.vue')
        }
      ]
    }
  ]
})
