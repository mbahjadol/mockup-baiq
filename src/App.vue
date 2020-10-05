<template>
  <v-app id="mockup-baiq">
    <app-navigation-drawer/>
    <app-bar/>
    <v-content>
      <router-view/>
    </v-content>
    <bottom-navigation/>
  </v-app>
</template>

<script>
import Home from './views/Home'
import NavigationDrawer from './components/NavigationDrawer.vue'
import BottomNavigation from './components/BottomNavigation.vue'
import AppBar from './components/AppBar.vue'
// import * as moment from 'moment';

export default {
  name: 'App',
  components: {
    'app-navigation-drawer': NavigationDrawer,
    'app-bar': AppBar,
    'bottom-navigation': BottomNavigation,
    Home
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>