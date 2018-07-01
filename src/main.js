import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueResource);
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
