<template>
	<div class="center_brands">
		<div class="cB_title">推荐品牌</div>
		<div class="cB_item">
			<a href="###" v-for="item in imgs" :key="item.id">
				<img :src="item" alt="" /> 
			</a>
			<!--<a href="###"><img src="img/brand/t1.gif" /> </a>
			<a href="###"><img src="img/brand/t1.gif" /> </a>
			<a href="###"><img src="img/brand/t1.gif" /> </a>
			<a href="###"><img src="img/brand/t1.gif" /> </a>
			<a href="###"><img src="img/brand/t1.gif" /> </a>
			<a href="###"><img src="img/brand/t1.gif" /> </a>
			<a href="###"><img src="img/brand/t1.gif" /> </a>-->
		</div>
	</div>
</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "brand_brands",
		data(){
			return {
				imgs:["/static/img/brand/t1.gif","/static/img/brand/t1.gif" ,"/static/img/brand/t1.gif","/static/img/brand/t1.gif","/static/img/brand/t1.gif","/static/img/brand/t1.gif","/static/img/brand/t1.gif","/static/img/brand/t1.gif"]
			}
		}
	}
</script>

<style scoped>
/*推荐品牌*/
.center_brands,.center_allBrands{
	background-color: #fff;
}
.cB_title{
	height: .45rem;
    line-height: .45rem;
    font-size: .16rem;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #e8e8e8;
}
.cB_item{
	overflow: hidden;
}
.cB_item a{
	display:block;
	position: relative;
	float: left;
    width: 25%;
    box-sizing: border-box;
    border-right: 1px solid #e8e8e8;
    border-top: 1px solid #e8e8e8;
    height: .5rem;
}
.cB_item a img{
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
    display: block;
	max-width: 90%;
	margin:auto;
    max-height: .5rem;

}
</style>