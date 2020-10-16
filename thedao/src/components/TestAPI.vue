<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>

import Axios from 'axios'

export default {
  name: 'TestAPI',

  data () {
    return {
      message: null
    }
  },

  mounted () {
    Axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.message = response))
  }
}
</script>
