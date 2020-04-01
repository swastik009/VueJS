import Vue from 'vue';
import RouteConfig from './routes';
import App from './App';
import store from './store';
import axios from 'axios';


Vue.config.productionTip=false;
Vue.prototype.$http=axios;

new Vue({
	router: RouteConfig.router,
	store,
	render: h => h(App)
}).$mount('#app');
