<template>
  <v-container >
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

