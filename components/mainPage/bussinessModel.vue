<template>
  <div class="bussiness-model-content">
    <div class="container">
      <div class="container-new">
        <div class="divider"></div>
      </div>
      <div class="bussiness-model">
        <h1 class="model-title">{{ $t("bussinessModelText") }}</h1>
        <p class="model-explain">{{ $t("modelExplain") }}</p>
      </div>
      <div class="model-list">
        <div class="list-content">
          <img
            :src="imageURL + 'build.png'"
            width="160"
            height="180"
            alt="build"
          />
          <p class="title-text">{{ $t("buildText") }}</p>
          <p class="exp-text">{{ $t("buildExplanation") }}</p>
        </div>
        <div class="list-content">
          <img
            :src="imageURL + 'acquire.png'"
            width="160"
            height="165"
            alt="acquire"
          />
          <p class="title-text acquire">{{ $t("acquireText") }}</p>
          <p class="exp-text">{{ $t("acquireExplanation") }}</p>
        </div>
        <div  class="list-content">
          <img
            :src="imageURL + 'invest.png'"
            width="160"
            height="180"
            alt="invest"
          />
          <p class="title-text acquire">{{ $t("investText") }}</p>
          <p class="exp-text">{{ $t("investExplanation") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
        return{
            imageURL: process.env.baseImgUrl
        }
    }
};
</script>
<style lang="scss" scoped>
.bussiness-model-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  @media only screen and (max-width: 640px) {
        padding: 0px 0 50px 0;
      }
  .container-new {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    .divider {
      height: 50px;
      border-left: 1px solid #606264;
    }
  }
  .bussiness-model {
    text-align: center;
    color: #333538;
    width: 75%;
    margin: 0 auto;
    @media only screen and (max-width: 640px) {
        width: 100%;
      }
    .model-title {
      font-size: 52px;
      font-weight: 500;
      line-height: 64px;
      width: 70%;
      margin: 0 auto;
      @media only screen and (max-width: 640px) {
        width: 100%;
        font-size: 44px;
        line-height: 54px;
      }
    }
    .model-explain {
      font-size: 20px;
      font-weight: 450;
      line-height: 31px;
      width: 100%;
      margin-top: 30px;
      margin-bottom: 80px;
      @media only screen and (max-width: 640px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
      }
    }
  }
  .model-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 640px) {
       flex-direction: column;
      }

    .list-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 50px;
      text-align: center;
      @media only screen and (max-width: 640px) {
       margin-top: 64px;
       margin-right: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      .title-text {
        font-size: 26px;
        font-weight: 500;
        line-height: 42px;
        color: #1c1f22;
        margin: 32px 0;
      }
      .acquire{
        padding-top: 10px;
      }
      .exp-text {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        color: #494c4e;
        margin-bottom: 32px;
      }
      .learn-more {
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        color: #77797a;
        border-bottom: 1px solid #77797a;
      }
    }
  }
}
</style>
