import Vue from 'vue'
import Router from 'vue-router'
import hooks from './hooks/' // 路由钩子

Vue.use(Router)
const useradd= {
	template: '<div>user add page</div>'
}
const dashboard={
	template: '<div>dashboard page</div>'
}

//Vue.component('hostList', require('../views/host/hostList.vue'));
import  hostList from '../views/host/hostList.vue'

const router =  new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      showInSideBar:true,
      component(resolve){require( ['VIEW/dashboard/dashboard'],resolve )}
    },
    {
      path: '/user/list',
      name: '用户',
      showInSideBar:true,
      component(resolve){
	      require(['VIEW/user/list'],resolve)
      }
    },
    {
      path: '/user/add',
      name: '用户添加',
      showInSideBar:true,
      component: useradd
    },
    {
      path: '/device',
      name: '设备列表',
      showInSideBar:true,
      component: hostList
    }
  ]
})
hooks(router)
export default router
