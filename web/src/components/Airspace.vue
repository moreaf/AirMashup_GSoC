<template>
  <v-layout mt-5 mb-5
  justify-space-between="">
    <v-flex xs-2>
       <v-card  v-for="airport in airports" v-bind:key="airport.id" class="xxx indigo elevation-20">
        <img
          class="white--text"
          width="100%"
          :src= "airport.img">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex align-end flexbox >
                <span class="white--text display-1 font-weight-bold justify-center align-center" >{{ airport.name }} </span>
              </v-flex>
            </v-layout>
          </v-container>
        <v-card-actions class="align-center justify-space-around">
          <v-btn class ="elevation-20 mb-3" color="yellow darken-4" @click="sendKML(airport.id)" >LAUNCH OLS</v-btn>
          <!-- <v-btn flat color="orange">Explore</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
.xxx{
    margin: 20px;
}
</style>
<script>
import axios from 'axios'
// import image from  '@/assets/AIRPORTS/LEDA.jpg'
// import image2 from '@/assets/AIRPORTS/LEBL.jpg'

export default {
    data: () => {
        return {
        airports :[]
        }
    },
    mounted(){
        console.log("ready")
        var vm = this
        var myUrl = 'http://localhost:8080/getAirports/'
        axios({

                method: 'GET',
                url: myUrl,
        })
        .then(function(response){
                console.log(response.data[0])
                vm.airports = response.data
        })
        //     .catch(function(error){
        //         console.log(error)
        //     })
    },
    methods: {
        sendKML(id){
            var myUrl = 'http://localhost:8080/change/' + id
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
