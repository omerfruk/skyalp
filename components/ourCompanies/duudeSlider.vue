<template>
  <div class="duude-slider-content">
    <b-container>
      <ssr-carousel
        class="isDesktop"
        v-model="page"
        :slides-per-page="1"
        :peek-right="320"
      >
        <div class="slide">
          <img
            :src="imageURL + 'duude-image-new.png'"
            width="770"
            height="520"
            alt="duude-image"
          />
        </div>
        <div class="slide">
          <img
            :src="imageURL + 'duude-large-2.png'"
            width="770"
            height="520"
            alt="duude-image"
          />
        </div>
      </ssr-carousel>
      <ssr-carousel
        class="isMobile"
        v-model="page"
        :slides-per-page="1"
        :peek-right="100"
      >
        <div class="slide">
          <img
            :src="imageURL + 'duude-image-new.png'"
            style="width: 100%; object-fit: cover"
            height="433"
            alt="duude-image"
          />
        </div>
        <div class="slide">
          <img
          :src="imageURL + 'duude-large-2.png'"
          style="width: 100%; object-fit: cover"
          height="433"
            alt="duude-image"
          />
        </div>
      </ssr-carousel>
      <div class="text-part rubik-family">
        <div class="text-left">
          <p class="napolyon-text">Duude</p>
          <p class="loyality-text">{{ $t("mobilityServiceSolutions") }}</p>
          <a class="view-product" href="https://www.duude.com.tr/" target="_blank">{{ $t("viewProduct") }}
            <span class="material-symbols-outlined"> north_east </span>
          </a>
        </div>
        <div class="text-right">
          <p class="company-text">{{ $t("duudeCompanyText") }}</p>
        </div>
      </div>
<!--      <button class="slider-button" @click="page++">-->
<!--        <span class="material-symbols-outlined"> east </span>-->
<!--      </button>-->
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 0,
      imageURL: process.env.baseImgUrl
    };
  },
};
</script>

<style lang="scss">
.isMobile{
  display: none;
  @media only screen and (max-width: 1200px) {
    display: block;
  }
}
.isDesktop{
  display: block;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
}
.duude-slider-content {
  position: relative;
  img{
    border-radius: 15px;
  }
  .text-part {
    display: flex;
    justify-content: space-between;
    color: #1c1f22;
    margin: 50px 0;
    @media only screen and (max-width: 640px) {
      flex-direction: column;
    }
    .text-left {
      .napolyon-text {
        font-size: 48px;
        font-weight: 500;
        line-height: 61px;
        margin-bottom: 32px;
        @media only screen and (max-width: 640px) {
          font-size: 24px;
          line-height: 30px;
          margin: 24px 0;
        }
      }
      .loyality-text {
        font-size: 32px;
        font-weight: 450;
        line-height: 42px;
        margin-bottom: 32px;
        @media only screen and (max-width: 640px) {
          font-size: 18px;
          line-height: 26px;

        }
      }
      .view-product {
      font-size: 24px;
      font-weight: 450;
      line-height: 42px;
      color: #d73828;
      @media only screen and (max-width: 640px) {
          font-size: 18px;
          line-height: 26px;

        }
      span{
        vertical-align: middle;
       font-size: 22px;
        margin-left: 5px;
      }
    }
    }
    .text-right {
      width: 60%;
      @media only screen and (max-width: 640px) {
        width: 100%;
      }
      .company-text {
        font-size: 24px;
        font-weight: 450;
        line-height: 38px;
        text-align: left;
        @media only screen and (max-width: 640px) {
        font-size: 16px;
        line-height: 24px;
        margin-top: 45px;
      }
      }
    }
  }
  .slider-button {
    position: absolute;
    top: 300px;
    right: 300px;
    z-index: 999999;
    @media only screen and (max-width: 640px) {
      left: 75px;
      top: 80px;
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
