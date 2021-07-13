import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import permission from './modules/permission'
Vue.use(Vuex)
export default new Vuex.Store({
  getters,
  modules: {
    permission,
  }
})
