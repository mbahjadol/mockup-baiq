import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
		},
		{
			path: '/details/:id',
			name: 'details',
			props: true,
			component: () =>
				import(/* webpackChunkName: "details" */ './views/Details.vue')
		},
		{
			path: '/post',
			name: 'post',
			component: () =>
				import(/* webpackChunkName: "post" */ './components/Post.vue')
		},
		{
			path: '/login',
			name: 'login',
			component: () =>
				import(/* webpackChunkName: "login" */ './views/ViewLogin.vue')
		},
		{
			path: '/camera',
			name: 'camera',
			component: () =>
				import(/* webpackChunkName: "login" */ './components/Camera.vue')
		}
	]
});
