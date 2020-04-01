import VueRouter from 'vue-router';
import Vue from 'vue';
import NProgress from 'nprogress';
import AuthHandler from '../components/AuthHandler';
import ImageList from '../components/ImageList';
import Upload from '../components/Upload';

import '../../node_modules/nprogress/nprogress.css'



Vue.use(VueRouter);


export const router = new VueRouter({
	mode: 'history',
	routes:[
	{ 
		path : '/oauth2/callback', component: AuthHandler
	},

	{ 
		path : '/', component: ImageList
	},

	{ 
		path : '/upload', component: Upload
	},

	]
})


router.beforeResolve((to, from, next) => { 

  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})


export default {
	router
}