/**
 * Created by emerge_2 on 16/9/18.
 */
import {types} from '../actions/login'
const state = {
  nick_name: '阿西吧',
  logined: false
}
const mutations = {
  [types.USER_LOGIN] (state, ...args) {
    console.log('this is modules', state, ...args)
    state.logined = true
  },
  [types.USER_LOGOUT] (state, ...args) {
    console.log('this is modules', state, ...args)
    state.logined = false
  },
  [types.USER_SIGN_UP] (_, ...args) {
    console.log(args)
  }
}
export default {
  state,
  mutations
}
