<template>
	<div>
		<AppHeader></AppHeader>
		
		<div class="ui container">
		<router-view></router-view>
	</div>
	</div>
</template>

<script type="text/javascript">
	import AppHeader from './components/AppHeader';

	export default {
		name: "App",
		components:{
			AppHeader
		}
	}
</script>
