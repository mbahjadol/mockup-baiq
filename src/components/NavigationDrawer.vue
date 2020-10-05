<template>
    <v-navigation-drawer
      v-model="storeDrawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex
              xs6
              class="text-xs-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              @click="return false;"
            >
              <v-row>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                  <v-list-item-action v-if="child.icon">
                    <v-icon>{{ child.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ child.text }}
                    </v-list-item-title>
                  </v-list-item-content>
              </v-row>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            @click.prevent="nav_route(item.route_url)"
          >
            <v-list-item-action>
              <v-icon 
                :color="item.icon_color"
                size="32"
              >
                {{ item.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <!-- <span class="blue--text text--darken-4"> -->
                  {{ item.text }}
                <!-- </span> -->
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>    
</template>

<script>
export default {
    name: 'app-navigation-drawer',
    computed: {
      storeDrawer: {
        get: function() {
          return this.$store.state.drawer
        },
        set: function(newValue) {
          this.$store.state.drawer = newValue
        }
      }
    },
    data() {
        return {
            items: [
                { 
                  icon: 'mdi-newspaper-variant-multiple-outline', 
                  icon_color: 'blue lighten-1',
                  text: 'Informasi Terbaru',
                  route_url: '/'
                },
                { 
                  icon: 'mdi-newspaper', 
                  icon_color: 'blue lighten-1',
                  text: 'Informasi BAIQ' ,
                  route_url: '/'
                },
                { 
                  icon: 'help', 
                  icon_color: 'blue lighten-1',
                  text: 'Informasi Bantuan',
                  route_url: '/' 
                },
                { 
                  icon: 'mdi-transit-transfer', 
                  icon_color: 'blue lighten-1',
                  text: 'Klaim Premi',
                  route_url: '/' 
                },
                {
                  icon: 'keyboard_arrow_up',
                  'icon-alt': 'keyboard_arrow_down',
                  text: '<< Asuransi >>',
                  model: true,
                  children: [
                      { 
                        icon: 'mdi-car', 
                        text: 'Mobil' 
                      },
                      { 
                        icon: 'mdi-motorbike', 
                        text: 'Motor' 
                      },
                      { 
                        icon: 'mdi-face-profile', 
                        text: 'Pengendara' 
                      },
                      { 
                        icon: 'mdi-face', 
                        text: 'Penumpang' 
                      },
                  ]
                },
                { 
                  icon: 'mdi-account', 
                  icon_color: 'blue lighten-1',
                  text: 'Login',
                  route_url: '/login' 
                },
                { 
                  icon: 'mdi-exit-to-app', 
                  icon_color: 'red',
                  text: 'Logout',
                  route_url: '/' 
                },
                { 
                  icon: 'mdi-account-plus', 
                  icon_color: 'blue lighten-1',
                  text: 'Register',
                  route_url: '/' 
                },
                { 
                  icon: 'mdi-settings', 
                  icon_color: 'blue lighten-1',
                  text: 'Pengaturan',
                  route_url: '/' 
                },
                // ,
                // { icon: 'history', text: 'Frequently contacted' },
                // { icon: 'content_copy', text: 'Duplicates' },
                // {
                //   icon: 'keyboard_arrow_up',
                //   'icon-alt': 'keyboard_arrow_down',
                //   text: 'Labels',
                //   model: true,
                //   children: [
                //       { icon: 'add', text: 'Create label' }
                //   ]
                // },
                // {
                //   icon: 'keyboard_arrow_up',
                //   'icon-alt': 'keyboard_arrow_down',
                //   text: 'More',
                //   model: false,
                //   children: [
                //       { text: 'Import' },
                //       { text: 'Export' },
                //       { text: 'Print' },
                //       { text: 'Undo changes' },
                //       { text: 'Other contacts' }
                //   ]
                // },
                // { icon: 'settings', text: 'Settings' },
                // { icon: 'chat_bubble', text: 'Send feedback' },
                // { icon: 'phonelink', text: 'App downloads' },
                // { icon: 'keyboard', text: 'Go to the old version' }
            ]
        }        
    },
    methods: {
      nav_route: function(route_url) {
        this.$router.push(route_url).catch(err => {})
      }
    }
}
</script>