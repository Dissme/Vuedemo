/**
 * Created by emerge_2 on 16/9/21.
 */
import {types} from '../actions/bars'
const state = {
  full_show: true
}
const mutations = {
  [types.TOGGLE_FULL_BAR] (state) {
    state.full_show = !state.full_show
  }
}
export default {
  state,
  mutations
}
