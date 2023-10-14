<template>
  <div class="pdf-content">
    <p class="corporate-info">{{ $t('annualReports') }}</p>
    <annualReports2011/>
    <annualReports2012/>
    <annualReports2013/>
    <annualReports2014/>
    <annualReports2015/>
    <annualReports2016/>
    <annualReports2017/>
    <annualReports2018/>
    <annualReports2019/>
    <annualReports2020/>
    <annualReports2021/>
    <annualReports2021Two/>
    <annualReports2022/>
  
  </div>
</template>
<script>
import annualReports2011 from '../annualReports/annualReports2011.vue';
import annualReports2012 from '../annualReports/annualReports2012.vue';
import annualReports2013 from '../annualReports/annualReports2013.vue';
import annualReports2014 from '../annualReports/annualReports2014.vue';
import annualReports2015 from '../annualReports/annualReports2015.vue';
import annualReports2016 from '../annualReports/annualReports2016.vue';
import annualReports2017 from '../annualReports/annualReports2017.vue';
import annualReports2018 from '../annualReports/annualReports2018.vue';
import annualReports2019 from '../annualReports/annualReports2019.vue';
import annualReports2020 from '../annualReports/annualReports2020.vue';
import annualReports2021 from '../annualReports/annualReports2021.vue';
import annualReports2021Two from '../annualReports/annualReports2021Two.vue';
import annualReports2022 from '../annualReports/annualReports2022.vue';

export default {
    components:{
           annualReports2011,
           annualReports2012,
           annualReports2013,
           annualReports2014,
           annualReports2015,
           annualReports2016,
           annualReports2017,
           annualReports2018,
           annualReports2019,
           annualReports2020,
           annualReports2021,
           annualReports2021Two,
           annualReports2022},
  
};
</script>
