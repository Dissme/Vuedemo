export const types = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  HIDE_BARS: 'HIDE_BARS',
  SHOW_BARS: 'SHOW_BARS'
}
export default {
  userLogin ({dispatch}, name, pwd) {
    console.log('this is actions', name, pwd)
    dispatch(types.USER_LOGIN, name, pwd)
  },
  userLogout ({dispatch}) {
    dispatch(types.USER_LOGOUT)
  },
  hideBars ({dispatch}) {
    dispatch(types.HIDE_BARS)
  },
  showBars ({dispatch}) {
    dispatch(types.SHOW_BARS)
  }
}
