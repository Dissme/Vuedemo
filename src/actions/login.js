import fetch from 'src/utils'
console.log(fetch)

export const types = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  HIDE_BARS: 'HIDE_BARS',
  SHOW_BARS: 'SHOW_BARS',
  USER_SIGN_UP: 'USER_SIGN_UP'
}

export default {
  userLogin ({dispatch}, name, pwd) {
    console.log(fetch)
    dispatch(types.USER_LOGIN, name, pwd)
  },
  userLogout ({dispatch}) {
    dispatch(types.USER_LOGOUT)
  },
  userSignUp ({dispatch}, username, password, email) {
    fetch({
      method: 'post',
      url: 'register',
      data: {
        username, password, email
      }
    }, dispatch, types.USER_SIGN_UP)
  },
  hideBars ({dispatch}) {
    dispatch(types.HIDE_BARS)
  },
  showBars ({dispatch}) {
    dispatch(types.SHOW_BARS)
  }
}
