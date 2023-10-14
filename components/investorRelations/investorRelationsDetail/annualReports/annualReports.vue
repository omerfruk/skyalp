<template>
    <div class="activity-reports-page">
      <img
      v-if="$device.isDesktop"
        :src="imageURL + 'annual-reports.png'"
        width="700"
        height="250"
        alt="corporate"
      />
      <img
       v-if="$device.isMobile"
        :src="imageURL + 'annual-reports-mobile.png'"
        width="100%"
        height="250"
        alt="corporate"
      />
      <annualReportsPdf/>
    </div>
  </template>
  <script>
import annualReportsPdf from '../annualReports/annualReportsPdf.vue';
  export default {
    components:{annualReportsPdf},
    data() {
      return {
        imageURL: process.env.baseImgUrl,
      };
    },
  };
  </script>