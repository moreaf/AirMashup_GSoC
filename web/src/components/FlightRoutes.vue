<template>
  <v-container fluid>
  <v-layout align-center justify-center row wrap>
    <v-flex lg5>
       <v-card class="xxx indigo elevation-20">
          <img
            class="white--text"
            aspect-ratio = 4/3
            width="100%"
            src= "@/assets/ROUTES/spain.png">
            <v-container fill-height fluid grid-list-xl>
              <v-layout fill-height>
                <v-flex align-end flexbox >
                  <span class="white--text display-1 font-weight-bold justify-center align-center"> SPAIN AIR ROUTES </span>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-actions class="align-center justify-space-around">
            <router-link to ="/spainairroutes">
              <v-btn class ="elevation-20 mb-3" color="yellow darken-4">SEE ALL</v-btn>
            </router-link>
          </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex lg5>
       <v-card class="xxx indigo elevation-20">
          <img
            class="white--text"
            aspect-ratio = 4/3
            width="100%"
            src= "@/assets/ROUTES/intflights.png">
            <v-container fill-height fluid grid-list-xl>
              <v-layout fill-height>
                <v-flex align-end flexbox >
                  <span class="white--text display-1 font-weight-bold justify-center align-center"> INTERNATIONAL AIR ROUTES </span>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-actions class="align-center justify-space-around">
            <router-link to ="/intairroutes">
              <v-btn class ="elevation-20 mb-3" color="yellow darken-4">SEE ALL</v-btn>
            </router-link>
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
        }
    },
    // methods: {
    //     sendKML(id){
    //         var myUrl = 'http://localhost:8080/change/' + id
    //         axios({
    //
    //             method: 'GET',
    //             url: myUrl,
    //         })
    //         .then(function(response){
    //             console.log(response)
    //         })
    //         .catch(function(error){
    //             console.log(error)
    //         })
    //
    //     },
    }

</script>
