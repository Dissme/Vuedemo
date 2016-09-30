import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routers'

Vue.use(VueRouter)
const router = new VueRouter()
configRouter(router)
const session = window.localStorage || window.sessionStorage
router.beforeEach((transition) => {
  document.body.scrollTop = 0
  let token = session.getItem('token') // todo:暂无
  token = true
  if (token) {
    //  todo: 验证token
  }
  if (transition.to.auth) {
    if (token) {
      transition.next()
    } else {
      const redirect = encodeURIComponent(transition.to.path)
      transition.redirect({name: 'login', query: {redirect}})
    }
  } else {
    transition.next()
  }
})
router.start(Vue.extend(App), '#app')

