<template lang="jade">
  .canzhanjiabin
    .biaozhi
      span 上传
      span 标志
    .search
      span 参展嘉宾
    ul
      li 会议日程
    .tab
    ul
      li
</template>
<style lang="less">
  .typeA .canzhanjiabin{
    height: 100%;
    overflow-y: auto;
    background: url("http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg") no-repeat 0 0;
    background-size: 100% 100%;
    .biaozhi{
      position: absolute;
      top: 50px;
      left: 10px;
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
  }
</style>
