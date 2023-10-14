<template>
  <div class="corporate-overview-page">
    <img
    v-if="$device.isDesktop"
      :src="imageURL + 'investor-corp.png'"
      width="700"
      height="250"
      alt="corporate"
    />
    <img
    v-if="$device.isMobile"
      :src="imageURL + 'corporate-overview-mobile.png'"
      width="100%"
      height="250"
      alt="corporate"
    />
    <pdfContentCorporate/>
    <pdfCorporateManagement/>
    <pdfMainContract/>
    <izahname/>
    <publicOffering/>
  </div>
</template>
<script>
import pdfContentCorporate from './pdfContentCorporate.vue';
import pdfCorporateManagement from './pdfCorporateManagement.vue';
import pdfMainContract from './pdfMainContract.vue';
import izahname from './izahname.vue';
import publicOffering from './publicOffering.vue';
export default {
  components:{pdfContentCorporate,pdfCorporateManagement,pdfMainContract,izahname,publicOffering},
  data() {
    return {
      imageURL: process.env.baseImgUrl,
    };
  },
};
</script>

