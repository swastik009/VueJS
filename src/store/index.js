import Vuex from 'vuex';
import vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';

vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		auth,
		images
	}
})