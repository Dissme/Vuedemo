<template lang="jade">
  .canzhanjiabin
    .biaozhi
      span 上传
      span 标志
    .search
      span 参展嘉宾
    ul.tab
      li 会议日程
      li 参展项目
      li.on 会议嘉宾
      li 现场搜索
    .desc
      ul
        -var lis = ['one','two','three']
        -for(i in lis)
          li
            .avatar
              img(src="http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg")
            .mid
              input(v-model='i.name')
              input(v-model='i.pos')
            .right
        li
          查看更多，请搜索嘉宾姓名
</template>
<style lang="less">
  .typeA .canzhanjiabin{
    height: 100%;
    overflow-y: auto;
    background: url("http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg") no-repeat 0 0;
    background-size: 100% 100%;
    position: relative;
    .biaozhi{
      position: absolute;
      top: 10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 110px;
      height: 110px;
      background: #333;
      color: #fff;
      opacity: .7;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .search{
      width: 340px;
      height: 45px;
      line-height: 45px;
      margin: 0 auto;
      position: absolute;
      top: 130px;
      left: 0;
      right: 0;
      border: 1px solid #e9e9e9;
      padding-right: 45px;
      font-size: 16px;
      color: #e9e9e9;
      text-indent: 10px;
      &:before{
        position: absolute;
        right: 0;
        top: 0;
        background: #e9e9e9;
        width: 45px;
        height: 100%;
        content: '';
      }
    }
    .tab{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: rgba(242,242,242,.7);
      height: 20px;
      line-height: 20px;
      position: absolute;
      top: 185px;
      .on{
        color: #fff;
        border-bottom: 2px solid #fff;
      }
      li{
        font-size: 14px;
      }
    }
    .desc{
      background: #e9e9e9;
      position: absolute;
      margin-top: 205px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 15px;
      ul{
        height: 100%;
        width: 100%;
        background: #f2f2f2;
        border-radius: 2px;
        overflow: hidden;
        box-sizing: border-box;
        padding: 0 15px;
        li{
          border-bottom: 1px solid #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .avatar{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid #0a910e;
            box-shadow: #0a910e;
          }
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
</style>
<script>
  export default{
    data () {

    }
  }
</script>
