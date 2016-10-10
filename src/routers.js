/**
 * Created by emerge_2 on 16/9/18.
 */
import Login from './Login'
import Erji from './erji'
import Sanji from './sanji'
// todo: import failed from '' 404
import Index from './Index'

const failed = {
  template: '<div style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;text-align: center;height: 23px;line-height:23px;font-size: 23px">页面走失</div>'
}

export default (router) => router.map({
  '/': {
    name: 'login',
    component: Index
  },
  '/reset': {
    name: 'reset',
    component: Login
  },
  '/erji': {
    name: 'erji',
    component: Erji,
    auth: true
  },
  '/sanji/:type': {
    name: 'sanji',
    component: Sanji,
    auth: true
  },
  '*': {
    component: failed
  }
})
