<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">HDX - Vue Demo</b-navbar-brand>

      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-nav-item>Country:</b-nav-item>
          <hdx-select v-model='country'
            sql='SELECT distinct(adm0_name) FROM "Global Food Prices Database (WFP) - NEW" ORDER BY 1'>
          </hdx-select>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
    <hdx-table :sql='"SELECT * FROM \"Global Food Prices Database (WFP) - NEW\" "+
    "WHERE adm0_name = "+ singlequoted(country) +" LIMIT 1000"'></hdx-table>
  </div>
</template>

<script>
import HdxTable from './HdxTable.vue'
import HdxSelect from './HdxSelect.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sql: 'SELECT * FROM "Global Food Prices Database (WFP) - NEW" LIMIT 1000',
      country: "???"
    }
  },
  methods:{
    singlequoted(x){
      return "'"+x+"'";
    }
  },
  components:{
    'hdx-table':HdxTable,
    'hdx-select':HdxSelect
  }
}
</script>

<style>
</style>
