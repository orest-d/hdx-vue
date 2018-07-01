<template>
<div>   
    <b-badge :v-if="status.length" variant="secondary">{{status}}</b-badge>
    <b-form-select :value="value" @input="$emit('input', $event)" :options="options"/>
</div>
</template>
<script>
import {DataMixin} from './mixins.js'

export default {
  name: 'hdx-select',
  mixins:[DataMixin],
  props:["value"],
  /*
  data(){
    return{
      value:null;
    }
  }*/

  computed:{
    options(){
      try{        
        return Array.from(
          this.data.result.records,
          row => {
              return {value:row[this.fields[0].id], text:row[this.fields[0].id]};
          }
        );
      }
      catch(err){
        return [];
      }

    }
  }
}
</script>
<style>
    
</style>