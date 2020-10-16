<template>
  <div id="app">
    <h1 v-for="item in list_user" :key="item.user_group">
      {{ item.user_name }}
    </h1>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',

  data () {
    return {
      list_user: [],
      requestJson: {
        user_group: 'Tester'
      }
    }
  },

  computed: {
    ...mapState({
      users: state => state.users.all
    })
  },

  created () {
    this.getUser(JSON.stringify(this.requestJson))
  },

  methods: {
    ...mapActions('users', {
      getUser: 'funcGetUserByGroup'
    })
  }
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
