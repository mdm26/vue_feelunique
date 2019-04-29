<template>
	<div class="da">
		<ul class="CRP_uls">
			<router-link to='/commodityDetails'>
				<li v-for="item in lis" :key="item.id">
					<a href="###" class="CRP_img">
						<img :src="item.imgSP" alt=""/>
					</a>
					<div class="CRP_right">
						<a href="###">{{item.nameSP}}</a>
						<div class="CRPR_price">
							<div class="CRPR_priceTop">
								<span class="price_left">£<span>{{item.newprice}}</span></span>
								<span class="price_right">£<span>{{item.oldprice}}</span></span>
							</div>
							<div class="CRPR_priceBot">参考价: <span class="BotPrice">￥<span>{{item.refprice}}</span></span>
							</div>
						</div>
						<div class="CRPR_addCart">
							<a href="###"></a>
						</div>
						<ul class="CRPR_uls">
							<li class="CRPR_ulsLI">
								<span>{{item.discount}}</span>%  OFF
							</li>
						</ul>
					</div>
				</li>	
			</router-link>
			<li><a href="###">查看更多   ></a></li>
		</ul>
	</div>
</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "productList_center",
		data(){
			return {
				lis:[
					{
						imgSP:"/static/img/index/CR1.jpg",
						nameSP:"Ecooking 紧致精华胶囊 60粒",
						newprice:"32.25",
						oldprice:"43.00",
						refprice:"284.93",
						discount:"25"
					},{
						imgSP:"/static/img/index/CR1.jpg",
						nameSP:"Ecooking 紧致精华胶囊 60粒",
						newprice:"32.25",
						oldprice:"43.00",
						refprice:"284.93",
						discount:"88"
					},{
						imgSP:"/static/img/index/CR1.jpg",
						nameSP:"Ecooking 紧致精华胶囊 60粒",
						newprice:"32.25",
						oldprice:"43.00",
						refprice:"284.93",
						discount:"66"
					},{
						imgSP:"/static/img/index/CR1.jpg",
						nameSP:"Ecooking 紧致精华胶囊 60粒",
						newprice:"32.25",
						oldprice:"43.00",
						refprice:"284.93",
						discount:"52"
					},{
						imgSP:"/static/img/index/CR1.jpg",
						nameSP:"Ecooking 紧致精华胶囊 60粒",
						newprice:"32.25",
						oldprice:"43.00",
						refprice:"284.93",
						discount:"20"
					},{
						imgSP:"/static/img/index/CR1.jpg",
						nameSP:"Ecooking 紧致精华胶囊 60粒",
						newprice:"32.25",
						oldprice:"43.00",
						refprice:"284.93",
						discount:"40"
					}
				]
			}
		}
	}
</script>

<style scoped>
.CRP_uls{
	flex: 1;
	overflow-y: auto;
	overflow-x: hidden;
}
.CRP_uls li{
	border-bottom: 1px solid #e8e8e8;
    border-top: none;
	position: relative;
    padding: .2rem;
    overflow: hidden;
}
.CRP_img{
	display: block;
	float: left;
	width: 1.18rem;
	height: 1.18rem;
}
.CRP_uls li a img{
	width: 1.18rem;
	height: 1.18rem;
}
.CRP_right{
	width: 2.16rem;
    height: auto;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: .12rem;
}
.CRP_right a{
	display: block;
	height: .34rem;
	font-size:.12rem; 
	line-height: .14rem;
}
.CRPR_uls{
	position: absolute;
	top: 1.1rem;
    overflow: hidden;
}
.CRP_uls .CRP_right .CRPR_uls li{
	float: left;
	font-size: .12rem;
	line-height: .16rem;
	height: .16rem;
	display: inline-block;
	margin-right: .06rem;
	padding: 0;
	border: none;
}

.CRP_uls .CRP_right .CRPR_uls .CRPR_ulsLI{
	background: #fff;
    color: #d72245;
    border: 1px solid #d72245;
    padding: 0 .04rem;
    box-sizing: border-box;
}
.CRPR_price{
	position: absolute;
    bottom: 0.55rem;
}
.CRPR_priceTop{
	overflow: hidden;
}
.price_left{
	display: block;
	float: left;
	font-size: .14rem;
    color: #d72245;
}
.price_right{
	display: block;
	float: left;
	font-size: .12rem;
    color: #999;
    margin-left: .1rem;
    text-decoration: line-through;
    margin-top: 0.02rem;
}
.CRPR_priceBot{
	margin-top: .03rem;
    font-size: .14rem;
    color: #999;
}
.BotPrice{
	margin-top: .03rem;
    font-size: .12rem;
    color: #999;
}
.CRPR_addCart a{
	position: absolute;
    width: .42rem;
    height: .42rem;
    right: .2rem;
    bottom: .35rem;
    background: url(/static/img/productList/jlt.png) no-repeat -123px -53px;
    background-size: 1.8rem auto;
}
.CRP_uls li:nth-last-of-type(1){
	height: .4rem;
	font-size: .12rem;
    line-height: .4rem;
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
    border-top: none;
    padding: 0;
  
}
.CRP_uls li:nth-last-of-type(1) a{
	  color: #999999;
}
</style>