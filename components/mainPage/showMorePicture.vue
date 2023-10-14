<template>
  <div class="images-content">
    <p v-if="$device.isDesktop" class="social-title rubik-family">Social Impact</p>
    <div class="content-detail">
      <socialImpactOne />
      <socialImpactTwo />
      <socialImpactThree />
    </div>
  </div>
</template>

<script>
import socialImpactOne from "./socialImpactOne.vue";
import socialImpactThree from "./socialImpactThree.vue";
import socialImpactTwo from "./socialImpactTwo.vue";

export default {
  components: { socialImpactOne, socialImpactThree, socialImpactTwo },
};
</script>

<style lang="scss" scoped>
.images-content {
  margin-top: 20px;
  @media only screen and (max-width: 640px) {
  margin-top: 100px;
      }
  .social-title {
    color: #77797a;
    font-size: 20px;
    font-weight: 500;
    line-height: 50px;
    margin-bottom: 16px;
  }

  .content-detail {
    display: flex;
  }
}
</style>
