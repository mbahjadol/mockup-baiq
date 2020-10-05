<template>
    <v-container         
        fluid 
        pa-0
    >
    <v-layout>
        <v-flex>
        <v-card tile elevation="0">
            <v-card-text primary-title class="pt-2 pb-1">
                <p class="subtitle-2-custom text-center pb-0 mb-0">
                    Selamat {{get_waktu.text}} <v-icon :color="get_waktu.icon_color" size="18">{{get_waktu.icon}}</v-icon> <br/>
                    Apakah anda sudah terproteksi dengan baiq {{get_waktu.text}} ini?
                </p>
            </v-card-text>
        </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'welcome-message',
    computed: {
        get_waktu: function() {
            let result = {}
            let curr = new Date()
            let start_pagi = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate(),  0, 0); // 00:01 start pagi
            let start_siang = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate(),  10, 30, 0); // 10:30 start siang
            let start_sore = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate(),  15, 0, 0); // 15:00 start sore
            let start_malam = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate(),  18, 0, 0); // 15:00 start malam
            if ((curr > start_pagi) && (curr < start_siang)) {
                result.text = 'Pagi'
                result.icon = 'mdi-weather-sunset-up'
                result.icon_color = 'blue-grey'
            } else if ((curr > start_siang) && (curr < start_sore)) {
                result.text = 'Siang'
                result.icon = 'mdi-white-balance-sunny'
                result.icon_color = 'yellow darken-3'
            } else if ((curr > start_sore) && (curr < start_malam)) {
                result.text = 'Sore'
                result.icon = 'mdi-weather-sunset'
                result.icon_color = 'orange darken-2'
            } else if (curr > start_malam) {
                result.text = 'Malam'
                result.icon = 'mdi-weather-night'
                result.icon_color = 'grey darken-3'
            }
            return result
        }
    }
}
</script>
<style scoped>
.subtitle-2-custom{
    font-size: 0.675rem !important;
    font-weight: 500;
    letter-spacing: 0.0071428571em !important;
    line-height: 1rem !important;
  }
.subtitle-3-custom{
    font-size: 0.575rem !important;
    font-weight: 500;
    letter-spacing: 0.0071428571em !important;
    line-height: 1rem !important;
  }
</style>