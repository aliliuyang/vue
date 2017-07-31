
import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/Main'
import List from '../components/List'
import ShopCar from '../components/ShopCar'
import Mine from '../components/Mine'
import Register from '../components/MainComponents/Register'
import Detail from '../components/Detail'
Vue.use(Router)


export default new Router({
	routes:[
		{path:'/main',name:'main',component:Main},
		{path:'/list',name:'list',component:List},
		{path:'/shopcar',name:'shopcar',component:ShopCar},
		{path:'/mine',name:'mine',component:Mine},
		{path:'/mine/register',name:'register',component:Register},
		{path:'/detail',name:'detail',component:Detail},
		{path:'/',redirect:"/main"},
    	{path:'*',redirect:"/main"}
	]
})
