<template lang="jade">
  .sanji
    .h5(:class='[comp_name[idx], type()]')
      component(:is='comp_name[idx]', keep-alive, transition="page", transition-mode="out-in")
    .idx {{idx}}/{{all}}
    .pages
      .scroll(@mousedown='mouse',@mouseup='mouse',@mousewheel='mouse',@mousemove='mouse',@mouseover='mouse',:style='{top: (idx-1) * 70 +"px"}')
        .block
        span {{idx}}/{{all}}
</template>
<style lang="less" scoped>
  .sanji{
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .h5{
      overflow: hidden;
      flex: 0 0 auto;
      width: 375px;
      height: 667px;
      padding-top: 40px;
      position: relative;
      background: #fff;
    }
    .idx{
      margin-top: 56px;
      color: #828282;
      font-size: 20px;
      height: 20px;
      line-height: 20px;
    }
    .pages{
      position: absolute;
      right: 50px;
      top: 95px;
      bottom: 95px;
      margin: auto;
      width: 94px;
      &:before{
        width: 1px;
        height: 100%;
        background: #2f2f2f;
        z-index: 1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
      .scroll{
        position: absolute;
        overflow: hidden;
        background: #e2e2e2;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        z-index: 2;
        width: 100%;
        transition: all .3s ease;
        &.mdown{
          transform: scale(.8,.8);
        }
        .block{
          background: #2f2f2f;
          flex: 1 1 auto;
          height: 167px;
        }
        >span{
          .idx();
          margin-top: 10px;
          flex: 0 0 auto;
          text-align: center;
        }
      }
    }
  }
</style>
<script>
import sanjishouye from 'components/sanjishouye'
import sanjijiabin from 'components/sanjijiabin'

let mouseEvents = {
  mousedown (e, t) {
    if (!/mdown/.test(e.currentTarget.className)) {
      e.currentTarget.className += ' mdown'
      t.mouseY = e.y
    }
  },
  mousemove (e, t) {
    if (/mdown/.test(e.currentTarget.className)) {
      t.mouseY_end = e.y
      let len = t.mouseY_end - t.mouseY
      return ~~(e.currentTarget.offsetHeight / t.all / len)
    }
  },
  mouseup (e) {
    if (/mdown/.test(e.currentTarget.className)) {
      e.currentTarget.className = e.currentTarget.className.replace('mdown', '')
    }
  },
  mousewheel (e) {
    if (/mdown/.test(e.currentTarget.className)) {
      e.currentTarget.className = e.currentTarget.className.replace('mdown', '')
    }
    return e.wheelDelta > 0 ? -1 : 1
  },
  mouseover (e) {
    if (/mdown/.test(e.currentTarget.className)) {
      e.currentTarget.className = e.currentTarget.className.replace('mdown', '')
    }
  }
}
export default {
  data () {
    return {
      comp_name: ['', 'sanjishouye', 'sanjijiabin'],
      idx: 1,
      all: 2,
      mouseY: 0,
      mouseY_end: 0
    }
  },
  methods: {
    type () {
      return this.$route.params.type
    },
    mouse (e) {
      let sc = mouseEvents[e.type](e, this)
      if (sc) this.scroll(sc)
    },
    scroll (x) {
      let re = this.idx + x
      if (re >= this.all) re = this.all
      if (re <= 0) re = 1
      this.idx = re
    }
  },
  components: {
    sanjishouye, sanjijiabin
  }
}
</script>
