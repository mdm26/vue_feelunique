<template>
	<div class="center">
		<ul class="center_left">
			 <!--:key="key"  v-on:click="greet"-->
			<li v-for="item in lis" v-on:click="greet($event.target)">{{item.tit}}
				<div class="center_reght" v-for="items in item.titCen" ref="asd">
					<router-link to='/productList'>
						<a href="###" class="CR_img">
							<img :src="items.imgDa" alt=""/>
						</a>
					</router-link>
					<router-link to='/productList'>
						<div class="CR_list"  v-for="imgPs in items.imgP">
							<a href="###">
								<img :src="imgPs.imgPro" alt=""/>
								<span>{{imgPs.proName}}</span>
							</a>
						</div>
					</router-link>
				</div>
			</li>
			<li class="jieBang"></li>
		</ul>
	</div>
</template>

<script>
	import $ from 'jquery'
	import '@/assets/icos/iconfont.css'
	export default{
		name: "classify_center",
		data(){
			return {
				lis:[
					{
						tit:"面部护肤",
						titCen:[
							{
								imgDa:"/static/img/classify/cr1.jpg",
								imgP:[
									{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									}
								]
								
							}
						]
					},{
						tit:"面部护肤",
						titCen:[
							{
								imgDa:"/static/img/classify/cr1.jpg",
								imgP:[
									{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									}
								]
							}
						]
					},{
						tit:"面部护肤",
						titCen:[
							{
								imgDa:"/static/img/classify/cr1.jpg",
							imgP:[
									{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									}
								]
							}
						]
					},{
						tit:"面部护肤",
						titCen:[
							{
								imgDa:"/static/img/classify/cr1.jpg",
								imgP:[
									{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									}
								]
							}
						]
					},{
						tit:"面部护肤",
						titCen:[
							{
								imgDa:"/static/img/classify/cr1.jpg",
								imgP:[
									{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									}
								]
							}
						]
					},{
						tit:"面部护肤",
						titCen:[
							{
								imgDa:"/static/img/classify/cr1.jpg",
								imgP:[
									{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									}
								]
							}
						]
					},{
						tit:"面部护肤",
						titCen:[
							{
								imgDa:"/static/img/classify/cr1.jpg",
								imgP:[
									{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									}
								]
							}
						]
					},{
						tit:"面部护肤",
						titCen:[
							{
								imgDa:"/static/img/classify/cr1.jpg",
								imgP:[
									{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									},{
										imgPro:"/static/img/classify/l1.jpg",
										proName:"保湿面霜"
									}
								]
							}
						]
					}
				]
			}
		},
		methods:{
			greet: function (btn) {
		     	$(".center_left li").css({
					color: "#666",
					"border-right": "1px solid #e8e8e8"
				})
				$(btn).css({
					color: "#d72245",
					"border-right": "1px solid #fff"
				})
				$(".center_left .center_reght").css({display:'none'});
				$(btn).children().last().css({display:"block"});
		   }
		}
	}
</script>

<style scoped>
/*center*/
.center{
	overflow: hidden;
	height: 100%;
}
.center_left{
	width: .9rem;
    float: left;
    position: relative;
    height: 100%;
}
.center_left li{
	box-sizing: border-box;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .12rem;
    color: #666;
    border-bottom: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
}
.center_left li:nth-child(1){
	color: #d72245;
	border-right: 1px solid #fff;
}
.center_left li:last-child{
	height: 100%;
	
}
.center_left li:nth-child(1) .center_reght{
	display: block;
}
.center_reght{
	width: 2.94rem;
	height: 100%;
	display: none;
    flex: 1;
    overflow-y: auto;
    position: absolute;
    top:0;
    left: .88rem;
}
.CR_img{
	display: block;
    padding: .1rem;
}
.CR_img img{
	width: 100%;
	display: block;
}
.CR_list{
	display:block;
	float: left;
    width:33.333%;
   
}
.CR_list a{
	display: block;
}
.CR_list a img{
	width: .8rem;
	display: block;
	margin: 0 auto;
}
.CR_list a span{
	display: block;
    width: 100%;
    text-align: center;
    margin: .1rem 0 .2rem;
    font-size: .12rem;
    color: #666;
}

</style>