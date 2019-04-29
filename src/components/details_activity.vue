<template>
	<div class="C_da">
		<div class="ca_da">
			<div class="center_activity">
				<span class="CAT_left">活动</span>
				<div class="cA_right">
					<div class="CAR_one" v-for="item in act" :key="item.id">
						<span>春日美颜全攻略，低至65折  点击选购</span>
						<a href="###">〉</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "details_activity",
		data(){
			return{
				act:["春日美颜全攻略，低至65折  点击选购","春日美颜全攻略，低至65折  点击选购","春日美颜全攻略，低至65折  点击选购","春日美颜全攻略，低至65折  点击选购"]
			}
		}
	}
</script>

<style scoped>
.C_da{
	width: 100%;
	background-color: #FFFFFF;
}
/*活动*/
.ca_da{
	background: #fff;
    margin: .14rem .16rem 0;
	
}
.center_activity{
    line-height: .18rem;
    padding-top: .16rem;
    padding-bottom: .1rem;
    font-size: .12rem;
}
.center_activity{
	position: relative;
    margin-left: .44rem;
}
.CAT_left{
	color: #999;
    position: absolute;
    left: -0.44rem;
    width: 0.44rem;
}
.cA_right{
	min-height: .28rem;
}
.CAR_one{
	color: #d72245;
    line-height: .16rem;
    margin-top: .05rem;
}
.cA_right .CAR_one:nth-child(1){
	margin-top: 0;
}
.CAR_one a{
	float: right;
	color: #666;
}
</style>