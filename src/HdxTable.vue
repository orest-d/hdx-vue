<template>
  <div>
    <b-badge :v-if="status.length" variant="secondary" v-b-tooltip.hover :title="status_ext">{{status}}</b-badge>
    <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />
    <b-table :per-page="perPage" :current-page="currentPage" :items="records" :fields="headers" striped small hover></b-table>
  </div>
</template>
<script>
import { DataMixin } from './mixins.js'

export default {
  name: 'hdx-table',
  mixins: [DataMixin],
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    },
  }
}
</script>
<style>

</style>