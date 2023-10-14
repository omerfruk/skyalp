<template>
    <div class="pdf-content">
      <p class="corporate-info">{{ $t('activityReports') }}</p>
      <div class="pdf-content-detail">
        <activityReports2012/>
        <activityReports2013/>
        <activityReports2014/>
        <activityReports2015/>
        <activityReports2016/>
        <activityReports2017/>
        <activityReports2018/>
        <activityReports2019/>
        <activityReports2020/>
        <activityReports2021/>
        <activityReports2022/>
        <annualReports2023/>
      </div>
    </div>
  </template>
  <script>
  import activityReports2012 from './activityReports/activityReports2012.vue';
  import activityReports2013 from './activityReports/activityReports2013.vue';
  import activityReports2014 from './activityReports/activityReports2014.vue';
  import activityReports2015 from './activityReports/activityReports2015.vue';
  import activityReports2016 from './activityReports/activityReports2016.vue';
  import activityReports2017 from './activityReports/activityReports2017.vue';
  import activityReports2018 from './activityReports/activityReports2018.vue';
  import activityReports2019 from './activityReports/activityReports2019.vue';
  import activityReports2020 from './activityReports/activityReports2020.vue';
  import activityReports2021 from './activityReports/activityReports2021.vue';
  import activityReports2022 from './activityReports/activityReports2022.vue';
  import annualReports2023 from './annualReports/annualReports2023.vue';
  export default {
    components:{
      annualReports2023,
      activityReports2012,
      activityReports2013,
      activityReports2014,
      activityReports2015,
      activityReports2016,
      activityReports2017,
      activityReports2018,
      activityReports2019,
      activityReports2020,
      activityReports2021,
      activityReports2022},
    data() {
      return {
        imageURL: process.env.baseImgUrl,
        isCollapsed: false,
      };
    },
    methods: {
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      }
    
    },
  };
  </script>