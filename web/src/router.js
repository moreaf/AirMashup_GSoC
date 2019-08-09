import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import Aircrafts from '@/components/Aircrafts'
import Airspace from '@/components/Airspace'
import FlightRoutes from '@/components/FlightRoutes'
import SpainRoutes from '@/components/SpainRoutes'
import IntRoutes from '@/components/IntRoutes'
import OLS from '@/components/OLS'
import AIS from '@/components/AIS'
import Manufacturers from '@/components/Manufacturers'
import Airbus from '@/components/Airbus'
import Boeing from '@/components/Boeing'
import Bombardier from '@/components/Bombardier'
import Embraer from '@/components/Embraer'


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
    },
    {
      path: '/flightroutes',
      name: 'FlightRoutes',
      component: FlightRoutes
    },
    {
      path: '/spainairroutes',
      name: 'SpainRoutes',
      component: SpainRoutes
    },
    {
      path: '/intairroutes',
      name: 'IntRoutes',
      component: IntRoutes
    },
    {
      path: '/ols',
      name: 'OLS',
      component: OLS
    },
    {
      path: '/ais',
      name: 'AIS',
      component: AIS
    },
    {
      path: '/manufacturers',
      name: 'Manufacturers',
      component: Manufacturers
    },
    {
      path: '/airbus',
      name: 'Airbus',
      component: Airbus
    },
    {
      path: '/boeing',
      name: 'Boeing',
      component: Boeing
    },
    {
      path: '/bombardier',
      name: 'Bombardier',
      component: Bombardier
    },
    {
      path: '/embraer',
      name: 'Embraer',
      component: Embraer
    }
  ]
})
