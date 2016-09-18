/**
 * Created by emerge_2 on 16/9/18.
 */
import login from './Login'
import Hello from './components/Hello'
// todo: import failed from '' 404

export default (router) => router.map({
  '/': {
    name: 'login',
    component: login,
    auth: true
  },
  '/hello': {
    name: 'hello',
    component: Hello,
    auth: true
  }
  // '*': {
  //   component: failed,
  // }
})
