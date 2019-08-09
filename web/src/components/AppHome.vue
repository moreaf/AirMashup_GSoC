<template>
  <div>
    <v-content>
      <v-layout ma-5 row wrap align-center justify-center>
        <v-flex xs12>
          <div class="text-xs-center">
            <div>
              <v-btn color="indigo" dark large @click="stop()">LAUNCH DEMO</v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout
        align-center
        justify-space-between
        row>
          <v-flex ma-3 ml-5>
            <img src="@/assets/logoAM.png" width = '50%' aspect-ratio=1.7>
          </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>
