<template>
	<div>
	<div class="ui secondary pointing menu">
			<a class="active item">
			Home
			</a>

		
		<div class="right menu">

		<div v-if="isLoggedIn" class='horizontal'>
			<router-link to='/' href="#" class="ui item" >Gallery</router-link>
			<router-link to='/upload' href="#" class="ui item" >Upload</router-link>
			<a href="#" class="ui item" @click="logout" >Logout</a>
		</div>
		<div v-else>
			<a href="#" class="ui item" @click="login">Login</a>
		</div>
			
		</div>

		</div>


	</div>
</template>

<script type="text/javascript">
	import {mapActions,mapGetters} from 'vuex';

	export default{
		name: 'AppHeader',
		computed:{
			...mapGetters(['isLoggedIn'])
		},
		methods: {
			...mapActions(['login','logout'])
		}
	};

</script>

<style scoped>
.horizontal{
	display: flex;
	flex-direction: row;
}

</style>