<template>
	<!--header-->
	<div class="header">
		<a href="###" class="h_return" onclick="window.history.back();"><img src="/static/img/log/h1.png"/> </a>
		<h1>{{logName}}</h1>
		<router-link to='/'>
		<a href="####" class="h_sick"><span class="iconfont">&#xe604;</span></a>
		</router-link>
	</div>
</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "log_header",
		data(){
			return {
			}
		},
		props:["logName"]
	}
</script>

<style scoped>
.header{
    display: flex;
    height:.44rem;
    line-height: .44rem;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    box-sizing: border-box;
}
.h_return{
	flex: 1;
    display: block;
    height: 100%;
}
.h_return img{
	margin: .14rem 0 0 .2rem;
	display: block;
	width: .12rem;
    height: .20rem;
}
.header h1{
	flex: 8;
    text-align: center;
    font-size: .18rem;
    line-height: .44rem;
    color: #333;
    font-weight: 400;
}
.h_sick span{
	flex: 1;
	font-size: .2rem;
    display: block;
    height: 100%;
    margin-right: .14rem;
}
</style>