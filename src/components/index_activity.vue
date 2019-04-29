<template>
	<div class="center_activity">
		<div class="cA_top">
			<div class="CAT_left">
				<ul>
					<li v-for="item in litop">
						<a href="###">
							<img :src="item.img" alt=""  />
						</a>
						<div class="CAT_lisL">
							<p>{{item.name}}</p>
							<p>{{item.disc}}</p>
							<p>
								<a href="###">点击选购   </a>
								<span class="CATL_sp">></span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="cA_top cA_bottom">
			<div class="CAT_left">
				<ul>
					<li v-for="item in libot">
						<a href="###">
							<img :src="item.img" alt="" />
						</a>
						<div class="CAT_lisL">
							<p>{{item.name}}</p>
							<p>{{item.disc}}</p>
							<p>
								<a href="###">点击选购   </a>
								<span class="CATL_sp">></span>
							</p>
						</div>
					</li>	
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "index_activity",
		data(){
			return {
				litop:[
					{
						img:"/static/img/index/cA1.jpg",
						name:"Philosophy",
						disc:"直降78折"
					},
					{
						img:require("../assets/img/index/cA.jpg"),
						name:"Philosophy",
						disc:"直降78折"
					}
				],
				libot:[
					{
						img:require("../assets/img/index/cA3.jpg"),
						name:"Briogeo",
						disc:"直降85折"
					},
					{
						img:require("../assets/img/index/cA4.jpg"),
						name:"Philosophy",
						disc:"直降78折"
					},
					{
						img:require("../assets/img/index/cA5.jpg"),
						name:"Philosophy",
						disc:"直降78折"
					}
				]
			}
		}
	}
</script>

<style scoped>
	/*活动*/
	.cA_top{
		margin-top: .12rem;
	    overflow: hidden;
	}
	.cA_top ul{
	    overflow: hidden;
	}
	.cA_top ul li{
		position: relative;
	    float: left;
	    margin-right: .06rem;
	    width: 1.86rem;
	    height: 1.1rem;
	}
	.cA_top ul li a img{
	    position: absolute;
	    left: 0;
	    top: 0;
	    display: block;
	    width: 100%;
	}
	.CAT_lisL{
		position: absolute;
	    width: 0.7rem;
	    right: .2rem;
	    top: .3rem;
	    z-index: 1;
	    overflow: hidden;
	}
	.CAT_lisL p{
		width: 100%;
	    height: .20rem;
	    line-height: .20rem;
	    font-size: .12rem;
	    color: #000;
	    overflow: hidden;
	    text-align: center;
	}
	.CAT_lisL p:nth-child(2){
	    color: #d72245;
	}
	.CATL_sp{
		display: inline-block;
		border: 1px solid #000000;
		width: .15rem;
		height: .15rem;
		border-radius: 50%;
		line-height: .15rem;
		font-size: 0.14rem;
	}
	.CAT_left ul li:last-child{
		margin-right: 0;
	}
	
	.cA_bottom ul li{
		width: 1.2rem;
		height: 1.6rem;
	}
	.cA_bottom .CAT_lisL{
	    top: 0.9rem;
	}
</style>