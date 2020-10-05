<template>
    <v-container
        pt-0
    >
        <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <welcome-message/>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <carousel-banner/>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <user-info/>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <news-public/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import WelcomeMessage from '../components/WelcomeMessage'
import NewsPublic from '../components/NewsPublic'
import CarouselBanner from '../components/CarouselBanner'
import UserInfo from '../components/UserInfo'

export default {
    components: {
        'welcome-message': WelcomeMessage,
        'news-public': NewsPublic,
        'carousel-banner': CarouselBanner,
        'user-info': UserInfo
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
    line-height: 0.7rem !important;
    vertical-align: bottom;
  }
</style>