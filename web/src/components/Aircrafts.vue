<template>
  <v-container >
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="text-xs-center">
          <!-- <div>
            <v-btn small color="indigo" dark large @click="sendKML()">LAUNCH GLOBAL VIEW</v-btn>
          </div> -->
          <div>
            <v-btn color="indigo" dark large @click="sendKMLSpain()">LAUNCH SPAIN DEMO</v-btn>
            <!-- <v-btn color="red" dark large @click="stop()">STOP</v-btn> -->
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-form id="nativeForm" v-model="valid">
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex
          xs12
          md3
        >
          <v-text-field
            v-model="minlat"
            :rules="nameRules"
            :counter="6"
            label="Minimum latitude"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md3
        >
          <v-text-field
            v-model="maxlat"
            :rules="nameRules"
            :counter="6"
            label="Maximum latitude"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md3
        >
          <v-text-field
            v-model="minlon"
            :rules="nameRules"
            :counter="6"
            label="Minimum longitude"
            required
          ></v-text-field>
        </v-flex>
        <v-flex
          xs12
          md3
        >
          <v-text-field
            v-model="maxlon"
            :rules="nameRules"
            :counter="6"
            label="Maximum longitude"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="text-xs-center">
            <!-- <div>
              <v-btn small color="indigo" dark large @click="sendKML()">LAUNCH GLOBAL VIEW</v-btn>
            </div> -->
            <div>
              <v-btn color="indigo" dark large @click="submit()">LAUNCH</v-btn>
              <v-btn color="red" dark large @click="stop()">STOP</v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: false,
    minlat: '',
    maxlat: '',
    minlon: '',
    maxlon: '',
    nameRules: [
      v => !!v || 'Coordinate is required',
      v => v.length <= 6 || 'Coordinate must be less than 5 characters',
    ]
  }),

    mounted(){
        console.log("ready")
    },
    methods: {
        sendKMLSpain(){
            var myUrl = 'http://'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/sendAircraftSpain/'
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
        sendKML(){
            var myUrl = 'http://'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/sendAircraft/'+minlat+'/'+maxlat+'/'+minlon+'/'+maxlon
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

        },
        submit(){
          var urlFormPost = "http://"+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_SERVER_PORT+"/sendAircraft"
          var form = new FormData()
          form.append('minlat',this.minlat)
          form.append('maxlat',this.maxlat)
          form.append('minlon',this.minlon)
          form.append('maxlon',this.maxlon)

          axios({
            method: 'POST',
            url: urlFormPost,
            data: form
          }).then(function(response){
            console.log(response.data)
          })
        }
    }
}
</script>
