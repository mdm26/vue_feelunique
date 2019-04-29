<template>
	<div>
		<div class="center_social">
			<div class="cS_title">
				<img src="../../static/img/index/CS1.png" />
				<p>关注官方账号，获取更多福利咨询</p>
			</div>
			<ul class="cS_ul" >
				<li v-for="item in ul1">
					<a href="###" class="CSUl_img1"><img :src="item.img1" alt="" /> </a>
					<span>{{item.idName}}<br>{{item.disc}}</span>
					<a href="###" class="CSUl_img2"><img :src="item.img2" alt="" /> </a>
				</li>
			</ul>
			<ul class="cS_ul2">
				<li v-for="item in ul2">
					<img src="../../static/img/index/cS6.png" />
					<span><h6>{{item.name}}</h6>{{item.way}}</span>
				</li>
			</ul>
		</div>
		<!--汇率-->
		<div class="center_parities">
			今日参考汇率:1英镑=8.86人民币
		</div>
	</div>
</template>

<script>
	export default{
		name: "index_social",
		data(){
			return {
				ul1:[
					{
						img1:"/static/img/index/cS2.png",
						idName:"微博账号：",
						disc:" @FEELUNIQUE-UK",
						img2:"/static/img/index/CS3.png",
					},
					{
						img1:"/static/img/index/CS4.png",
						idName:"微信账号",
						disc:"FEELUNIQUE",
						img2:"/static/img/index/CS5.png",
					}
				],
				ul2:[
					{
						img:"/static/img/index/cS6.png",
						name:"英伦直邮",
						way:"满60英镑，全球免邮"
					},
					{
						img:"/static/img/index/cS7.png",
						name:"汇聚美妆",
						way:"数百品牌 数万单品"
					},
					{
						img:"/static/img/index/cS8.png",
						name:"便捷支付",
						way:"银联+支付宝集成"
					},
					{
						img:"/static/img/index/cS9.png",
						name:"品牌授权",
						way:"100%正规渠道"
					}
				]
			}
		}
	}
</script>

<style scoped>
	/*美无止境微信等*/
.center_social{
	margin-top: .12rem;
    overflow: hidden;
    background-color: transparent;
}
.cS_title{
	padding-top: .25rem;
    height: .55rem;
    background-color: #fff;
}
.cS_title img{
	display: block;
    margin: 0 auto .12rem;
    width: 2.6rem;
    height: auto;
}
.cS_title p{
	font-size: .12rem;
    color: #1b1a19;
    text-align: center;
}
.cS_ul{
	padding: 0 .12rem .12rem;
    background-color: #fff;
    overflow: hidden;
}
.cS_ul li{
	float: left;
    width: 100%;
    height: 0.84rem;
    margin-bottom: .06rem;
    background-color: #f0f0f0;
}
.CSUl_img1{
	float: left;
    margin-top: .12rem;
    margin-left: .12rem;
    width: .6rem;
    height: auto;
}
.CSUl_img1 img,.CSUl_img2 img{
	display: block;
    width: 100%;
}
.cS_ul li span{
	float: left;
    margin-top: .2rem;
    margin-left: .12rem;
    font-size: .12rem;
    line-height: .24rem;
    color: #333;
}
.CSUl_img2{
	float: right;
    margin-top: .26rem;
    margin-right: .12rem;
    width: .9rem;
    height: auto;
}

.cS_ul2{
	padding: .25rem .12rem 0;
    margin-top: .12rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0;
    background-color: #fff;
    overflow: hidden;
}
.cS_ul2 li{
	width: 1.8rem;
    float: left;
    margin-bottom: .25rem;
}
.cS_ul2 li:nth-child(2n){
	float: right;
	width: 1.6rem;
}
.cS_ul2 li img{
	float: left;
	
	width: .3rem;
    height: .3rem;
    margin-right: .12rem;
}
.cS_ul2 li span{
	float: left;
    font-size: .12rem;
    color: #999;
}
.cS_ul2 li span h6{
	color: #333333;
	font-size: .14rem;
}
/*汇率*/
.center_parities{
	margin-top: .12rem;
	height: .4rem;
	padding: 0 .12rem;
    line-height: .4rem;
    font-size: .14rem;
    color: #333;
    background-color: #fff;
}
.center_links{
	margin-top: .12rem;
}

</style>