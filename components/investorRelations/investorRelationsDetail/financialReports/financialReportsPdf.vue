<template>
  <div class="pdf-content">
    <p class="corporate-info">{{ $t('financialReports') }}</p>
    <financialReports2011 />
    <financialReports2012 />
    <financialReports2013 />
    <financialReports2014 />
    <financialReports2015 />
    <financialReports2016/>
    <financialReports2017/>
    <financialReports2018/>
    <financialReports2019/>
    <financialReports2020/>
    <financialReports2021/>
    <financialReports2022/>
    <financialReports2023/>
  </div>
</template>
<script>
import financialReports2011 from "./financialReports2011.vue";
import financialReports2012 from "./financialReports2012.vue";
import financialReports2013 from "./financialReports2013.vue";
import financialReports2014 from "./financialReports2014.vue";
import financialReports2015 from "./financialReports2015.vue";
import financialReports2016 from "./financialReports2016.vue";
import financialReports2017 from "./financialReports2017.vue";
import financialReports2018 from "./financialReports2018.vue";
import financialReports2019 from "./financialReports2019.vue";
import financialReports2020 from "./financialReports2020.vue";
import financialReports2021 from "./financialReports2021.vue";
import financialReports2022 from "./financialReports2022.vue";
import financialReports2023 from "./financialReports2023.vue";
export default {
  components: {
    financialReports2011,
    financialReports2012,
    financialReports2013,
    financialReports2014,
    financialReports2015,
    financialReports2016,
    financialReports2017,
    financialReports2018,
    financialReports2019,
    financialReports2020,
    financialReports2021,
    financialReports2022,
    financialReports2023
  },
};
</script>
