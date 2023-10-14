<template>
  <div
    class="background-component rubik-family"
  >
    <b-container>
      <div class="background-text">
        <p class="bold-text">{{ $t("backgroundBoldText") }}</p>
        <p class="light-text">{{ $t("backgroundLightText") }}</p>
      </div>
    </b-container>

    <!-- <img v-if="$device.isMobile" width="100%" src="../../static/svg/hero-mobile.svg" alt="hero"> -->
    <div class="icon-content">
      <button @click="scrollToBottom()">
        <span  class="material-symbols-outlined"> south </span>
      </button>
      
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    scrollToBottom(){
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
};
</script>
<style lang="scss">
.background-component {
  background-image: url("https://cdn.napolyon.com/skyalp/images/hero.png");
  background-size: cover;
  width: auto;
  height: 100vh;
  padding-top: 100px;
  position: relative;
  z-index: 999;
  @media only screen and (max-width: 640px) {
    background-image: url("https://cdn.napolyon.com/skyalp/images/hero-mobile.png");
    background-size: cover;
    width: auto;
  }
  color: white;
  .background-text {
    width: 60%;
    margin-top: 80px;
    @media only screen and (max-width: 640px) {
      width: 90%;
      margin-top: 70px;
    }
    .bold-text {
      font-size: 72px;
      font-weight: 500;
      line-height: 74px;
      margin-bottom: 48px;
      @media only screen and (max-width: 640px) {
        line-height: 40px;
        font-size: 36px;
      }
    }
    .light-text {
      font-size: 24px;
      font-weight: 450;
      line-height: 34px;
      @media only screen and (max-width: 640px) {
        line-height: 22px;
        font-size: 16px;
      }
    }
  }
  .icon-content{
    position: absolute;
    bottom: 21px;
    right: 80px;
    z-index: 999;
    @media only screen and (max-width: 640px) {
        right: 35%;
      }
    span{
      color: white;
      font-size: 32px;
      border: 1px solid white;
      border-radius: 100px;
      padding: 27px 21px;
    }
  }
}
</style>
