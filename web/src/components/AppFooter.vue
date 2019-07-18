<template>
  <v-footer
    height="auto"
    color="indigo">
    <v-content>
      <v-layout
        >
          <v-flex pa-3>
            <img src="@/assets/lg.png" width = '12%' aspect-ratio=1.7>
          </v-flex>
      </v-layout>
      <v-layout
        align-center
        justify-space-between
        row>
          <v-flex xs3>
            <img src="@/assets/lglab.png" width="90%" >
          </v-flex >
          <v-flex xs3>
            <img src="@/assets/ticlab.png" width ="55%">
          </v-flex>
          <v-flex xs3>
            <img src="@/assets/pcital.png" width="70%">
          </v-flex >
          <v-flex xs3>
            <img src="@/assets/gsoc.png" width="85%">
          </v-flex >
          <v-flex xs3>
            <img src="@/assets/lgeu.png" width="80%">
          </v-flex>
      </v-layout>
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          flat
          round
        >
          {{ link }}
        </v-btn>
        <v-flex
          primary
          lighten-2
          py-3
          text-xs-center
          white--text
          xs12
        >
          &copy;2019 — <strong>Liquid Galaxy Lab</strong>
        </v-flex>
      </v-layout>
    </v-content>
  </v-footer>
</template>

<script>


  export default {
    data: () => ({
      links: [
        'Home',
        'About AirMashup',
        'About Liquid Galaxy Lab',
        'Contact Us'
      ]
    })
  }
</script>
