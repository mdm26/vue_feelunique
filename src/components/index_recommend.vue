<template>
	<div class="center_recommend">
		<h2>热销推荐</h2>
		<div class="CR_nav">
			<ul class="CR_navUls">
				<li v-for="item in listitle" :key="item.id">{{item}}</li>
			</ul>
		</div>
		<div class="CR_products">
					<ul class="CRP_uls">
						
							<li v-for="item in lisporOne" :key="item.id">
								<router-link to='/commodityDetails'>
									<a href="###" class="CRP_img">
										<img :src="item.imgpro" alt=""/>
									</a>
									<div class="CRP_right">
										<a href="###">{{item.name}}</a>
										<ul class="CRPR_uls">
											<li>
												<img :src="item.imgUk" alt=""/>
											</li>
											<li class="CRPR_ulsLI">
												<span>{{item.disc}}</span>%  OFF
											</li>
										</ul>
										<div class="CRPR_price">
											<div class="CRPR_priceTop">
												<span class="price_left">£<span>{{item.newPrice}}</span></span>
												<span class="price_right">£<span>{{item.oldPrice}}</span></span>
											</div>
											<div class="CRPR_priceBot">参考价: <span class="BotPrice">￥<span>{{item.rem}}</span></span>
											</div>
										</div>
										<div class="CRPR_addCart">
											<span>加入购物篮</span>
										</div>
									</div>
								</router-link>
							</li>
						<li><a href="###">查看更多   ></a></li>
					</ul>
				</div>
	</div>
</template>

<script>
	export default{
		name: "index_recommend",
		data(){
			return{
				listitle:["超值推荐","香港仓推荐","新品抢先购","超值套装","超值套装","超值套装"],
				lisporOne:[{
						imgpro:"/static/img/index/CR1.jpg",
						imgUk:"/static/img/index/cr2.png",
						name:"Ecooking 紧致精华胶囊 60粒",
						disc:"25",
						newPrice:"32.25",
						oldPrice:"43.00",
						rem:"284.93"
					},{
						imgpro:"/static/img/index/CR1.jpg",
						imgUk:"/static/img/index/cr2.png",
						name:"Ecooking 紧致精华胶囊 60粒",
						disc:"25",
						newPrice:"32.25",
						oldPrice:"43.00",
						rem:"284.93"
					},
				],
				lisporTow:[{
						imgpro:"/static/img/index/CR1.jpg",
						imgUk:"/static/img/index/cr2.png",
						name:"Ecooking 紧致精华胶囊 60粒",
						disc:"25",
						newPrice:"32.25",
						oldPrice:"43.00",
						rem:"284.93"
					}
				]
			}
		}
	}
</script>

<style scoped>
	/*热销推荐*/
.center_recommend{
	background-color: #fff;
    margin-top: .12rem;
    overflow: hidden;
}
.center_recommend h2{
	height: .42rem;
    line-height: 0.42rem;
    text-align: center;
    font-size: .16rem;
    color: #333;
}
/*热销推荐导航*/
.CR_nav{
	border-bottom: 1px solid #e8e8e8;
}
.CR_navUls{
	display: flex;
	overflow-x:scroll;
	margin-right: .25rem;
}
.CR_navUls::-webkit-scrollbar { display: none }
.CR_navUls li{
    margin-left: .25rem;
   	width: auto;
   	float: left;
    color: #666;
    font-size: .14rem;
    overflow: hidden;
    text-align: center;
    padding-bottom: .12rem;
    border-bottom: 2px solid transparent;
    flex-shrink: 0;
}
.CR_navUls li:nth-child(1){
	border-bottom: 2px solid #333;
}
/*产品*/
.CRP_uls{

	overflow: hidden;
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
	position: relative;
    overflow: hidden;
}
.CRP_uls .CRP_right .CRPR_uls li{
	float: left;
	font-size: .12rem;
	line-height: .18rem;
	height: .18rem;
	display: inline-block;
	margin-right: .06rem;
	padding: 0;
	border: none;
}
.CRP_right .CRPR_uls li img{
	width: .45rem;
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
    bottom: 0.35rem;
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
.CRPR_addCart{
	position: absolute;
    background-color: #1b1a19;
    color: #fff;
    text-align: center;
	width: .9rem;
    height: .35rem;
    line-height: .35rem;
    font-size: .14rem;
    right: .2rem;
    bottom: .35rem;
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