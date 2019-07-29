<template>
  <v-container fluid>
  <v-layout align-center justify-center row wrap>
    <v-flex lg5 v-for="chart in charts">
       <v-card  v-bind:key="chart.id" class="xxx indigo elevation-20">
          <img
            class="white--text"
            aspect-ratio = 4/3
            width="100%"
            :src= "chart.img">
            <v-container fill-height fluid grid-list-xl>
              <v-layout fill-height>
                <v-flex align-end flexbox >
                  <span class="white--text display-1 font-weight-bold justify-center align-center" >{{ chart.name }} </span>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-actions class="align-center justify-space-around">
            <v-btn class ="elevation-20 mb-3" color="yellow darken-4" @click="sendKML(chart.id)" >LAUNCH CHART</v-btn>
            <!-- <v-btn flat color="orange">Explore</v-btn> -->
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
        charts :[]
        }
    },
    mounted(){
        console.log("ready")
        var vm = this
        var myUrl = 'http://10.33.34.119:8080/getCharts/'
        axios({

                method: 'GET',
                url: myUrl,
        })
        .then(function(response){
                console.log(response.data[0])
                vm.charts = response.data
        })
        //     .catch(function(error){
        //         console.log(error)
        //     })
    },
    methods: {
        sendKML(id){
            var myUrl = 'http://10.33.34.119:8080/changeCharts/' + id
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
