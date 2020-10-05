import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import light_theme from './light-theme';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		dark: false,
		themes: { light: light_theme }
	},
	icons: {
		iconfont: 'mdi'
	}
});
