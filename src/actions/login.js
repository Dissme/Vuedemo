import fetch from 'src/utils'

export const types = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  HIDE_BARS: 'HIDE_BARS',
  SHOW_BARS: 'SHOW_BARS',
  USER_SIGN_UP: 'USER_SIGN_UP'
}

export default {
  userLogin ({dispatch}, account, password, red) {
    fetch({
      method: 'post',
      url: 'login',
      data: {
        account, password
      }
    }, dispatch, types.USER_LOGIN).then(() => {
      if (red) red()
      else this.$route.router.go({name: 'erji'})
    })
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
    }, dispatch, types.USER_SIGN_UP).then(() => {
      this.userLogin({dispatch}, username, password)
    })
  },
  hideBars ({dispatch}) {
    dispatch(types.HIDE_BARS)
  },
  showBars ({dispatch}) {
    dispatch(types.SHOW_BARS)
  },
  test2 ({dispatch}) {
    fetch({
      method: 'get',
      url: 'test2'
    }, dispatch, 'null').then((res) => console.log(res))
  }
}
