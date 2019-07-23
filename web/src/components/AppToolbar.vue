<template>
  <v-toolbar color='indigo' dark>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <router-link to="/">
        <v-toolbar-title class="white--text">AirMashup</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <router-link to="/aircrafts">
       <v-btn flat>REAL-TIME AIRCRAFTS</v-btn>
      </router-link>
      <router-link to="/flightroutes">
        <v-btn flat>FLIGHT ROUTES</v-btn>
      </router-link>
      <router-link to="/airspace">
        <v-btn flat>AIRSPACE</v-btn>
      </router-link>
      <router-link to="/login">
        <v-btn flat>DEMO</v-btn>
      </router-link>
    </div>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        height="400px"
      >
        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"

          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
          { title: 'About Liquid Galaxy Lab', icon: 'dashboard' },
          { title: 'Contact Us', icon: 'question_answer' }
        ]
      }
    }
  }
</script>
