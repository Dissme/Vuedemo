import Vue from 'vue'
import Vuex from 'vuex'

// 导入各个模块的初始状态和 mutations
import login from 'modules/login'
import bars from 'modules/bars'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // 组合各个模块
  modules: {
    login,
    bars
  },
  strict: debug
})
