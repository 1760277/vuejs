import Vuex from 'vuex'
import Vue from 'vue'
// import AxiosPlugin from 'vue-axios-cors'

import { users } from './users.module'
// import Axios from 'axios'

Vue.use(Vuex)
// Vue.use(AxiosPlugin)

export const store = new Vuex.Store({
  modules: {
    users
  }
})
