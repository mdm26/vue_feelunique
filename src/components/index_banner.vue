<template>
	<div class="swiper-container center_banner">
		<div class="swiper-wrapper">
			<a href="" class="swiper-slide" v-for="item in imgsnew" :key="item.id">
				<img :src="item" alt="">
			</a>
		</div>
		<!--杠杠（自动创建）-->
		<div class="swiper-pagination gang">
		</div>
	</div>	
</template>

<script>
	import Swiper from 'swiper';
	import '../assets/css/swiper.min.css';
	export default{
		name: "index_banner",
		data(){
			return{
				imgItems:[]
			}
		},
		props:["imgsnew"],
//		watch:{
//			imgItems:function(){
//				console.log("a:"+this.imgItems)
//			}
//		},
		mounted(){
//			this.imgItems=this.imgsnew
			console.log("aaa:"+this.imgsnew)
			let swiper = new Swiper('.swiper-container', {
		 		spaceBetween: 30,
			    centeredSlides: true,
			    autoplay: {
				    delay: 2500,
				    disableOnInteraction: false,
			    },
				pagination: {
				    el: '.swiper-pagination',
				    clickable: true,
				},
				navigation: {
				    nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
		  	});
		}
	}
</script>

<style scoped>
	.center_banner{
		height: 1.6rem;
		display: flex;
		position: relative;
	}
	.center_banner img{
		width: 100%;
	}
</style>
<style>
	.center_banner .gang{
		bottom: -0.15rem;
	}
	.center_banner .gang .swiper-pagination-bullet{
		height: 0.03rem;
		width: 0.2rem;
		background-color: #a89e9e;
		opacity: .5;
		border-radius: 0;
		margin-right:0.05rem;
	
	}
	.center_banner .gang .swiper-pagination-bullet-active{
		background-color: #000000;
		opacity: 1;
	}

</style>