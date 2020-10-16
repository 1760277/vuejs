import Vuex from 'vuex'
import Vue from 'vue'

import { users } from './user.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    users
  }
})
