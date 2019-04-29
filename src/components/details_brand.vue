<template>
		<div class="C_brand">
			<a href="###">
				<img src="/static/img/commodityDetails/cb1.png"/>
				<span>查看更多品牌商品   〉</span>
			</a>
		</div>
</template>

<script>
	export default{
		name: "details_brand",
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

</style>