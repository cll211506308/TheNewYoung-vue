import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    data1: sessionStorage.getItem('userId'),
    picurl:"http://127.0.0.1:3000/"
  }
})

