import { userService } from '../services/user.service'

const state = {
  all: {}
}

const actions = {
  funcGetUserByGroup ({ commit }, group) {
    userService.getUserByGroup(group).then(
      (res) => {
        console.log(res)
        commit('getUserByGroup', res)
      },
      (error) => {
        console.log(error)
      }
    )
  }
}

const mutations = {
  getUserByGroup (state, result) {
    console.log(result)
    state.all = result
  }
}

export const users = {
  namespaced: true,
  state,
  actions,
  mutations
}
