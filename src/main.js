import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routers'

Vue.use(VueRouter)
const router = new VueRouter()
configRouter(router)
router.beforeEach((transition) => {
  document.body.scrollTop = 0
  const token = true // todo:暂无
  if (token) {
    //  todo: 验证token
  }
  if (transition.to.auth) {
    if (token) {
      console.log(transition)
      transition.next()
    } else {
      const redirect = encodeURIComponent(transition.to.path)
      transition.redirect({ name: 'login', query: { redirect } })
    }
  } else {
    transition.next()
  }
})
router.start(Vue.extend(App), '#app')

