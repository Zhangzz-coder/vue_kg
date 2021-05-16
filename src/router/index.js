import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    // 路由重定向
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

// 挂载路由导航守卫来控制访问权限，如果用户没有登录，但直接通过URL访问特定页面，需要重新导航到登录页面
router.beforeEach((to, from, next) => {
  // to将要访问的路径，from从哪个路径跳转而来，next是一个函数，表示放行
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
