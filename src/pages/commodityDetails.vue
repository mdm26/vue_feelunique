<template>
	<div class="da">
		<heard></heard>
		<div class="center">
			<centerimg/>
			<price/>
			<activity/>
			<shuliagn/>
			<fahuo/>
			<brand/>
			<evaluate/>
			<commodity/>
		</div>
		<footers/>
	</div>
</template>

<script>
	import heard from "../components/details_heard";
	import centerimg from "../components/details_centerimg";
	import price from "../components/details_price";
	import activity from "../components/details_activity";
	import shuliagn from "../components/details_shuliagn";
	import fahuo from "../components/details_fahuo";
	import brand from "../components/details_brand";
	import evaluate from "../components/details_evaluate";
	import commodity from "../components/details_commodity";
	import footers from "../components/details_footers";
	export default{
		name: "commodityDetails",
		components:{
			heard,centerimg,price,activity,shuliagn,fahuo,brand,evaluate,commodity,footers
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