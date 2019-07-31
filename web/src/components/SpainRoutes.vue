<template>
  <v-container fluid>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 lg7 mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="sroute in sroutes"
            v-bind:key="sroute.id"
            class="indigo lighten-1">


            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">{{ sroute.name }}</div>
            </template>


            <v-card>
              <!-- <v-card-text>Text</v-card-text> -->
              <!-- Aquí va la imatge pertanyent a cada ruta -->
              <img
              aspect-ratio = 4/3
              width="100%"
              :src= "sroute.img">
              <!-- S'ha de fer la funció que em llençi el KML de la ruta  -->
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn class ="elevation-20 mb-1" color="yellow darken-4" @click="sendKML(sroute.id)" >LAUNCH AIR ROUTE</v-btn>
                <!-- <v-btn flat color="orange">Explore</v-btn> -->
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import axios from 'axios'

export default {
    data: () => {
        return {
        sroutes :[]
        }
    },
    mounted(){
        console.log("ready")
        var vm = this
        var myUrl = 'http:/'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/getSRoutes/'
        axios({

                method: 'GET',
                url: myUrl,
        })
        .then(function(response){
                console.log(response.data[0])
                vm.sroutes = response.data
        })
        //     .catch(function(error){
        //         console.log(error)
        //     })
    },
    methods: {
        sendKML(id){
            var myUrl = 'http:/'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/changeSRoutes/' + id
            axios({

                method: 'GET',
                url: myUrl,
            })
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })

        },
    }
}
</script>
