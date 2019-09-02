// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from "jquery"
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/js/bootstrap"
import G from "./tool/fn"
Vue.prototype.readFile = G.readFile
Vue.use(BootstrapVue)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
