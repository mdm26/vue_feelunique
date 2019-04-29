<template>
	<div class="da">
		<headers></headers>
		<pLNav></pLNav>
		<pLcenter></pLcenter>
	</div>
</template>

<script>
	import headers from "../components/productList_header";
	import pLNav from "../components/productList_nav";
	import pLcenter from "../components/productList_center";
	export default{
		name: "productList",
		data:function(){
			return {
			}
		},
		
		components:{
			headers
			,pLNav
			,pLcenter
		}
	}
</script>

<style scoped>
	
	.da{
		display: flex;
	    flex-direction: column;
	    height: 100%;
	}
</style>