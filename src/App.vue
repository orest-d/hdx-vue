<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">HDX - Vue Demo</b-navbar-brand>

      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-nav-item>Country:</b-nav-item>
          <hdx-select v-model='country' sql='SELECT distinct(adm0_name) FROM "Global Food Prices Database (WFP) - NEW" ORDER BY 1'>
          </hdx-select>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
    <hdx-plot :sql='
      "SELECT "+ 
      "  (mp_year::real+(mp_month::real-1.0)/12.0)  Y,"+
      "  avg(mp_price)                              Price,"+
      "  cm_name                                    Commodity"+
      "  FROM \"Global Food Prices Database (WFP) - NEW\" "+
      "  WHERE adm0_name = "+ singlequoted(country) +
      "  GROUP BY cm_name, mp_year, mp_month "+
      "  ORDER BY 3,1 ASC"+
      "  LIMIT 5000"'></hdx-plot>
    </b-col>
    <b-col>
      <hdx-table
      perPage="10"
      :sql='
      "SELECT "+ 
      "  adm1_name  Place,"+
      "  mkt_name   Market,"+
      "  cm_name    Commodity,"+
      "  um_name    Unit,"+
      "  mp_year    Y,"+
      "  mp_month   M,"+
      "  mp_price   Price,"+
      "  cur_name   Cur"+
      "  FROM \"Global Food Prices Database (WFP) - NEW\" "+
      "  WHERE adm0_name = "+ singlequoted(country) +
      "  ORDER BY mp_year DESC"+
      "  LIMIT 5000"'></hdx-table>
    </b-col>

  </div>
</template>

<script>
//import HdxTable from './HdxTable.vue'
//import HdxSelect from './HdxSelect.vue'
//import HdxPlot from './HdxPlot.vue'

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      sql: 'SELECT * FROM "Global Food Prices Database (WFP) - NEW" LIMIT 1000',
      country: "???"
    }
  },
  methods: {
    singlequoted(x) {
      return "'" + x + "'";
    }
  },
  /*
  components: {
    'hdx-table': HdxTable,
    'hdx-select': HdxSelect,
    'hdx-plot': HdxPlot
  }
  */
}
</script>

<style>

</style>
