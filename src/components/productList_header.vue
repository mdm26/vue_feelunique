<template>
	<!--header-->
	<div class="header">
		<a href="###" class="h_return" onclick="window.history.back();"><img src="/static/img/log/h1.png"/> </a>
		<a href="###" class="head_bottom">
			<span>请输入关键字</span>
			<span class="iconfont">&#xe64d;</span>
		</a>
		<router-link to='/classify'>
			<a href="###" class="h_sick"><span class="iconfont">&#xe659;</span></a>
		</router-link>
		<router-link to='/'>
			<a href="###" class="h_sick"><span class="iconfont">&#xe604;</span></a>
		</router-link>
	</div>
</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "productList_header",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
.header{
    display: flex;
    height:.66rem;
    line-height: .66rem;
    align-items: center;
    background: #fff;
    overflow: hidden;
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
.head_bottom{
	flex: 5;
	display: block;
	padding-left: .2rem;
	margin: .03rem .1rem 0;
    height: .26rem;
    line-height: .26rem;
    border-radius: .2rem;
    font-size: .14rem;
    color: #000;
    background-color: #f2f2f2;
}
.head_bottom span:nth-child(2){
	float: right;
	padding-right: .16rem;
	color: #999;
}
.header .h_sick{
	flex: 1;
	display: block;
}
.header .h_sick span{

	font-size: .2rem;
    display: block;
    height: 100%;
    margin-right: .1rem;
}
.da{
	width: 100%;
	display: 1;
	overflow-y: scroll;
	overflow-x: hidden;
}
</style>