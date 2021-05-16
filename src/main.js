import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
import axios from 'axios'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 通过axios的请求拦截器添加token，保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
