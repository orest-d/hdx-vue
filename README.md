# hdx-vue

# Vue visualization components for Humanitartan Data Exchange

This project should provide vue components that would make it easier to
build HDX data visualizations by fetching data via CKAN web-api.

Demo: https://orest-d.github.io/hdx-vue/

## Introduction

The main idea of this project is to create a set of easy to use html tags (vue components)
that could connect to HDX data sources and make it easy to build visualizations and custom dashboards.
Many people are quite comfortable with SQL and HTML - and with this kind of library that would be all you need.

The project is in early stage, but there already are three tags:

**hdx-table** - shows result of a query as a a table.

```
<hdx-table perPage="10"
   sql='SELECT * FROM "Global Food Prices Database (WFP) - NEW" LIMIT 100'>
</hdx-table>
```

**hdx-select** - creates a selector out of a query. (Used to make a country selector.)

```
<hdx-select sql='SELECT distinct(adm0_name) FROM "Global Food Prices Database (WFP) - NEW" ORDER BY 1'>
</hdx-select>
```

**hdx-plot** - visualize data as a chart. Requires a query that returns 

```
<hdx-plot sql='SELECT 
               (mp_year::real+(mp_month::real-1.0)/12.0)  Y,
               avg(mp_price)                              Price,
               cm_name                                    Commodity
               FROM \"Global Food Prices Database (WFP) - NEW\"
               WHERE adm0_name = 'Yemen'
               GROUP BY cm_name, mp_year, mp_month
               ORDER BY 3,1 ASC
               LIMIT 5000'></hdx-plot>
```

(OK, the quotes don't quite work here, but you get the idea...)
For a complete working example see src/App.vue.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
