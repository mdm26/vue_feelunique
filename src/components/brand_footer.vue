<template>
	<div class="footer">
		<ul class="footer_uls">
			<router-link to='/'>
				<li><span class="iconfont">&#xe604;</span>首页</li>
			</router-link>
			<router-link to='/classify'>
				<li><span class="iconfont">&#xe659;</span>分类</li>
			</router-link>
			<router-link to='/brand' class="bra">
				<li><span class="iconfont">&#xe693;</span>品牌</li>
			</router-link>
			<li><span class="iconfont">&#xe65a;</span>购物篮</li>
			<router-link to='/log'>
				<li><span class="iconfont">&#xe62f;</span>个人中心</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "brand_footer",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
	/*footer*/
.footer{
	width: 100%;
    height:0.55rem;
    font-size: 0;
    box-sizing: border-box;
    padding: 0.04rem .15rem;
    background-color: #fff;
    bottom: 0;
    left: 0;
    z-index: 9;
    border-top: 1px solid #e8e8e8;
}
.footer_uls li{
	display: inline-block;
    width: 20%;
    text-align: center;
    font-size: .12rem;
    position: relative;
    vertical-align: middle;
    height: 100%;
}
.footer_uls li span{
	display: block;
	font-size: .20rem;
	padding-bottom: .06rem;
}
/*footer*/
.bra li span{
	width: .266rem;
    height: 0.276rem;
    margin: .01rem auto;
    border-radius: 50%;
    font-size: .25rem;
    background-color: #333333;
    color: white;
	padding: 0;
}
</style>