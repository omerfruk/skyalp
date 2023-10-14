<template>
    <div class="activity-reports-page">
      <img
      v-if="$device.isDesktop"
        :src="imageURL + 'financial-reports.png'"
        width="700"
        height="250"
        alt="corporate"
      />
      <img
      v-if="$device.isMobile"
        :src="imageURL + 'financial-reports-mobile.png'"
        width="100%"
        height="250"
        alt="corporate"
      />
      <financialReportsPdf/>
    </div>
  </template>
  <script>
import financialReportsPdf from '../financialReports/financialReportsPdf.vue';
  export default {
    components:{financialReportsPdf},
    data() {
      return {
        imageURL: process.env.baseImgUrl,
      };
    },
  };
  </script>