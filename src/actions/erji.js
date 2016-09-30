/**
 * Created by emerge_2 on 16/9/30.
 */
import fetch from 'src/utils'

export const types = {
  GET_COMP_LIST: 'GET_COMP_LIST',
  HANDLE_C1: 'HANDLE_C1',
  HANDLE_C2: 'HANDLE_C2',
  HANDLE_C3: 'HANDLE_C3',
  RESET_CS: 'RESET_CS'
}

export default {
  getList ({dispatch}) {
    fetch({
      method: 'get',
      url: 'find_pwd'
    }, dispatch, types.GET_COMP_LIST)
  },
  handleList1 ({dispatch}, idx) {
    dispatch(types.HANDLE_C1, idx)
  },
  handleList2 ({dispatch}, idx) {
    dispatch(types.HANDLE_C2, idx)
  },
  handleList3 ({dispatch}, idx) {
    dispatch(types.HANDLE_C3, idx)
  }
}
