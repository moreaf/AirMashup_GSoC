<template>
  <v-container fluid>
    <v-layout align-center justify-center row wrap>
      <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">LIVE AIR TRAFFIC</h1>
    </v-layout>
    <v-layout align-center justify-center row wrap>
      <v-flex xs6 lg8 mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">SEARCH BY ZONE</div>
            </template>
            <v-card>
              <v-card-actions class="align-center justify-space-between indigo lighten-1">
                <v-form id="nativeForm" v-model="valid">
                  <v-layout wrap ml-5>
                    <v-flex
                      xs12
                      md3
                      ma-2
                    >
                      <v-text-field
                        v-model="minlat"
                        :rules="nameRules"
                        :counter="6"
                        label="Minimum latitude"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex
                      xs12
                      md3
                      ma-2
                    >
                      <v-text-field
                        v-model="maxlat"
                        :rules="nameRules"
                        :counter="6"
                        label="Maximum latitude"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex
                      xs12
                      md3
                      ma-2
                    >
                      <v-text-field
                        v-model="minlon"
                        :rules="nameRules"
                        :counter="6"
                        label="Minimum longitude"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex
                      xs12
                      md3
                      ma-2
                    >
                      <v-text-field
                        v-model="maxlon"
                        :rules="nameRules"
                        :counter="6"
                        label="Maximum longitude"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex ma-5 xs12>
                          <v-btn color="red" dark large max-width=500 @click="stop()">STOP</v-btn>
                    </v-flex>
                  </v-layout>
                </v-form>
                <v-layout row wrap align-center>
                  <v-flex xs12>
                    <div class="text-xs-center" justify-center align-center>
                      <div justify-center align-center>
                        <v-btn justify-center align-center color="yellow darken-4" dark large @click="submitZone()">LAUNCH</v-btn>
                      </div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">SEARCH BY ICAO24</div>
            </template>
            <v-card>
              <v-card-actions class="align-center justify-center indigo lighten-1">
                <v-form id="nativeForm2" v-model="valid">
                    <v-flex xs12>
                      <v-text-field
                        v-model="icao24"
                        :rules="icaoRules"
                        :counter="6"
                        label="Icao24 ID"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                  </v-form>
                  <v-layout row wrap align-center>
                    <v-flex xs12>
                      <div class="text-xs-center">
                        <div>
                          <v-btn color="yellow darken-4" dark large @click="submitIcao()">LAUNCH</v-btn>
                        </div>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex ma-5 xs12>
                          <v-btn color="red" dark large max-width=500 @click="stop()">STOP</v-btn>
                    </v-flex>
                  </v-layout>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">SEARCH BY CALLSIGN</div>
            </template>
            <v-card>
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-form dark id="nativeForm3" v-model="valid">
                    <v-flex xs12>
                      <v-text-field
                        v-model="callsign"
                        :rules="callsignRules"
                        :counter="7"
                        label="Callsign"
                        dark
                      ></v-text-field>
                    </v-flex>
                      <v-flex xs12>
                        <div class="text-xs-center">
                            <v-btn color="yellow darken-4" dark large @click="submitCallsign()">LAUNCH</v-btn>
                          </div>
                          </v-flex>
                        </v-form>
                        <v-layout>
                          <v-flex ma-5 xs12>
                                <v-btn color="red" dark large max-width=500 @click="stop()">STOP</v-btn>
                          </v-flex>
                        </v-layout>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel popout>
          <v-expansion-panel-content

            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">SEARCH BY AIRLINE</div>
            </template>
            <v-card>
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-form id="nativeForm4" v-model="valid">
                    <v-flex
                      xs12
                    >
                      <v-text-field
                        v-model="airline"
                        :rules="companyRules"
                        :counter="3"
                        label="Airline ICAO Code"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                      <v-flex xs12>
                        <div class="text-xs-center">
                            <v-btn color="yellow darken-4" dark large @click="submitCompanies()">LAUNCH</v-btn>
                          </div>
                          </v-flex>
                        </v-form>
                        <v-layout>
                          <v-flex ma-5 xs12>
                                <v-btn color="red" dark large max-width=500 @click="stop()">STOP</v-btn>
                          </v-flex>
                        </v-layout>
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
    data: () => ({
        test: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        value: '',
        valid: false,
        minlat: '',
        maxlat: '',
        minlon: '',
        maxlon: '',
        icao24: '',
        callsign: '',
        airline: '',
        nameRules: [
          v => !!v || 'Coordinate is required',
          v => v.length <= 6 || 'Coordinate must be less than 6 characters',
        ],
        callsignRules: [
          v => !!v || 'Callsign is required',
          v => v.length <= 7 || 'Coordinate must be less than 7 characters',
        ],
        icaoRules: [
          v => !!v || 'Icao24 is required',
          v => v.length <= 6 || 'Coordinate must be less than 6 characters',
        ],
        companyRules: [
          v => !!v || 'Airline ICAO code is required',
          v => v.length <= 3 || 'Coordinate must be less than 3 characters',
        ]

    }),
    mounted(){
        console.log("ready")
        console.log(this.test)
    },
    methods: {
        flyTo(lon,lat){
            var myUrl = 'http://'+ process.env.VUE_APP_API_IP+ ':'+process.env.VUE_APP_API_PORT+'/kml/flyto/'+lon+'/'+lat+'/50000'
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
        openBalloon(placemarkid){
            var myUrl = 'http://'+ process.env.VUE_APP_API_IP+ ':'+process.env.VUE_APP_API_PORT+'/kml/manage/balloon/'+placemarkid+'1'
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
        submitZone(){
          var urlFormPost = "http://"+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_SERVER_PORT+"/sendAircraftZone"
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
        },
        submitIcao(){
          var urlFormPost = "http://"+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_SERVER_PORT+"/sendAircraftIcao"
          var form = new FormData()
          form.append('icao24',this.icao24)
          axios({
            method: 'POST',
            url: urlFormPost,
            data: form
          }).then(function(response){
            console.log(response.data)
          })
        },
        submitCallsign(){
          var urlFormPost = "http://"+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_SERVER_PORT+"/sendAircraftCallsign"
          var form = new FormData()
          form.append('callsign',this.callsign)
          console.log(this.callsign,this.lon,this.lat,this.range)
          axios({
            method: 'POST',
            url: urlFormPost,
            data: form
          }).then(function(response){
            console.log(response.data)
          })
          this.flyTo(this.lon,this.lat,this.range)
          this.openBalloon(name)
        },
        submitCompanies(){
          var urlFormPost = "http://"+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_SERVER_PORT+"/sendAircraftCompanies"
          var form = new FormData()
          form.append('callsign',this.airline)
          console.log(form)
          axios({
            method: 'POST',
            url: urlFormPost,
            data: form
          }).then(function(response){
            console.log(response.data)
          })
        }
    },
    watch: {
      value: function(old,newa){
        console.log(newa,old)
        this.icao24 = companies[newa]
      }
    }
}
</script>
