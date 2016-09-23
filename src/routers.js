/**
 * Created by emerge_2 on 16/9/18.
 */
import Login from './Login'
import Erji from './erji'
import Sanji from './sanji'
// todo: import failed from '' 404

export default (router) => router.map({
  '/': {
    name: 'login',
    component: Login,
    auth: true
  },
  '/erji': {
    name: 'erji',
    component: Erji
  },
  '/sanji/:type': {
    name: 'sanji',
    component: Sanji
  }
  // '*': {
  //   component: failed,
  // }
})
