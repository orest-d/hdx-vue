export const DataMixin = {
  data () {
    return {
        status: 'Empty',
        data:{},
    }
  },
  props:{
    server:{
      type:String,
      default:'http://test-data.humdata.org'
    },
    queryapi:{
      type:String,
      default:'/api/action/datastore_search_sql?sql='
    },
    currentPage:{
      type:Number,
      default:1
    },
    perPage:{
      type:Number,
      default:10
    },
    sql:{
      type:String,
      required:true
    }
  },
  computed:{
    headers(){
      try{
        return Array.from(
          this.data.result.fields,
          field => {return {key:field.id, sortable:true};}
        ).filter(x => x.key!='_full_text');
      }
      catch(err){
        return [];
      }

    },
    url1 (){
      return this.server+this.queryapi+encodeURIComponent(this.sql);
    },
    fields (){
      try{
        return this.data.result.fields;
      }
      catch(err){
        return [];
      }
    },
    records (){
      try{
        return this.data.result.records;
      }
      catch(err){
        return [];
      }
    },
    totalRows(){
      try{
        return this.records.length;
      }
      catch(err){
        return 0;
      }
        
    } 
  },
  methods:{
    load (){
      this.status="Loading";
      console.log(this.url1);
      
      this.$http.get(this.url1).then(
        response => {
          response.json().then(data => {this.data=data;},data => {this.data={};});
          this.status = '';
        }, response => {
          this.data   = {};
          this.status = 'Error';
        }
      );
    }
  },  
  mounted: function(){
      this.load();
  },
  watch:{
      url1(){ this.load();}
  }
};