
import api from '../../api/imgur';
import qs from 'qs';
import {router} from '../../routes';
//AUTH MODULE DESIGN

const state = {
	token: window.localStorage.getItem('imgur_token')
};

const getters={
	isLoggedIn: state => !!state.token //like null coalescing operator
};

const actions = {
	login:() => api.login(),
	
	finalizeLogin:({commit},hash)=>{
		const urlObj = qs.parse(hash.replace('#','')); //removing the hash and getting url in an object form with qs
		commit('setToken', urlObj.access_token);
		router.push('/');
	},
	logout: ({commit}) => commit('setToken',null)
};


const mutations = {
	setToken: (state, token, unsetToken) => {
		state.token = token;
		(unsetToken) ? window.localStorage.removeItem('imgur_token') : window.localStorage.setItem('imgur_token',token); 
	}
};

export default{
	state,
	getters,
	actions,
	mutations
}