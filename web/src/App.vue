<template>
  <div id="app">
    <app-toolbar></app-toolbar>
      <router-view/>
    <app-footer style="position:absolute;z-index:-1"> </app-footer>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter'
import AppToolbar from './components/AppToolbar'
import Aircrafts from './components/Aircrafts'
import FlightRoutes from './components/FlightRoutes'
export default {
  name: 'App',
  components:{AppToolbar,AppFooter,Aircrafts,FlightRoutes}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
