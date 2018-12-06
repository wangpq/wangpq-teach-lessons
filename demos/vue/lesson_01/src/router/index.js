import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'

import Home from '@/views/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
