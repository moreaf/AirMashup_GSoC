<template>
  <div id="app">
    <app-toolbar></app-toolbar>
    <v-layout ma-3 row align-center>
      <v-flex xs12>
        <div class="text-xs-center">
          <!-- <div>
            <v-btn small color="indigo" dark large @click="sendKML()">LAUNCH GLOBAL VIEW</v-btn>
          </div> -->
          <div>
            <v-btn color="red" dark large @click="stop()">CLEAN KML</v-btn>
            <!-- <v-btn color="red" dark large @click="stop()">STOP</v-btn> -->
          </div>
        </div>
      </v-flex>
    </v-layout>
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
  components:{AppToolbar,AppFooter,Aircrafts,FlightRoutes},
  data: () => ({
  }),
  methods:{
    stop(){
        var myUrl = 'http://'+ process.env.VUE_APP_API_IP+ ':'+process.env.VUE_APP_API_PORT+'/kml/manage/clean'
        axios({

            method: 'GET',
            url: myUrl,
        })
        .then(function(response){
            console.log(response)
            console.log('request done')
        })
        .catch(function(error){
            console.log(error)
        })
    }
  }
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
