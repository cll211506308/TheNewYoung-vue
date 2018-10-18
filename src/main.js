// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router/index'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

//引入
import Axios from 'axios';
Axios.defaults.baseURL = 'http://127.0.0.1:3000';
//给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  $,
  router,
  components: { App },
  template: '<App/>'
})
