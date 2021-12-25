// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// step1：引入 axios
import Axios from 'axios'

Vue.config.productionTip = false

// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
Vue.prototype.$axios = Axios

// step3：使每次请求都会带一个 /api 前缀
Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

var instance = Axios.create({
  baseURL: '',
  timeout: 5000,
  headers: {'Content-Type': 'multipart/form-data'}
})

Vue.prototype.axios = Axios
Vue.prototype.instance = instance
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$EventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
