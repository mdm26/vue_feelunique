<template>
	<div>
		<!--分类-->
	<div class="center_classify">
		<ul class="cClassify_ul">
			<li v-for="item in list">
				<a href="###">
					<img :src="item.img" alt="" />
					<span>{{item.name}}</span>
				</a>
			</li>
		</ul>
	</div>
	<!--通知-->
	<div class="center_notice">
		<div class="cN_da">
			<img src="../assets/img/index/cN1.png" />
			<span>全场商品低至65折</span>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		name: "center_classify",
		data(){
			return {
				list:[
					{
						img:"/static/img/index/cC1.png",
						name:"魅力彩妆"
					},
					{
						img:require("../assets/img/index/cC2.png"),
						name:"面部护理"
					},
					{
						img:require("../assets/img/index/cC3.png"),
						name:"洗发护发"
					},
					{
						img:require("../assets/img/index/cC4.png"),
						name:"沐浴美体"
					},
					{
						img:require("../assets/img/index/cC6.png"),
						name:"营养健康"
					},
					{
						img:require("../assets/img/index/cC5.png"),
						name:"新品速递"
					},
					{
						img:require("../assets/img/index/cC7.png"),
						name:"满赠专区"
					},
					{
						img:require("../assets/img/index/cC8.png"),
						name:"凑单专区"
					},
					{
						img:require("../assets/img/index/cC9.png"),
						name:"礼物专区"
					},
					{
						img:require("../assets/img/index/cC10.png"),
						name:"香港仓"
					}
					
				]
			}
		}
	}
</script>

<style scoped>
	.center_classify{
		background-color: #fff;
	    overflow: hidden;
	    padding-top: .2rem;
	    margin-top: 0;
	}
	.cClassify_ul li{
	    float: left;
	    width: 20%;
	    margin-bottom: .21rem;
	    text-align: center;
	    font-size: .12rem;
	    color: #333;
	    overflow: hidden;
	}
	.cClassify_ul li a{
	    display: inline-block;
	}
	.cClassify_ul li a img{
		display: inline-block;
	    margin-bottom: .09rem;
	    width: 0.45rem;
	    height: .45rem;
	}
	.cClassify_ul li a span{
	    display: inline-block;
	    text-align: center;
	    font-size: .12rem;
	    line-height: .12rem;
	}
	/*通知*/
	.center_notice{
	    background-color: #fff;
	    overflow: hidden;
	    margin-top: 0;	
	}
	.cN_da{
	    padding: .13rem 0;
	    margin: 0 auto;
	    width: 3.51rem;
	    border-top: 1px solid #e8e8e8;
	    overflow: hidden;
	}
	.cN_da img{
		float: left;
	    width: .49rem;
	    margin-right: .15rem;
	}
	.cN_da span{
		float: left;
		width: 80%;
	    line-height: .14rem;
	    overflow: hidden;
	    color: #d72245;
	    font-size: 0.14rem;
	}
</style>