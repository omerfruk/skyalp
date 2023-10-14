<template>
    <div class="activity-reports-page">
      <img
      v-if="$device.isDesktop"
        :src="imageURL + 'disclosure-to-bist.png'"
        width="700"
        height="250"
        alt="corporate"
      />
      <img
      v-if="$device.isMobile"
        :src="imageURL + 'disclosure-to-bist-mobile.png'"
        width="100%"
        height="250"
        alt="corporate"
      />
      <disclosureToBistPdf/>
    </div>
  </template>
  <script>
import disclosureToBistPdf from './disclosureToBistPdf.vue';
  export default {
    components:{disclosureToBistPdf},
    data() {
      return {
        imageURL: process.env.baseImgUrl,
      };
    },
  };
  </script>