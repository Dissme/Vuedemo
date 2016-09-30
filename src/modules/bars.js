/**
 * Created by emerge_2 on 16/9/21.
 */
import {types} from 'actions/bars'
import {types as types2} from 'actions/login'
const state = {
  full_show: true,
  bars_show: true,
  fetching: 0
}
const mutations = {
  [types.TOGGLE_FULL_BAR] (_) {
    _.full_show = !_.full_show
  },
  [types.GLOBAL_FETCHING] (_, add) {
    let result = _.fetching + add
    _.fetching = result < 0 ? 0 : result
    !add && window.alert('请求错误')
  },
  [types2.HIDE_BARS] (_) {
    _.bars_show = false
  },
  [types2.SHOW_BARS] (_) {
    _.bars_show = true
  }
}
export default {
  state,
  mutations
}
