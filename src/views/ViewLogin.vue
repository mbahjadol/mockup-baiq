<template>
  <v-container class="pt-0 fill-height">
    <v-layout row class="text-xs-center">
      <v-flex xs12 class="white" fill-height>
        <v-container style="position: relative;" class="text-xs-center">
          <v-card flat>
            <v-layout class="text-xs-center mt-12 mr-12 ml-12 mb-0">
              <v-img
                src="img/logo-baiq.png"
                alt="baiq"
              >
              </v-img>
            </v-layout>
            <v-form>
              <v-text-field prepend-icon="person" name="Username" label="Username" class="ml-3 mr-3">
                <!-- <v-icon slot="prepend" color="green">person</v-icon> -->
              </v-text-field>
              <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" class="ml-3 mr-3"></v-text-field>
              <v-card-actions>
                <v-btn large block @click="test" color="primary">Sign In</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
            </v-form>
            <v-card-text>
            <v-btn icon tile block>
              <v-icon>mdi-account-plus</v-icon> &nbsp; Register
            </v-btn>
            <v-btn icon tile block>
              <v-icon color="indigo">mdi-facebook</v-icon> &nbsp; With Facebook
            </v-btn>
            <v-btn icon tile block>
              <v-icon color="blue">mdi-google</v-icon> &nbsp; With Google
            </v-btn>
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'view-login',
  methods: {
    test: function(){
      console.log(this.$vuetify.theme)
    }
  },
  created: function () {
    this.$vuetify.theme.themes.light.secondary = '#4caf50'
  }
}
</script>
<style scoped>
</style>