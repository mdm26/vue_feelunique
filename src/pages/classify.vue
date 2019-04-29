<template>
	<div class="da">
		<headers></headers>
		<classifyCenter></classifyCenter>
		<footers/>
	</div>
</template>

<script>
	import headers from "../components/brand_header";
	import classifyCenter from "../components/classify_center";
	import footers from "../components/classify_footers";
	export default{
		name: "classify",
		data:function(){
			return {
			}
		},
		components:{
			headers
			,classifyCenter
			,footers
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