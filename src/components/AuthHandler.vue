<template>
	<div>
		Please wait...
	</div>
</template>


<script type="text/javascript">
	import {mapActions} from 'vuex';
	export default{
		name:'AuthHandler',
		methods:{
			...mapActions(['finalizeLogin'])
		},

		created(){
			this.finalizeLogin(window.location.hash);
		}
	}

</script>