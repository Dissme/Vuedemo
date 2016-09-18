export const types = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT'
}
export default {
  userLogin ({dispatch}, name, pwd) {
    console.log('this is actions', name, pwd)
    dispatch(types.USER_LOGIN, name, pwd)
  },
  userLogout ({dispatch}) {
    dispatch(types.USER_LOGOUT)
  }
}
