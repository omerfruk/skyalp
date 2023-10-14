<template>
  <div class="who-we-are-content">
    <div class="with-background">
      <p class="rubik-family title-red-content">{{ $t("whoWeAre") }}</p>
      <hr class="horizontal-line" />
    </div>
    <div class="explanation-content">
      <div class="content-detail">
      <p class="pioneer-text">{{ $t("skyalpIsStartup") }}</p>
      </div>
      <div class="content-detail rubik-family">
        <p class="detail-one">{{ $t("whileSomeCompanies") }}</p>
        <p class="detail-one">{{ $t("whileActions") }}</p>
        
      </div>
    </div>
    <img
      class="img-sphere"
      :src="imageURL + 'sphere.svg'"
      width="720"
      height="720"
      alt="sphere"
    />
  </div>
</template>
<script>
export default {
  data(){
    return{
      imageURL: process.env.baseImgUrl
    }
  },
};
</script>


<style lang="scss" scoped>
.who-we-are-content {
  padding: 80px;
  background: linear-gradient(180deg, #f8f4e9 0%, rgba(248, 244, 233, 0) 100%);
  position: relative;
  @media only screen and (max-width: 640px) {
    padding: 50px 20px;
  }
  .with-background {
    .horizontal-line {
      border: none;
      border-top: 2px solid #606264;
      width: 30px;
      margin-left: 0;
    }
  }
  .explanation-content {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 640px) {
      flex-direction: column;
    }
    .content-detail {
      color: #333538;
      width: 100%;
      font-weight: 450;
      .pioneer-text {
        font-size: 40px;
        font-weight: 500;
        line-height: 50px;
        width: 70%;
        @media only screen and (max-width: 640px) {
          width: 100%;
          margin-bottom: 40px;
        }
      }
      .detail-one {
        font-size: 22px;
        font-weight: 400;
        line-height: 34px;
        margin-bottom: 30px;
        @media only screen and (max-width: 640px) {
          font-size: 20px;
          line-height: 28px;
        }
      }
      .detail-two {
        font-size: 22px;
        font-weight: 400;
        line-height: 34px;
        @media only screen and (max-width: 640px) {
          font-size: 20px;
          line-height: 28px;
        }
        .bold {
          font-size: 22px;
          font-weight: 700;
          line-height: 34px;
          @media only screen and (max-width: 640px) {
            font-size: 20px;
            line-height: 28px;
          }
        }
      }
    }
  }
  .img-sphere {
    position: absolute;
    top: -150px;
    left: -90px;
    z-index: 111;
    transition: transform 0.3s ease;
    &:hover {
      animation: rotate 8s infinite linear;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @media only screen and (max-width: 640px) {
      width: 450px;
      height: 450px;
      &:hover {
      animation: none;
    }
    }
  }
}
</style>


