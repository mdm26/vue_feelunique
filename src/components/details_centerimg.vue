<template>
	<div class="center_img" id="figure">
		<div class="cI_center">
			<img src="/static/img/commodityDetails/c1.jpg" />
		</div>
	</div>
</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "details_centerimg",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
.center_img{
	width: 100%;
    height: 3.01rem;
    overflow: hidden;
    background: #fff;
    font-size: 0;
    text-align: center;
}
.cI_center{
    border-bottom: 1px solid #ddd;
    margin: 0 .16rem;
}
.center_img img{
	display: block;
    height: 3rem;
    margin: 0 auto
}
</style>