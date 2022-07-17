import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerMicroApps, start } from 'qiankun' //新增部分，导入qiankun中的两个方法
const apps = [{
  name: 'vueApp', //子应用的名称
  entry: 'http://192.168.0.102:8081', //子应用的域名
  container: '#vue', //承载子应用的容器，在上面App.vue中定义
  activeRule: '/vue', // 被激活的子应用的路由
}, {
  name: 'reactApp', //子应用的名称
  entry: 'http://192.168.0.102:3000', //子应用的域名
  container: '#react', //承载子应用的容器，在上面App.vue中定义
  activeRule: '/react', // 被激活的子应用的路由
}]

registerMicroApps(apps); //注册子应用
start(); //启动qiankun

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
