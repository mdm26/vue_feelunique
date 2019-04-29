import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from "@/pages/index"
import commodityDetails from "@/pages/commodityDetails"
import brand from "@/pages/brand"
import classify from "@/pages/classify"
import log from "@/pages/log"
import reg from "@/pages/reg"
import productList from "@/pages/productList"

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'index',
      component: index
   },{
      path: '/commodityDetails',
      name: 'commodityDetails',
      component: commodityDetails
    },{
      path: '/brand',
      name: 'brand',
      component: brand
    },{
      path: '/classify',
      name: 'classify',
      component: classify
    },{
      path: '/log',
      name: 'log',
      component: log
    },{
      path: '/reg',
      name: 'reg',
      component: reg
    },{
      path: '/productList',
      name: 'productList',
      component: productList
    }
  ]
})
