import Vue from 'vue'
import Router from 'vue-router'
import TestAPI from '@/component/TestAPI'

Vue.use(Router)

export default new Router({
  router: [
    {
      path: '/test',
      name: 'TestAPI',
      component: TestAPI
    }
  ]
})
