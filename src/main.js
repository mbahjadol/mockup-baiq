import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
// import { isMobile } from 'mobile-device-detect';
import vuetify from './plugins/vuetify/';
import './custom-utils';

Vue.config.productionTip = false;

// Make sure to call Vue.use(Vuex) first if using a module system
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		drawer: false,
		count: 0
	},
	mutations: {
		nav_drawer(state) {
			// if (isMobile) {
			//   alert("1 you are mobile " + state.drawer)
			//   state.drawer = !state.drawer
			//   // state.drawer = true
			//   alert("2 you are mobile " + state.drawer)
			// } else {
			state.drawer = !state.drawer;
			// }
		}
	}
});

const app = new Vue({
	store,
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');
