<template>
	<!--header-->
	<div class="header">
		<a href="###" class="head_bottom">
			<span>请输入关键字</span>
			<span class="iconfont">&#xe64d;</span>
		</a>
	</div>
</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "brand_header",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
.header{
	padding: .1rem;
    border-bottom: 1px solid #e8e8e8;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
}
.head_bottom{
	display: block;
	padding-left: .1rem;
    height: .3rem;
    line-height: .3rem;
    border: 1px solid #c8c8c8;
    border-radius: 5px;
    font-size: .12rem;
    color: #999;
}
.head_bottom span:nth-child(2){
	float: right;
	padding-right: .16rem;
	color: #999;
}
</style>