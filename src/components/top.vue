<template>
	<div class="header">
		<div class="head_top">
			<div class="HT_left">
				<img src="../assets/img/index/ht1.png" />
			</div>
			<a href="###" class="HT_cent">
				<img src="../assets/img/index/ht2.png" />
			</a>
			<div class="HT_right">
				<img src="../assets/img/index/ht3.png" />
			</div>
		</div>
		<a href="###" class="head_bottom">
			<span>搜索商品、品牌</span>
		</a>
	</div>
</template>

<script>
	export default{
		name: "top"
	}
</script>

<style scoped>
	.header{
		padding-bottom: .12rem;
	    width: 100%;
	    background-color: #fff;
	    border-bottom: 1px solid #e8e8e8;
	}
	.head_top{
		position: relative;
	    line-height: 1.2rem;
	    height: .38rem;
	    padding: 0.06rem .12rem 0;
	}
	.HT_left{
		float: left;
	    height: .32rem;
	}
	.HT_left img{
		display: block;
	    width: .20rem;
	    height: auto;
	}
	.HT_cent{
		position: absolute;
	    width: 1.65rem;
	    height: .15srem;
	    left: 50%;
	    top: .12rem;
	    margin-left: -0.8rem;
	}
	.HT_cent img{
	    display: block;
	    width: 100%;
	    height: 100%;
	}
	.HT_right{
		float: right;
	    height: .32rem;
	}
	.HT_right img{
		display: block;
	    width: .19rem;
	    height: auto;
	}
	.head_bottom{
		box-sizing: border-box;
	    display: block;
	    padding-left: .36rem;
	    margin: 0 auto;
	    width: 3.47rem;
	    height: .30rem;
	    border: 1px solid #999;
	    border-radius: .15rem;
	    line-height: .30rem;
	    font-size: .12rem;
	    color: #999;
	}
</style>