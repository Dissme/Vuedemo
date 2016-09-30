import fetch from 'src/utils'

export const types = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  HIDE_BARS: 'HIDE_BARS',
  SHOW_BARS: 'SHOW_BARS',
  USER_SIGN_UP: 'USER_SIGN_UP',
  SEND_EMAIL: 'SEND_EMAIL'
}

export default {
  userLogin ({dispatch}, account, password, red) {
    fetch({
      method: 'post',
      url: 'login',
      data: {
        account, password
      }
    }, dispatch, types.USER_LOGIN).then((res) => {
      if (res) {
        if (red) red()
        else this.$route.router.go({name: 'erji'})
      }
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
    }, dispatch, types.USER_SIGN_UP).then((res) => {
      if (res) this.userLogin(username, password)
    })
  },
  hideBars ({dispatch}) {
    dispatch(types.HIDE_BARS)
  },
  showBars ({dispatch}) {
    dispatch(types.SHOW_BARS)
  },
  sendEmail ({dispatch}, email) {
    fetch({
      method: 'post',
      url: 'find_pwd',
      data: {email}
    }, dispatch, types.SEND_EMAIL).then((res) => console.log(res))
  },
  resetPwd ({dispatch}, password, code) {
    fetch({
      method: 'post',
      url: 'reset',
      data: {password, code}
    }, dispatch, null).then((res) => {
      if (res) window.location.replace('/')
    })
  }
}
