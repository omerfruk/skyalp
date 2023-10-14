<template>
  <div
    class="slider-content rubik-family"
  >
  <ssr-carousel v-if="$device.isDesktop" v-model="mainPage" :slides-per-page="1" :peek-right="300">
        <div class="slide">
          <img
            :src="imageURL + 'napolyon-image.png'"
            width="460"
            height="520"
            alt="build-image"
          />
          <p class="napolyon-duude">Napolyon</p>
          <p class="company-text">{{ $t("napolyonCompanyText") }}</p>

        </div>
        <div class="slide">
          <img
            :src="imageURL + 'duude-large-new-2.png'"
            width="460"
            height="520"
            alt="build-image"
          />
          <p class="napolyon-duude">Duude</p>
          <p class="company-text">{{ $t("duudeCompanyText") }}</p>

        </div>
      </ssr-carousel>
      <ssr-carousel v-if="$device.isMobile"  v-model="mainPage" :slides-per-page="1" :peek-right="40">
        <div class="slide">
          <img
            :src="imageURL + 'napolyon-image.png'"
            width="295"
            height="333"
            alt="build-image"
          />
          <p class="napolyon-duude">Napolyon</p>
          <p class="company-text">{{ $t("napolyonCompanyText") }}</p>

        </div>
        <div class="slide">
          <img
            :src="imageURL + 'duude-large-new-2.png'"
            width="295"
            height="333"
            alt="build-image"
          />
          <p class="napolyon-duude">Duude</p>
          <p class="company-text">{{ $t("duudeCompanyText") }}</p>

        </div>
      </ssr-carousel>
      <button class="slider-button" @click="mainPage++">
        <span  class="material-symbols-outlined"> east </span>
      </button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mainPage:0,
      imageURL: process.env.baseImgUrl,
    }
  },
};
</script>

<style lang="scss">
.slider-content {
  position: relative;
  width: 70%;
  @media only screen and (max-width: 640px) {
          width: 100%;
        }
        img{
          border-radius: 15px;
        }
    .napolyon-duude {
      margin: 24px 0;
      font-size: 32px;
      font-weight: 500;
      line-height: 31px;
      color: #1c1f22;
    }
    .slider-text {
      color: #494c4e;
      font-size: 18px;
      font-weight: 450;
      line-height: 28px;
    }
  
    .slider-button {
    position: absolute;
    top: 260px;
    right: 70px;
    z-index: 999999;
    @media only screen and (max-width: 640px) {
         top: 140px;
        }
    .material-symbols-outlined {
      color: white;
      border: 1px solid white;
      padding: 20px;
      border-radius: 100px;
      font-size: 32px;
    }
  }
}
</style>
