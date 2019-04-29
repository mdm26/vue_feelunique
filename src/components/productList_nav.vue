<template>
	<div class="nav">
		<div class="nav_one">综合&nbsp;<span>▼</span></div>
		<div class="nav_one">综合&nbsp;<span>▼</span></div>
		<div class="nav_one">综合&nbsp;<span>▼</span></div>
		<div class="nav_one">综合&nbsp;<span></span></div>
	</div>
</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "productList_nav",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
/*nav*/
.nav{
    width: 100%;
    background-color: #fff;
    height: .38rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
}
.nav_one{
    width: 25%;
    float: left;
    text-align: center;
    font-size: .14rem;
    color: #999;
    height: .38rem;
    line-height: .38rem;
}
.nav_one span{
	font-size: .12rem;
}
.nav .nav_one:last-child span{
	vertical-align: middle;
    display: inline-block;
    background: url(/static/img/productList/jlt.png) no-repeat -9px -93px;
    background-size: .8rem auto;
    width: 0.12rem;
    height: 0.12rem;
    margin-top: 0px;
}
</style>