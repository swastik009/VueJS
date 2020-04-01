<template>
	<div>
		<h2 style="margin-top: 20px">ImageList</h2>


		
		<div class="ui items" v-for="image in allImages" :key="image.id">	
		<div class="item">		
			<a class="ui tiny image">
      				<img :src="image.link">
   			 </a>
    		<div class="middle aligned content">
      		<div class="header">
        		<i class="like icon"></i>
        		{{image.description}}
      		</div>
    		</div>

		</div>
	</div>

</div>
</template>


<script type="text/javascript">
import {mapActions,mapGetters} from 'vuex';
	export default{
		
		name: 'ImageList',
		computed:{
			...mapGetters(['allImages'])
		},
		methods: {
			...mapActions(['fetchImages'])
		},
		created(){
			this.fetchImages();
		}


	}

</script>