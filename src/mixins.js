export const DataMixin = {
  data () {
    return {
        status: 'Empty',
        status_ext:"Loading not initiated",
        data:{},        
    }
  },
  props:{
    server:{
      type:String,
      default:'https://test-data.humdata.org'
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
      this.status_ext=this.url1,
      console.log(this.url1);
      
      this.$http.get(this.url1).then(
        response => {
          response.json().then(
            data => {
              this.data=data;
              if (this.data.success){
                this.status="";
                this.status_ext="";
              }
              else{
                this.status="Failure";
                try{
                  this.status_ext=this.data.error.info.orig.join();
                }
                catch(err){
                  this.status_ext=err;
                }               
              }              
            },
            data => {
              this.data=data;
              this.status = 'JSON Error';
              this.status_ext="";}
          );
        },
        response => {
          console.log("ERROR:");
          console.log(response.url);
          this.status = 'Error';
          this.status_ext='It could be an error in query:\n'+response.url;
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