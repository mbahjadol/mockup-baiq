<template>
  <v-bottom-navigation
    app
    grow
    :value="activeBtn"
    color="blue darken-1"
  >
    <v-btn 
      icon 
      v-for="(button) in nav_buttons" :key="button.index"
      @click.prevent="nav_route(button.route)"
    >
      <span>{{button.caption}}</span>
      <v-icon>{{button.icon}}</v-icon>
    </v-btn>

  </v-bottom-navigation>	
</template>
<script>
export default {
	name: 'bottom-navigation',
	data () {
      return {
        bottomNav: 'recent',
        activeBtn: 1,
        nav_buttons: [
          {
            index: 0,
            caption: 'Kembali',
            icon: 'mdi-arrow-left',
            route: 'back'
          },
          {
            index: 1,
            caption: 'Beranda',
            icon: 'mdi-home',
            route: '/'
          },
          {
            index: 2,
            caption: 'Bantuan',
            icon: 'chat_bubble',
            route: ''
          }
        ]
      }
    },	
    methods: {
      nav_route: function(route) {
        if (route !== '') {
          if (route === 'back') {
            this.$router.go(-1)
          } else if (route !== '') {
            this.$router.push(route).catch(err => {})  
          }
        }
      }
    }
}
</script>