<template>
	<div class="da">
		<top></top>
		<div class="center">
			<indexBanner :imgsnew="parentnew"></indexBanner>
			<classify/>
			<activity/>
			<recommend/>
			<social/>
		</div>
		<footerl/>
	</div>
</template>

<script>
var b='fff';
	import top from "../components/top";
	import indexBanner from "../components/index_banner";
	import classify from "../components/center_classify";
	import activity from "../components/index_activity";
	import recommend from "../components/index_recommend";
	import social from "../components/index_social";
	import footerl from "../components/footerl";
	export default{
		name: "index",
		data:function(){
			return {
				parentnew:[],
//				parentnew:[
//						"/static/img/index/cBanner1.jpg",
//						"/static/img/index/cBanner2.jpg",
//						"/static/img/index/cBanner3.jpg",
//						"/static/img/index/cBanner4.jpg"
//				]
			}
		},
		components:{
			top
			,indexBanner
			,classify,activity
			,recommend
			,social
			,footerl
		},
		beforeCreate:function() {
			fetch('http://localhost:3000/imgs')
			.then((res)=>{
				 return res.text();
			 })
			.then((res)=>{
				console.log(res);
				this.parentnew = JSON.parse(res);
			 })
		}
	}
</script>

<style scoped>
	.da{
		display: flex;
    flex-direction: column;
	}
	.center{
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		background-color: #f0f0f0;
	}
</style>