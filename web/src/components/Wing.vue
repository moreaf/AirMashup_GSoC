<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">PROJECT WING</h1>
      </v-flex>
    </v-layout>
    <v-layout justify-space-between>
      <v-flex >
            <v-img
          src="http://192.168.86.90:8080/images/wing.png"
          aspect-ratio="1.3"
          class="grey lighten-2"
          max-width="800"
          ></v-img>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex>
          <v-img
        src="http://192.168.86.90:8080/images/LogoWing.png"
        aspect-ratio="2.4"
        max-width="300"
        class="grey lighten-2"
        ></v-img>
        <v-btn color="indigo" dark large @click="submitWing()">LAUNCH DEMO</v-btn>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>

<style>
</style>
