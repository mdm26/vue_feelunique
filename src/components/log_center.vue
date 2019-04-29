<template>
	<div class="center">
		<div class="c_phone">
			<span><img src="/static/img/log/username.png"/></span>
			<input type="text" placeholder="邮箱/手机"/>
		</div>
		<div class="c_phone">
			<span><img src="/static/img/log/password.png"/></span>
			<input type="text" placeholder="密码（6-20位字母或数字组合）"/>
			<span class="CM_invisible"></span>
		</div>
		<div class="c_phone">
			<span><img src="/static/img/log/captcha.png"/></span>
			<input type="text" placeholder="请输入验证码"/>
			<span class="CV_verification">
				<img src="/static/img/log/verification.1.png" />
			</span>
		</div>
		<div class="C_log">
			<input type="button" value="登录" />
		</div>
		<div class="C_reg">
			<router-link to='/reg'>
				<a href="reg.html?p=1">注册Feelunique账户</a>
			</router-link>
			<a href="###">忘记密码？</a>
		</div>
		<div class="C_other">
			<span>使用其他方式登录</span>
			<div class="CO_tu">
				<a href="###"><img src="/static/img/log/co1.png"/></a>
				<a href="###"><img src="/static/img/log/co2.png"/></a>
				<a href="###"><img src="/static/img/log/co3.png"/></a>
				<a href="###"><img src="/static/img/log/co4.png"/></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "log_center",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
/*内容*/
.center{
	padding-top: .28rem;
}
.c_phone{
	display: flex;
	border-bottom: 1px solid #e0e0e0;
	margin: 0 .2rem;
	padding: 0 .08rem;
	align-items: center;
	position: relative;
}
.c_phone span{
	display: block;
}
.c_phone span img{
	width: .22rem;
	height: .24rem;
	display: block;

}
.c_phone input{
	display: block;
	border: none;
	height: .46rem;
	margin-left: .12rem;
	outline: none;
	font-size: .14rem;
	width: 100%;
}
.CM_invisible{
	position: absolute;
    right: .12rem;
    width: .2rem;
    height: .14rem;
    display: inline-block;
    background: url(/static/img/log/invisible.png) no-repeat 50%;
    background-size: .2rem .14rem;
}
.CV_verification{
	position: absolute;
    right: .12rem;
    display: inline-block;
}
.c_phone .CV_verification img{
	 width: .61rem;
    height: .31rem;
    display: block;
}
.C_log,.C_reg{
	margin: .2rem;
	font-size: .14rem;
}
.C_log input{
	display: block;
	height: .4rem;
	width: 3.34rem;
	background-color: #000000;
	font-size: .14rem;
	color: white;
	outline: none;
	border: none;
}
.C_reg a:nth-child(1){
	color: #d72245;
}
.C_reg a:nth-child(2){
	float: right;
	color: #999;
}
/*其他*/
.C_other{
	width: 3.35rem;
    margin: 0 auto;
    text-align: center;
    border-top: 1px solid #ddd;
    position: fixed;
    bottom: .66667rem;
    left: 6%;
}
.C_other span{
	position: absolute;
    top: -0.12rem;
    left: 84%;
    margin-left: -1.6rem;
    width: .98rem;
    color: #999;
    font-size: .12rem;
    background: #fff;
}
.CO_tu{
	display: flex;
	margin: 12%;
	
}
.CO_tu a{
    margin: .35rem .12rem 0;
    width: .4rem;
    height: .4rem;
    display: inline-block;
}
.CO_tu a img{
    width: .4rem;
    height: .4rem;
    display:block;
}


</style>