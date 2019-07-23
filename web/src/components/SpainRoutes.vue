<template>
  <v-container fluid>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 lg5 mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="(item,i) in 5"
            :key="i"
          >
            <template v-slot:header>
              <div>Item</div>
            </template>


            <v-card>
              <v-card-text>Text</v-card-text>
              <img>
            </v-card>


          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- <template>
  <v-container fluid>
  <v-layout align-center justify-center row wrap>
    <v-flex lg5 v-for="airport in airports">
       <v-card  v-bind:key="airport.id" class="xxx indigo elevation-20">
          <img
            class="white--text"
            aspect-ratio = 4/3
            width="100%"
            :src= "airport.img">
            <v-container fill-height fluid grid-list-xl>
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
</v-container>
</template> -->
