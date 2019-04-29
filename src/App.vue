<template>
  <div id="app">
  	<!--<index></index>-->
  	<!--<commodityDetails/>-->
  	<router-view></router-view>
  </div>
</template>

<script>
//	import index from "./pages/index";
//	import commodityDetails from "./pages/commodityDetails";

	
	export default {
	  name: 'App',
	  components:{
//	  	index,
//	  	commodityDetails,
	  }
	}
</script>

<style>
	#app {
	 	width: 100%;
		height: 100%;
 	  display: flex;
    flex-direction: column;
	}
	body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
		margin:0;
		padding:0;
	}
	html,body{
		height: 100%;
	}
	html{
		font-size: 26.27vw;
	}
	body{
		font-family: "微软雅黑",Arial;
		display:flex;
		flex-direction: column;
	}
	ul,ol{
		list-style:none;
	}
	img{
		border: 0;
	}
	a{
		text-decoration: none;
		color: #333;
	}
</style>
