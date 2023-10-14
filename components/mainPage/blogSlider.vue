<template>
  <div class="slider-blog-content rubik-family">
    <ssr-carousel
      v-if="$device.isDesktop"
      v-model="mainPage"
      :slides-per-page="1"
      :peek-right="200"
    >
      <div class="slide">
        <img
          :src="imageURL + 'blog-slide-new.png'"
          width="460"
          height="250"
          alt="blog-image"
        />
        <p class="napolyon-duude">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p class="company-text">
          Donec dictum vitae mauris sit amet fermentum. Ut varius, ex non
          imperdiet malesuada, tellus nunc suscipit augue, nec porta lectus
          tortor lobortis enim.
        </p>
      </div>
      <div class="slide">
        <img
          :src="imageURL + 'blog-slide-new.png'"
          width="460"
          height="250"
          alt="blog-image"
        />
        <p class="napolyon-duude">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p class="company-text">
          Donec dictum vitae mauris sit amet fermentum. Ut varius, ex non
          imperdiet malesuada, tellus nunc suscipit augue, nec porta lectus
          tortor lobortis enim.
        </p>
      </div>
    </ssr-carousel>
    <ssr-carousel
      v-if="$device.isMobile"
      v-model="mainPage"
      :slides-per-page="1"
      :peek-right="40"
    >
      <div class="slide">
        <img
          :src="imageURL + 'blog-slide.png'"
          width="295"
          height="280"
          alt="blog-image"
        />
        <p class="napolyon-duude">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p class="company-text">
          Donec dictum vitae mauris sit amet fermentum. Ut varius, ex non
          imperdiet malesuada, tellus nunc suscipit augue, nec porta lectus
          tortor lobortis enim.
        </p>
      </div>
      <div class="slide">
        <img
          :src="imageURL + 'blog-slide.png'"
          width="295"
          height="280"
          alt="blog-image"
        />
        <p class="napolyon-duude">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p class="company-text">
          Donec dictum vitae mauris sit amet fermentum. Ut varius, ex non
          imperdiet malesuada, tellus nunc suscipit augue, nec porta lectus
          tortor lobortis enim.
        </p>
      </div>
    </ssr-carousel>

    <button class="blog-slider-button" @click="mainPage++">
      <span class="material-symbols-outlined"> east </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainPage: 1,
      imageURL: process.env.baseImgUrl,
    };
  },
};
</script>

<style lang="scss">
.slider-blog-content {
  position: relative;
  width: 70%;
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
  .napolyon-duude {
    margin: 24px 0;
    font-size: 32px;
    font-weight: 500;
    line-height: 31px;
    color: #1c1f22;
    @media only screen and (max-width: 640px) {
      font-size: 20px;
      line-height: 26px;
    }
  }
  .slider-text {
    color: #494c4e;
    font-size: 18px;
    font-weight: 450;
    line-height: 28px;
    @media only screen and (max-width: 640px) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .blog-slider-button {
    position: absolute;
    top: 100px;
    right: 60px;
    z-index: 999999;
    @media only screen and (max-width: 640px) {
      top: 120px;
    }
    .material-symbols-outlined {
      color: white;
      border: 1px solid white;
      padding: 20px;
      border-radius: 5px;
      font-size: 32px;
      @media only screen and (max-width: 640px) {
        padding: 10px;
      }
    }
  }
}
</style>
