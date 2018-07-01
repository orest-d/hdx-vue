<template>
  <div id="chartid">

  </div>
</template>
<script>
import Plotly from 'plotly.js/dist/plotly'
import { DataMixin } from './mixins.js'

export default {
  name: 'hdx-plot',
  mixins: [DataMixin],
  data() {
    return {
      chartid: null
    }
  },

  methods: {
    plot() {
      this.msg = "Plot";
      var trace1 = {
        x: [1, 2, 3, 4],
        y: Array.from({ length: 4 }, () => Math.random() * 10),
        mode: 'markers',
        type: 'scatter'
      };

      Plotly.newPlot('chartid', [trace1]);
    }
  },
  mounted() {
    this.chartid = this._uid;
    this.plot();
  },
  computed: {
    traces() {
      var seq = [];
      var trace = null;
      var xfield = this.fields[0].id;
      var yfield = this.fields[1].id;
      var name_field = this.fields[2].id;
      for (var i = 0; i < this.records.length; i++) {
        var r = this.records[i];
        var x = r[xfield];
        var y = r[yfield];
        var name = r[name_field];
        if (trace === null || trace.name != name) {
          if (trace != null) {
            seq.push(trace);
          }
          trace = {
            x: [x],
            y: [y],
            mode: 'lines+markers',
            type: 'scatter',
            name: name
          }
          console.log(name);
        }
        else {
          trace.x.push(x);
          trace.y.push(y);
        }
      }
      if (trace != null) {
        seq.push(trace);
      }
      return seq;
    }
  },
  watch: {
    records() { Plotly.newPlot('chartid', this.traces); }
  }

}
</script>
<style>

</style>