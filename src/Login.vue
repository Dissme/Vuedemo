<template lang="jade">
    Topbar
      button(v-on:click='modal') 登陆
    div(v-bind:class='["login", sign_in ? "sign_in" : "sign_up"]', v-show='show_modal', transition="modal", transition-mode="out-in")
      .login_detail
        .l1 {{sign_in ? '没有账户?' : '已有账户?'}}
        .l2
            |注册edge账户,体验全新互联网带来的便捷,
            br
            |并且为您实时保存案例。
        button.sign(v-on:click='signIn') {{sign_in ? '注册' : '登陆'}}
      .login_form
        .type {{form_temp}}
        .form
          template(v-if='form_temp=="LOGIN"')
            .input(v-on:click='input("user_name",$event)')
              label 用户名/邮箱
              input(v-on:blur='blur', v-el='user_name', v-model='user_name', placeholder='请输入4-16位中英文数字字母')
            .input(v-on:click='input("user_pwd",$event)')
              label 密码
              input(v-on:blur='blur', v-el='user_pwd', v-model='user_pwd')
            .forget
              span(v-on:click='forget') 忘记密码
          template(v-if='form_temp=="JOIN"')
            .input(v-on:click='input("user_name",$event)')
              label 用户名
              input(v-on:blur='blur', v-el='user_name', v-model='user_name', placeholder='请输入4-16位中英文数字字母')
            .input(v-on:click='input("user_email",$event)')
              label 邮箱
              input(v-on:blur='blur', v-el='user_email', v-model='user_email')
            .input(v-on:click='input("user_pwd",$event)')
              label 密码
              input(v-on:blur='blur', v-el='user_pwd', v-model='user_pwd')
            .input(v-on:click='input("user_idf",$event)')
              label 验证码
              input(v-on:blur='blur', v-el='user_idf', v-model='user_idf')
          template(v-if='form_temp=="FORGET PASSWORD"')
            .des 我们将发送一封重置密码的链接到您的邮箱
            .input(v-on:click='input("user_email",$event)')
              label 邮箱
              input(v-on:blur='blur', v-el='user_email', v-model='user_email')
        .buttons
          template(v-if='form_temp == "FORGET PASSWORD"')
            button(v-on:click='reset') 重置密码
            span.back(v-on:click='back') 想起来了
          template(v-else)
            button(v-on:click='login') {{sign_in ? '登陆' : '注册'}}
            span 或者
            .icon
</template>
<style lang="less" scoped>
  @focus-color: #36b962;
  @bg-color: #313131;
  .top_bar{
    background: transparent;
    width: 1000px;
    left: 0;
    right: 0;
    margin: 0 auto;
    box-shadow: none;
    button{
      font-size: 16px;
      color: #fff;
      width: 97px;
      height: 44px;
      margin: auto;
      box-shadow: 0 4px 20px 0 rgba(79, 79, 79, 0.5);
      background: #3c6;
    }
  }
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
      .type{
        font-size: 34px;
        color: @focus-color;
        line-height: 1;
        height: 34px;
        flex: 0 0 auto;
      }
      .form{
        flex: 1 1 auto;
        .des{
          margin-top: 21px;
          line-height: 14px;
          height: 14px;
          color: #2d2d2d;
        }
        .input{
          border-bottom: 1px solid @bg-color;
          width: 100%;
          transition: all .3s ease;
          position: relative;
          padding-top: 32px;
          overflow: hidden;
          >label{
            position: absolute;
            left: 0;
            bottom: 1px;
            line-height: 32px;
            font-size: 16px;
            height: 32px;
            width: 100%;
            background: #eee;
            transition: all .3s ease;
          }
          >input{
            width: 100%;
          }
          &.hasVal>label{
            font-size: 14px;
            bottom: 37px;
            line-height: 14px;
            height: 14px;
          }
          &.focus{
            border-bottom: 1px solid @focus-color;
            >label{
              color: @focus-color;
            }
          }
        }
        .forget{
          text-align: right;
          padding-top: 13px;
          span{
            color: #737373;
            font-size: 14px;
            cursor: pointer;
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
        .back{
          font-size: 14px;
          color: #36b962;
          cursor: pointer;
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
import Topbar from 'components/Topbar'
export default{
  data () {
    return {
      user_name: '',
      user_pwd: '',
      user_email: '',
      user_idf: '',
      sign_in: true,
      form_temp: 'LOGIN',
      input_name: '',
      show_modal: false
    }
  },
  components: {
    Topbar
  },
  vuex: {
    actions,
    getters: {
      logined (state) {
        return state.login.logined
      }
    }
  },
  created () {
    this.hideBars()
  },
  destroyed () {
    this.showBars()
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
      this.form_temp = this.sign_in ? 'JOIN' : 'LOGIN'
      this.sign_in = !this.sign_in
    },
    forget () {
      this.form_temp = 'FORGET PASSWORD'
    },
    back () {
      this.form_temp = 'LOGIN'
    },
    input (name, {currentTarget}) {
      this.input_name = name
      currentTarget.className = 'input hasVal focus'
      currentTarget.getElementsByTagName('input')[0].focus()
    },
    blur ({currentTarget}) {
      let cls = 'input'
      if (currentTarget.value.length) cls += ' hasVal'
      currentTarget.parentNode.className = cls
    },
    modal () {
      this.show_modal = true
    }
  }
}
</script>
