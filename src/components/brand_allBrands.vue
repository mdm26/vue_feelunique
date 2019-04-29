<template>
	
		<!--所有品牌-->
	<div class="center_allBrands">
		<div class="cB_title">所有品牌</div>
		<div class="cAB_nav">
			<a v-for="(item,key) in a" :href="item.hrefs" :key="key">{{item.name}}</a>
		</div>
		<div  class="cAB_item">
			<div v-for="(item,key) in b" class="cAB_itemA" :id="item.name" :key="key">
				<div class="cABI_Letter">{{item.name}}</div>
				<ul >
					<li v-for="items in item.bar">{{items}}</li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>
	import '@/assets/icos/iconfont.css'
	export default{
		name: "brand_allBrands",
		data(){
			return {
				a:[
					{
						hrefs:"#A",
						name:"A"
					},
					{
						hrefs:"#B",
						name:"B"
					},
					{
						hrefs:"#C",
						name:"C"
					},
					{
						hrefs:"#D",
						name:"D"
					},
					{
						hrefs:"#E",
						name:"E"
					},
					{
						hrefs:"#F",
						name:"F"
					},
					{
						hrefs:"#G",
						name:"G"
					},
					{
						hrefs:"#H",
						name:"H"
					}
				],
				b:[
					{
						name:"A",
						bar:[
							"Antipodes  安媞珀"
						]
					},
					{
						name:"B",
						bar:[
							"Antipodes  安媞珀",
							"Antipodes  安媞珀"
						]
					},
					{
						name:"C",
						bar:[
							"Antipodes  安媞珀",
							"Antipodes  安媞珀",
							"Antipodes  安媞珀"
						]
					},
					{
						name:"D",
						bar:[
							"Antipodes  安媞珀",
							"Antipodes  安媞珀",
							"Antipodes  安媞珀",
							"Antipodes  安媞珀"
						]
					},
					{
						name:"E",
						bar:[
							"Antipodes  安媞珀",
							"Antipodes  安媞珀",
							"Antipodes  安媞珀"
						]
					},
					{
						name:"F",
						bar:[
							"Antipodes  安媞珀",
							"Antipodes  安媞珀",
							"Antipodes  安媞珀",
							"Antipodes  安媞珀"
						]
					},
					{
						name:"G",
						bar:[
							"Antipodes  安媞珀",
							"Antipodes  安媞珀"
						]
					},
					{
						name:"H",
						bar:[
							"Antipodes  安媞珀",
							"Antipodes  安媞珀"
						]
					}
				]
			}
		}
	}
</script>

<style scoped>
	
.cB_title {
    height: .45rem;
    line-height: .45rem;
    font-size: .16rem;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #e8e8e8;
}
/*所有品牌*/
.center_allBrands{
	margin-top: .12rem;
	background-color: #FFFFFF;
}
.cAB_nav{
    width: .2rem;
    text-align: center;
    float: right;
}
.cAB_nav a{
	font-size: .12rem;
	color: #333;
	display: block;
	margin-bottom: .08rem;
}
.cAB_itemA{
    padding: 0 .2rem 0 .1rem;
}
.cABI_Letter{
	height: .3rem;
    border-top: 1px solid #e8e8e8;
    font-size: .14rem;
    font-weight: 600;
    line-height: .3rem;
    color: #333;
}
.cAB_itemA ul li{
	height: .3rem;
    border-top: 1px solid #e8e8e8;
    font-size: .12rem;
    line-height: .3rem;
}
</style>