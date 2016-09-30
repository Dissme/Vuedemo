/**
 * Created by emerge_2 on 16/9/18.
 */
import {types} from '../actions/login'
const session = window.localStorage || window.sessionStorage
const state = {
  nick_name: '阿西吧',
  logined: !!session.getItem('token'),
  hasSend: false
}
const mutations = {
  [types.USER_LOGIN] (state, {token}) {
    session.setItem('token', token)
    state.logined = true
  },
  [types.USER_LOGOUT] (state, ...args) {
    console.log('this is modules', state, ...args)
    state.logined = false
  },
  [types.USER_SIGN_UP] (_) {
    _.logined = true
  },
  [types.SEND_EMAIL] (_) {
    _.hasSend = true
  }
}
export default {
  state,
  mutations
}
