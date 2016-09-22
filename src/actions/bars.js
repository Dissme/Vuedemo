/**
 * Created by emerge_2 on 16/9/21.
 */
export const types = {
  TOGGLE_FULL_BAR: 'TOGGLE_FULL_BAR'
}
export default {
  toggleFullBar ({dispatch}) {
    dispatch(types.TOGGLE_FULL_BAR)
  }
}
