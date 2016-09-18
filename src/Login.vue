<template lang="jade">
    .login
      input(name='user_name', v-model='user_name')
      input(name='user_pwd', v-model='user_pwd')
      button(v-on:click='login') {{logined ? '登出' : '登入'}}
</template>
<script>
import actions from 'actions/login'

export default{
  data () {
    return {
      user_name: '',
      user_pwd: ''
    }
  },
  vuex: {
    actions,
    getters: {
      logined (state) {
        return state.login.logined
      }
    }
  },
  methods: {
    checkAuth () {
      const red = this.$route.query.redirect
      this.$route.router.go(red)
    },
    login () {
      !this.logined ? this.userLogin(this.user_name, this.user_pwd) : this.userLogout()
    }
  }
}
</script>
