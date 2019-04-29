<template>
	<div class="da">
		<headers></headers>
		<div class="center">
			<brandBanner></brandBanner>
			<brands/>
			<allBrands/>
		</div>
		<brandFooter/>
	</div>
</template>

<script>
	import headers from "../components/brand_header";
	import brandBanner from "../components/brand_banner";
	import brands from "../components/brand_brands";
	import allBrands from "../components/brand_allBrands";
	import brandFooter from "../components/brand_footer";
	export default{
		name: "brand",
		data:function(){
			return {
			}
		},
		components:{
			headers
			,brandBanner
			,brands
			,allBrands
			,brandFooter
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