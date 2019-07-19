import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import Aircrafts from '@/components/Aircrafts'
import Airspace from '@/components/Airspace'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/aircrafts',
      name: 'Aircrafts',
      component: Aircrafts
    },
    {
      path: '/airspace',
      name: 'Airspace',
      component: Airspace
    }
  ]
})
