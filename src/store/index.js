import Vue from 'vue'
import Vuex from 'vuex'

import country from './modules/country'
import province from './modules/province'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    country,
    province
  }
})

export default store
