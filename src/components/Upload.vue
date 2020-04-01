<template>
	<div>
		<h2 style="margin-top: 10px">Upload Image </h2>
		<div class="dropper">
		<span>Drop your picture here </span>
		<input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*" />
		
		</div>

	</div>
</template>


<script>
import {mapActions} from 'vuex';
	export default{
		name: 'Upload',
		methods:{
			...mapActions(['uploadImages'])
		}
	} 

</script>


<style scoped>
	.dropper{
		height: 30vh;
		border: 2px dashed #eee;
		border-radius: 5px;
		margin: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		
		position: relative;
		transition: 0.3s;	
	}

	.dropper:hover{
		border: 2px dashed black;
		border-radius: 5px;
		box-shadow: 5px 5px rgba(0, 0, 0, 0.1);
	}

	input{
		width: 100%;
		height: 30vh;
		position: absolute;
		opacity: 0;
	}

</style>