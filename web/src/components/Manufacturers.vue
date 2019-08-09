<template>
  <v-container fluid>
    <v-layout align-center justify-center row wrap>
      <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">MANUFACTURERS</h1>
    </v-layout>
  <v-layout align-center justify-center row wrap>
    <v-flex lg3 v-for="manufacturer in manufacturers">
       <v-card  v-bind:key="manufacturer.id" class="xxx indigo elevation-20">
          <img
            class="white--text"

            width="100%"
            :src= "manufacturer.img">
            <v-container fill-height fluid grid-list-xl>
              <v-layout fill-height>
                <v-flex align-end flexbox >
                  <span class="white--text display-1 font-weight-bold justify-center align-center" >{{ manufacturer.name }} </span>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-actions class="align-center justify-space-around">
            <v-btn class ="elevation-20 mb-3" color="yellow darken-4" dark @click="sendPath(manufacturer.id)" >CHECK MODELS</v-btn>
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
        manufacturers :[]
        }
    },
    mounted(){
        console.log("ready")
        var vm = this
        var myUrl = 'http://'+ process.env.VUE_APP_SERVER_IP+ ':'+process.env.VUE_APP_SERVER_PORT+'/getManufacturers/'
        axios({

                method: 'GET',
                url: myUrl,
        })
        .then(function(response){
                console.log(response.data[0])
                vm.manufacturers = response.data
        })
        //     .catch(function(error){
        //         console.log(error)
        //     })
    },
    methods: {
      sendPath(){

      }
    }
}
</script>
