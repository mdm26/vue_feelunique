<template>
	<div class="center">
		<div class="c_phone">
			<span><img src="/static/img/reg/cellphone.png"/></span>
			<input type="text" placeholder="请输入手机号"/>
		</div>
		<div class="c_phone">
			<span><img src="/static/img/reg/captcha.png"/></span>
			<input type="text" placeholder="请输入验证码"/>
			<span class="CV_verification">
				<img src="/static/img/log/verification.1.png" />
			</span>
		</div>
		<div class="c_phone">
			<span><img src="/static/img/reg/cellphone-captcha.png"/></span>
			<input type="text" placeholder="请输入短信验证码"/>
			<span class="CV_verification">
				<input type="button" value="获取验证码" />
			</span>
		</div>
		<div class="c_phone">
			<span><img src="/static/img/reg/password.png"/></span>
			<input type="text" placeholder="密码（6-20位字母或数字组合）"/>
		</div>
		<div class="C_clause">
			<input type="checkbox"/>
			<span>已阅读并同意</span><a href="###">《服务条款》</a> 及 <a href="###">《隐私条款》</a>
		</div>
		<div class="C_log">
			<input type="button" value="立即注册" />
		</div>
		<div class="C_log c_log2">
			<a href="log.html"><input type="button" value="已有账号，返回登录" /></a>
		</div>
		<div class="C_reg">
			<a href="###">使用邮箱注册  ></a>
		</div>
	</div>
</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "reg_center",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
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
.C_clause{
	color: #999;
    margin-left: .2rem;
    display: flex;
    align-items: center;
    padding-top: .16rem;
    font-size: .12rem;
}
.C_clause input{
	display: block;
	width: .14rem;
	height: .14rem;
	border: none;
	border:  1px solid #ccc;
	margin-right: .08rem;
}
.C_clause a{
	color: #1bbc9b;
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
.c_log2 input{
	background-color: white;
	color: #000000;
	border: 1px solid #ccc;
}
.C_reg a{
	color: #999;
}
/*其他*/
.C_other{
	width: 3.35rem;
    margin: 0 auto;
    text-align: center;
    border-top: 1px solid #ddd;
    position: fixed;
    bottom:1rem;
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
	margin: 0 12%;
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
.CV_verification input{
	color: white;
	background-color: #000000;
	width: 1rem;
	height: .35rem;
}
</style>