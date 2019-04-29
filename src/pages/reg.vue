<template>
	<div class="da">
		<headers :logName="regname"></headers>
		<regCenter></regCenter>
	</div>
</template>

<script>
	import headers from "../components/log_header";
	import regCenter from "../components/reg_center";
	export default{
		name: "reg",
		data:function(){
			return {
				regname:"注册"
			}
		},
		
		components:{
			headers
			,regCenter
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