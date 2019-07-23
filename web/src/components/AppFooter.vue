<template>
  <v-footer
    height="auto"
    color="white">
    <v-content>
      <v-layout
        >
          <!-- <v-flex pa-3>
            <img src="@/assets/airmashup.png" width = '8%' aspect-ratio=1.7>
          </v-flex> -->
      </v-layout>
      <v-layout
        >
          <!-- <v-flex pa-3>
            <img src="@/assets/lg.png" width = '12%' aspect-ratio=1.7>
          </v-flex> -->
      </v-layout> -->
      <v-layout
        align-center
        justify-space-between
        row>
          <v-flex ma-3 ml-5>
            <img src="@/assets/logoAM.png" width = '80%' aspect-ratio=1.7>
          </v-flex>
          <v-flex>
            <img src="@/assets/lg.png" width = '35%' aspect-ratio=1.7>
          </v-flex>
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
        <!-- <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          flat
          round
        >
          {{ link }}
        </v-btn> -->
        <v-flex
          primary
          py-3
          text-xs-center
          indigo
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
      // links: [
      //   'Home',
      //   'About AirMashup',
      //   'About Liquid Galaxy Lab',
      //   'Contact Us'
      // ]
    })
  }
</script>
