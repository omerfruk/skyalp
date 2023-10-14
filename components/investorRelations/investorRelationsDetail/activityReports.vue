<template>
    <div class="activity-reports-page">
      <img
      v-if="$device.isDesktop"
        :src="imageURL + 'activity-reports.png'"
        width="700"
        height="250"
        alt="corporate"
      />
      <img
      v-if="$device.isMobile"
        :src="imageURL + 'activity-reports-mobile.png'"
        width="100%"
        height="250"
        alt="corporate"
      />
      <activityReportsPdf/>
    </div>
  </template>
  <script>
import activityReportsPdf from './activityReportsPdf.vue';
  export default {
    components:{activityReportsPdf},
    data() {
      return {
        imageURL: process.env.baseImgUrl,
      };
    },
  };
  </script>