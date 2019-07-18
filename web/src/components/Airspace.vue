<template>
  <v-layout mt-5 mb-5
  justify-space-between="">
    <v-flex xs12 sm6 offset-sm3>

       <v-card  v-for="airport in airports" v-bind:key="airport.id" class="xxx indigo">
        <img
          class="white--text"
          width="100%"
          :src= "airport.img">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox >
                <span class="white--text headline" >{{ airport.name }} </span>
              </v-flex>
            </v-layout>
          </v-container>
        
        <!-- <v-card-title>
          <div>
            <span>Lleida, Catalonia, Spain</span><br>
            <span></span>
          </div>
        </v-card-title> -->
        <v-card-actions class="justify-space-around">
          <v-btn  color="yellow darken-4" @click="sendKML(airport.id)" >OLS </v-btn>
          <!-- <v-btn flat color="orange">Explore</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
.xxx{
    margin: 20px 0px 0px 10px;
}
</style>
<script>
import axios from 'axios'
import image from  '@/assets/AIRPORTS/LEDA.jpg'
import image2 from '@/assets/AIRPORTS/LEBL.jpg'

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

