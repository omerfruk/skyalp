<template>
    <div class="pay-purchase-page">
      <img
      v-if="$device.isDesktop"
        :src="imageURL + 'pay-purchase-form.png'"
        width="700"
        height="250"
        alt="corporate"
      />
      <img
      v-if="$device.isMobile"
        :src="imageURL + 'pay-purchase-form-mobile.png'"
        width="100%"
        height="250"
        alt="corporate"
      />
      <payPurchasePdf/>
    </div>
  </template>
  <script>
import payPurchasePdf from './payPurchasePdf.vue';
  export default {
    components:{payPurchasePdf},
    data() {
      return {
        imageURL: process.env.baseImgUrl,
      };
    },
  };
  </script>