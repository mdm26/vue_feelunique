<template>
	<!--价格商品名-->
	<div class="center_name">
		<div class="C_price">
			<div class="CP_top">
				<div class="cpt_left">
					<span>£5.35</span>
					<span>24%OFF</span>
					<span>参考价：￥46.98</span>
				</div>
				<div class="cpt_right">£7.00</div>
			</div>
			<div class="CP_bottom">
				The Ordinary 有机鼠尾草籽油 30ml
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "details_price",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
/*价格商品名*/
.center_name{
	width: 100%;
    background: #fff;
    font-size: .12rem;
}
.C_price{
	padding-bottom: .1rem;
   	border-bottom: 1px solid #ddd;
    margin: 0 .16rem;
   	
}
.CP_top{
	padding-top: .18rem;
	overflow: hidden;
}
.cpt_left{
	float: left;
    vertical-align: middle;
}
.cpt_left span:nth-child(1){
	color: #d72245;
    font-weight: 700;
    font-size: .18rem;
    line-height: .18rem;
    vertical-align: middle;
}
.cpt_left span:nth-child(2){
	background: #d72245;
    display: inline-block;
    line-height: .18rem;
    padding: 0 .1rem;
    color: #fff;
    vertical-align: middle;
}
.cpt_left span:nth-child(3){
    display: block;
    margin-top: .08rem;
    color: #999;
}
.cpt_right{
    float: right;
    color: #999;
    text-decoration: line-through;
}
.CP_bottom{
    line-height: .16rem;
    margin-top: .14rem;
    font-size: .16rem;
    color: #333;
}
.C_da{
	width: 100%;
	background-color: #FFFFFF;
}
</style>