<template>
  <v-container fluid>
    <v-layout align-center justify-center row wrap>
      <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">EMBRAER MODELS</h1>
    </v-layout>
  <v-layout align-center justify-center row wrap>
    <v-flex lg3 v-for="embraerModel in embraerModels">
       <v-card  v-bind:key="embraerModel.id" class="xxx indigo elevation-20">
          <img
            class="white--text"
            aspect-ratio = 4/3
            width="100%"
            :src= "embraerModel.img">
            <v-container fill-height fluid grid-list-xl>
              <v-layout fill-height>
                <v-flex align-end flexbox >
                  <span class="white--text display-1 font-weight-bold justify-center align-center" >{{ embraerModel.name }} </span>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-actions class="align-center justify-space-around">
            <v-btn class ="elevation-20 mb-3" color="yellow darken-4" dark @click="sendTour(embraerModel.name,embraerModel.lon,embraerModel.lat,embraerModel.range,embraerModel.description)" >LAUNCH MODEL</v-btn>
            <v-btn class ="elevation-20 mb-3" color="light-blue lighten-1" dark @click="orbit(embraerModel.id)" >ORBIT</v-btn>
            <v-btn class ="elevation-20 mb-3" color="red" dark @click="stop()" >STOP</v-btn>
          </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<style>
.xxx{
    margin: 20px;
}
</style>


<script>
import axios from 'axios'
export default {
    data: () => {
        return {
        embraerModels :[]
        }
    },
    mounted(){
        console.log("ready")
        var vm = this
        var myUrl = 'http://'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/getEmbraerModels/'
        axios({

                method: 'GET',
                url: myUrl,
        })
        .then(function(response){
                console.log(response.data[0])
                vm.embraerModels = response.data
        })
    },
    methods: {
        sendKML(id){
            var myUrl = 'http://'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/changeEmbraerModels/' + id
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
        orbit(){
            var myUrl = 'http://'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/kml/builder/orbit/'
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
        stop(){
            var myUrl = 'http://'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/kml/stoptour'
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
        flyTo(lon,lat){
            var myUrl = 'http://'+ process.env.VUE_APP_API_IP+ ':'+process.env.VUE_APP_API_PORT+'/kml/flyto/'+lon+'/'+lat+'/5000'
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
        sendTour(name,lon,lat,range,des){
          var myUrl = 'http://'+ process.env.VUE_APP_API_IP+ ':'+process.env.VUE_APP_API_PORT+'/kml/builder/addplacemark/'
          var form = new FormData()
          form.append('id',name)
          form.append('name',name)
          form.append('longitude',lon)
          form.append('latitude',lat)
          form.append('range',range)
          form.append('altitudeMode','relativeToGround')
          form.append('description',des)
          // form.append('icon',this.maxlon)
          // form.append('scale',this.maxlon)

          axios({
            method: 'POST',
            url: myUrl,
            data: form
          }).then(function(response){
            console.log(response.data)
          })
          this.flyTo(lon,lat,range)
          this.openBalloon(name)
        },
        openBalloon(placemarkid){
            var myUrl = 'http://'+ process.env.VUE_APP_API_IP+ ':'+process.env.VUE_APP_API_PORT+'/kml/manage/balloon/'+placemarkid+'/1'
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
        }
    }
}
</script>
