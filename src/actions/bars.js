/**
 * Created by emerge_2 on 16/9/21.
 */
export const types = {
  TOGGLE_FULL_BAR: 'TOGGLE_FULL_BAR',
  GLOBAL_FETCHING: 'GLOBAL_FETCHING'
}
export default {
  toggleFullBar ({dispatch}) {
    dispatch(types.TOGGLE_FULL_BAR)
  },
  addFetch ({dispatch}) {
    dispatch(types.GLOBAL_FETCHING, true)
  },
  sliceFetch ({dispatch}) {
    dispatch(types.GLOBAL_FETCHING, false)
  }
}
