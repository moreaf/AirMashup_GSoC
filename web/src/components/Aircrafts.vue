<template>
  <v-container >
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="text-xs-center">
          <div>
            <v-btn small color="indigo" dark large @click="sendKML()">LAUNCH GLOBAL VIEW</v-btn>
          </div>
          <div>
            <v-btn color="indigo" dark large @click="sendKML()">LAUNCH SPAIN VIEW</v-btn>
            <v-btn color="red" dark large @click="stop()">STOP</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
    mounted(){
        console.log("ready")
    },
    methods: {
        sendKML(){
            var myUrl = 'http://'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/sendAircraftSpain'
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

        },
        stop(){
            var myUrl = 'http://'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/stop'
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
