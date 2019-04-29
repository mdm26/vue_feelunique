<template>
	<!--footer-->
		<div class="footer">
			<ul class="footer_uls">
				<li><span class="iconfont">&#xe65a;</span>购物车	</li>
				<li><span class="collect">★</span>收藏</li>
				<li>
					<input class="addcar" type="button" value="加入购物车" />
				</li>
			</ul>
		</div>
</template>

<script>
	export default{
		name: "details_footers",
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

.footer .footer_uls li{
	width: 24%;
}
.footer .footer_uls .collect{
	font-size: .24rem;
	line-height: .25rem;
}
.footer .footer_uls li:nth-child(1) span{
	font-size: .18rem;
}
.addcar{
	width: 195px;
	position: absolute;
	top: -0.27rem;
	display: block;
	border: none;
	height: .55rem;
	background-color: #d72245;
	font-size: .16rem;
    color: #fff;
    text-align: center;
}

</style>