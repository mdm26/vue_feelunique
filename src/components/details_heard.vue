<template>
	<!--header-->
		<div class="header">
			<a href="###" class="h_return" onclick="window.history.back();"><img src="/static/img/log/h1.png"/> </a>
			<a href="#figure" class="h_sick commodity"><span class="iconfont">商品</span></a>
			<a href="#c_evaluate" class="h_sick commodity"><span class="iconfont">评价</span></a>
			<a href="#C_commodity" class="h_sick commodity"><span class="iconfont">详情</span></a>
			<router-link to='/' class="aa" >
				<a href="###" class="h_sick"><span class="iconfont">&#xe604;</span></a>
			</router-link>
		</div>
</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "details_heard",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
	.aa{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
	}
.header{
    display: flex;
    height:.44rem;
    line-height: .44rem;
    align-items: center;
    background: #fff;
    overflow: hidden;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 1px solid #ddd;
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
.header .commodity span{
	font-size: .16rem;
	color: #999;
}
.h_sick{
	flex: 1;
	display: block;
}
.h_sick span{

	font-size: .2rem;
    display: block;
    height: 100%;
    margin-right: .1rem;
}
</style>