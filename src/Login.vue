<template lang="jade">
    div(v-bind:class='["login", sign_in ? "sign_in" : "sign_up"]')
      .login_detail
        .l1 {{sign_in ? '没有账户?' : '已有账户?'}}
        .l2
            |注册edge账户,体验全新互联网带来的便捷,
            br
            |并且为您实时保存案例。
        button.sign(v-on:click='signIn') {{sign_in ? '注册' : '登陆'}}
      .login_form
        .type {{sign_in ? 'LOGIN' : 'JOIN'}}
        .form(v-if='sign_in')
          label 用户名/邮箱
          input(name='user_name', v-model='user_name', placeholder='请输入4-16位中英文数字字母')
          input(name='user_pwd', v-model='user_pwd', class='last')
          .forget
            a(v-link='{name: "login"}') 忘记密码
        .form(v-else)
          label 用户名
          input(name='user_name', v-model='user_name', placeholder='请输入4-16位中英文数字字母')
          input(name='user_email', v-model='user_email')
          input(name='user_pwd', v-model='user_pwd')
          input(name='user_idf', v-model='user_idf')
        .buttons
          button(v-on:click='login') {{sign_in ? '登陆' : '注册'}}
          span 或者
          .icon
</template>
<style lang="less" scoped>
  @focus-color: #36b962;
  @bg-color: #313131;
  .login{
    width: 920px;
    height: 400px;
    background-color: #313131;
    box-shadow: 0 13px 67.9px 2.1px rgba(89, 89, 89, 0.57);
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
    &.sign_in{
      padding-left: 540px;
      .login_form{
        height: 442px;
        left: 30px;
        animation: right-left .3s ease .2s;
      }
    }
    &.sign_up{
      padding-right: 540px;
      .login_form{
        height: 476px;
        left: 380px;
        animation: left-right .3s ease .2s;
      }
    }
    .login_detail{
      padding: 0 30px;
      height: 100%;
      display: flex;
      flex-direction: column;
      color: #eee;
      overflow: hidden;
      .l1{
        font-size: 20px;
        margin-top: 84px;
      }
      .l2{
        font-size: 16px;
        margin-top: 50px;
        line-height: 1.5;
      }
      .sign{
        margin-top: 110px;
        width: 100px;
        height: 44px;
        color: #fff;
        font-size: 18px;
        background: @focus-color;
        border-radius: 2px;
      }
    }
    .login_form{
      position: absolute;
      padding: 40px;
      width: 510px;
      overflow: hidden;
      background: #eee;
      display: flex;
      flex-direction: column;
      top: 0;
      bottom: 0;
      margin: auto;
      transition: all .3s;
      label{
        font-size: 14px;
        line-height: 1;
        height: 14px;
        color: @bg-color;
        &.focus{
          color: @focus-color;
        }
      }
      input{
        border-bottom: 1px solid @bg-color;
        width: 100%;
        &:focus{
          border-bottom: 1px solid @focus-color;
        }
      }
      .type{
        font-size: 34px;
        color: @focus-color;
        line-height: 1;
        height: 34px;
        flex: 0 0 auto;
      }
      .form{
        flex: 1 1 auto;
        padding-top: 40px;
        input{
          margin-bottom: 32px;
          &.last{
            margin-bottom: 0;
          }
        }
        .forget{
          text-align: right;
          padding-top: 13px;
          a{
            color: #737373;
            font-size: 14px;
          }
        }
      }
      .buttons{
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        >*{
          margin-right: 20px;
        }
        button{
          width: 100px;
          height: 44px;
          line-height: 44px;
          background: #313131;
          color: #fff;
          font-size: 18px;
          box-shadow: 0 0 20px 0 rgba(89, 89, 89, 0.5);
          border-radius: 2px;
        }
        span{
          color: #747474;
          font-size: 16px;
        }
      }
    }
  }

  @keyframes left-right {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    35%{
      transform: translate3d(30px, 0, 0);
    }
    70% {
      transform: translate3d(-10px, 0, 0);
    }
  }
  @keyframes right-left {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    35%{
      transform: translate3d(-30px, 0, 0);
    }
    70% {
      transform: translate3d(10px, 0, 0);
    }
  }

</style>
<script>
import actions from 'actions/login'

export default{
  data () {
    return {
      user_name: '',
      user_pwd: '',
      user_email: '',
      user_idf: '',
      sign_in: true
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
      if (this.sign_in) {
        this.userLogin(this.user_name, this.user_pwd)
      } else {
        this.userSignup(this.user_name, this.user_email, this.user_pwd, this.user_idf)
      }
    },
    signIn () {
      this.sign_in = !this.sign_in
    }
  }
}
</script>
