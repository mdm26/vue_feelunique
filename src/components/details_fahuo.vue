<template>
		<div class="C_da">
			<div class="ca_da">
				<!--发货-->
				<div class="c_fahuoo">
					<div class="center_activity cA_shuliagn">
						<span class="CAT_left">发货</span>
						<div class="cA_right">
							<div class="CAR_one">
								<span> 英国直邮，发货后预计7-14天到货</span>
							</div>
						</div>
					</div>
				</div>
				
				<!--税费-->
				<div class="center_activity cA_shuliagn">
					<span class="CAT_left">税费</span>
					<div class="cA_right">
						<div class="CAR_one">
							<span> 如被税，可联系客服领取£20无门槛限时税费补贴券</span>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		name: "details_fahuo",
		data(){
			return {
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
/*数量*/
.cA_shuliagn .CAT_left{
	line-height: .3rem;
}
.cAR_left{
	display: inline-block;
    font-size: 0;
    vertical-align: top;
}
.cAR_left input:nth-child(1),.cAR_left input:nth-child(3){
    position: relative;
    display: inline-block;
    width: .3rem;
    height: .3rem;
    border: 1px solid #ccc;
    background: #fff;
    vertical-align: top;
    font-size: .14rem;
    color: #999;
}
.cAR_left input:nth-child(2){
    box-sizing: border-box;
    display: inline-block;
    width: .54rem;
    height: .3rem;
    border: 1px solid #ccc;
    border-left: none;
    border-right: none;
    border-radius: 0;
    font-size: .14rem;
    text-align: center;
    vertical-align: top;
}
.cA_shuliagn .CAR_one{
	display: inline-block;
	margin: 0 0 0 .12rem;
}
.cA_shuliagn .CAR_one span{
	color: #000000;
	line-height: .3rem;
}
.c_fahuoo{
	border-bottom: 1px solid #ddd;
}
.c_fahuoo{
	border-bottom: 1px solid #ddd;
}

</style>