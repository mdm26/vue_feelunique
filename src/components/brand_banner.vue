<template>
	<div class="swiper-container center_banner">
		<div class="swiper-wrapper">
			<a href="" class="swiper-slide" v-for="item in imgs" :key="item.id">
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
		name: "brand_banner",
		data(){
			return{
				imgs:["/static/img/brand/cBanner1.jpg","/static/img/brand/cBanner2.jpg" ,"/static/img/brand/cBanner3.jpg" ]
			}
		},
		mounted(){
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
	display: flex;
	position: relative;
}
.center_banner img{
	width: 100%;
	display: block;
}

</style>
<style>

.center_banner .gang{
	bottom: 0.15rem;
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