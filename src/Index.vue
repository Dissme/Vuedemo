<template lang="jade">
    section.wrap
        header.header
            .w
                a.header__logo(href="/") 
                a.header__login(href="javascript:;") 登&nbsp;录
        .introduce
            p.introduce__hd 体验Edge的全新浸入式互联网服务
            p.introduce__bd No 扫一扫 No 公众号 No App
            a.introduce__taste(href="/") 免费体验Edge
    section
        .w
            ul.feture
                li 
                    span.feture__line 
                        i.iconfont.icon-meeting
                    h1.feture__tt 大型会议
                    p.feture__intro 提供快捷的会议信息搜索服务，<br>将会议的日程信息、嘉宾信息、<br>图文直播等本地信息和服务<br>集成入会议场景网络的搜索引擎中。
                    a.feture__taste.feture__taste--active(href="/")马上体验
                li 
                    span.feture__line 
                        i.iconfont.icon-office
                    h1.feture__tt 联合办公
                    p.feture__intro 提供智能的联合办公服务，<br>将智能门禁、打印服务、访客系统等<br>集成入办公空间的<br>本地场景网络首页中。
                    a.feture__taste(href="/")马上体验
                li 
                    span.feture__line 
                        i.iconfont.icon-shopping
                    h1.feture__tt 购物中心
                    p.feture__intro 提供贴心的导购和促销服务，<br>将门店位置、商品信息、活动打折等<br>信息融入用户日常使用的<br>搜索引擎和社交媒体中。
                    a.feture__taste(href="/")马上体验
    footer.footer
        .w
            p.footer__tt © 2012 - 2016 Emerge. All Rights Reserved


</template>

<style lang="less" scoped>
    @green: #33CC66;
    .wrap {
        background: url(./assets/img/bg.jpg);
        height: 100%;
        background-position: 50% 0;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
        
    .header {
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #fff;
        &__logo {
            float: left;
            width: 172px;
            height: 36px;
            background: url(./assets/img/logo-black.png);
            margin-top: (80-36)/2px;
        }
        &__login {
            width:100px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            float: right;
            color: #fff;
            background: @green;
            margin-top: (80-45)/2px;
            border-radius: 2px;
            box-shadow: 0px 0px 25px 9px rgba(0, 0, 0, 0.1);
            &:hover {
                color: #fff;
            }
            &:link {
                color: #fff;
            }
        }
    }
    .introduce {
        width: 1156px;
        height: 260px;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1156px/2;
        margin-top: -260px/2;
        padding-left: 40px;
        &__hd {
            font-size: 36px;
            line-height: 40px;
            margin-bottom: 60px;
            color: #1F1F1F;
            letter-spacing: 2px;
        }
        &__bd {
            font-size: 22px;
            line-height: 33px;
            margin-bottom: 59px;
            color: #000000;
        }
        &__taste {
            width: 160px;
            height: 45px;
            line-height: 45px;
            background: #33CC66;
            display: inline-block;
            color: #ECECEC;
            border-radius: 2px;
            text-align: center;
            box-shadow: 0px 0px 25px 9px rgba(0, 0, 0, 0.1);
            &:hover {
                color: #fff;
                background: #36b962;
            }
        }
    }
    .feture {
        margin: 50px 0;
    li {
        text-align: center;
        display: inline-block;
        background: #fff;
        padding: 50px;
    }
    li:nth-child(1){
        box-shadow: 0px 0px 30px 20px #e8e8e8;
    }
    li:nth-child(2){
        margin:0 92px;
        box-shadow: 0 0 25px 8px #e8e8e8;
    }
    li:nth-child(3){
        box-shadow: 0 0 25px 8px #e8e8e8;
    }
    &__line {
        &:after {
        transition: width 0.5s;
        content: " ";
        width: 33px;
        height: 5px;
        background: #33CC66;
        display: inline-block;
        margin: 0 15px;
        }
        &--active {
        &:after {
            width: 65px;
        }
        }
    }
    .iconfont {
        font-size: 93px;
        color: #33CC66;
        display: block;
    }
    &__tt {
        font-size: 20px;
        line-height: 33px;
        color: #444;
        margin-bottom: 23px;
    }
    &__intro {
        font-size: 14px;
        line-height: 24px;
        color: #444;
        margin-bottom: 39px;
    }
    &__taste {
        width: 101px;
        height: 37px;
        line-height: 34px;
        border: 1px solid #33CC66;
        color: #33CC66;
        display: inline-block;
        &--active {
        background: #33CC66;
        color: #fff;
        }
        &:hover {
        color: #fff;
        background: #36b962;
        }
    }
    }

.footer {
  &__tt {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 14px;
    color: #9A9A9A;
  } 
}
</style>



<script>
import actions from 'actions/login'
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  vuex: {
    actions
  },
  created () {
    this.hideBars()
  }
}
</script>