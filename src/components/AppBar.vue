<template>
  <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white lighten-5"
      dense
      light
    >
      <v-toolbar-title
      >
        <!-- <v-app-bar-nav-icon v-on:click.stop="nav_drawer" color="blue lighten-1"></v-app-bar-nav-icon> -->
        <v-btn 
          icon 
          color="blue lighten-1" 
          v-on:click.stop="nav_drawer"
          class="ma-0 pa-0"
        >
          <v-icon large>mdi-menu</v-icon>
        </v-btn>      
        <span class="hidden-sm-and-down">Mockup BAIQ</span>
      </v-toolbar-title>
      <v-avatar 
        tile           
        max-height="24"  
        min-width="120"
        class="mx-auto"
      >
        <v-img
          src="img/logo-baiq.png"
          alt="baiq"
          @click.prevent="logo_click"
        >
        </v-img>
      </v-avatar>
      <v-btn 
        icon
        color="blue lighten-1"
      >
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      
  </v-app-bar>
</template>
<script>
export default {
  name: 'app-bar',
  methods: {
    nav_drawer: function(event) {
    //   console.log(this.$store.state.drawer)
      this.$store.commit('nav_drawer')
    },
    logo_click: function(event) {
      this.$router.push('/').catch(err => {})
    }
  }
}
</script>
<style scoped>
.v-toolbar__content{
     padding-left: 0px !important;
  }
</style>