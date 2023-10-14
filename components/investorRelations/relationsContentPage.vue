<template>
  <div class="relations-content-page">
    <b-container>
      <investorSideMenuDesktop v-if="$device.isDesktop" />
      <investorMenuMobile v-if="$device.isMobile" />
    </b-container>
  </div>
</template>
<script>
import investorMenuMobile from "./investorMenuMobile.vue";
import investorSideMenuDesktop from "./investorSideMenuDesktop.vue";
export default {
  components: { investorSideMenuDesktop, investorMenuMobile },
};
</script>
<style lang="scss" scoped>
.relations-content-page {
  padding: 100px 0;
}
</style>
