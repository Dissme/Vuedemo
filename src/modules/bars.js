/**
 * Created by emerge_2 on 16/9/21.
 */
import {types} from 'actions/bars'
import {types as types2} from 'actions/login'
const state = {
  full_show: true,
  bars_show: true
}
const mutations = {
  [types.TOGGLE_FULL_BAR] (_) {
    _.full_show = !_.full_show
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
