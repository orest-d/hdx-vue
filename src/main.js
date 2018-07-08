import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import HdxTable from './HdxTable.vue'
import HdxSelect from './HdxSelect.vue'
import HdxPlot from './HdxPlot.vue'

Vue.component('hdx-table',HdxTable);
Vue.component('hdx-select',HdxSelect);
Vue.component('hdx-plot',HdxPlot);

Vue.use(VueResource);
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
