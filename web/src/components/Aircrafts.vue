<template>
  <v-container >
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="text-xs-center">
          <div>
            <v-btn small color="indigo" dark large>LAUNCH GLOBAL VIEW</v-btn>
          </div>
          <div>
            <v-btn color="indigo" dark large>LAUNCH SPAIN VIEW</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-subheader class="pl-0">Latitude:</v-subheader>
        <v-slider
          v-model="slider"
          thumb-label
        ></v-slider>
      </v-flex>
      <v-flex xs12>
        <v-subheader class="pl-0">Longitude:</v-subheader>
        <v-slider
          v-model="slider"
          thumb-label
        ></v-slider>
      </v-flex>
    </v-layout>
  </v-container>
</template>
