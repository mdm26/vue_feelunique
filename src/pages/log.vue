<template>
	<div class="da">
		<headers :logName="logname"></headers>
		<logCenter></logCenter>
	</div>
</template>

<script>
	import headers from "../components/log_header";
	import logCenter from "../components/log_center";
	export default{
		name: "log",
		data:function(){
			return {
				logname:"账户登录"
			}
		},
		components:{
			headers
			,logCenter
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