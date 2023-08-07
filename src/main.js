// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import vueResource from 'vue-resource'
Vue.use(vueResource)

import vueRouter from 'vue-router'
Vue.use(vueRouter)

import HelloWorld  from './components/HelloWorld.vue'
import Users from './components/User';


const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/Users',
      component: Users
    },
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
