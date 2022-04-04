import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/team',
    name: 'team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeamManage.vue')
  },
  {
    path: '/atmadrid',
    name: 'atmadrid',
    component: () => import('../views/players/AtMad.vue')
  },
  {
    path: '/barcelona',
    name: 'barcelona',
    component: () => import('../views/players/BarZa.vue')
  },
  {
    path: '/liverpool',
    name: 'liverpool',
    component: () => import('../views/players/LiVp.vue')
  },
  {
    path: '/mancity',
    name: 'mancity',
    component: () => import('../views/players/ManCi.vue')
  },
  {
    path: '/manu',
    name: 'manu',
    component: () => import('../views/players/ManUN.vue')
  },
  {
    path: '/realmadrid',
    name: 'realmadrid',
    component: () => import('../views/players/ReMr.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
