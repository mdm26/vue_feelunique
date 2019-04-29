<template>
	<!--评价-->
	<div class="C_brand c_evaluate" id="c_evaluate">
		<a href="###">
			<span>商品评价(0)</span>
			<span>好评率100%</span>
		</a>
		<div class="CE_cent">暂无评价</div>
	</div>
</template>

<script>
	export default{
		name: "details_evaluate",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
	/*品牌*/
.C_brand{
    height: .4rem;
    margin-top: .1rem;
    padding: .1rem .14rem;
    background: #fff;
    font-size: .12rem;
}
.C_brand a{
	display: block;
	overflow: hidden;
}
.C_brand a img{
	float: left;
    width: auto;
    height: .5rem;
}
.C_brand a span{
	position: relative;
    float: right;
    line-height: .4rem;
    padding-right: .13rem;
    color: #999;
}
/*评价*/
.c_evaluate{
	height: auto;
}
.c_evaluate a{
	border-bottom: 1px solid #e8e8e8;
}
.c_evaluate a span:nth-child(1){
	float: left;
}
.CE_cent{
    padding: .2rem 0;
    text-align: center;
}
</style>