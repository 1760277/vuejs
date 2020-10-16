import { userServices } from '../services/user.services'

const state = {
  all: {}
}

const actions = {
  funcGetUserByGroup ({ commit }, group) {
    userServices.getUserByGroup(group).then(
      (res) => {
        commit('getUserByGroup', res)
      },
      (error) => {
        console.log(error)
      })
  }
}
const mutations = {
  getUserByGroup (state, result) {
    state.all = result.data
  }
}

export const users = {
  namespaced: true,
  state,
  actions,
  mutations
}
