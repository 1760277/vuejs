<template>
  <div id="app">
    <h1 v-for="item in users.Repositories" :key="item.user_id">
      {{ item.user_username }}
    </h1>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
// import AxiosPlugin from 'vue-axios-cors'
// import Vue from 'vue'

// Vue.use(AxiosPlugin)

export default {
  name: 'App',

  data () {
    return {
      message: null,
      list_user_id: [],
      requestJson: {
        user_group: 'admin'
      }
    }
  },
  computed: {
    ...mapState({
      users: state => state.users.all
    })
  },
  created () {
    this.getUsers(this.requestJson)
  },
  methods: {
    ...mapActions('users', {
      getUsers: 'funcGetUserByGroup'
    })
  }
  // mounted () {

  //   userService.getUserByGroup(this.requestJson)
  //     .then(response => {
  //       this.message = response
  //       this.list_user_id = this.message.data.Repositories
  //     })
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
