<template>
  <div class="we-are-content">
    <div class="container">
      <div class="container-new">
        <div class="divider"></div>
      </div>
     <!-- <div class="we-are-model">
        <p class="model-explain">{{ $t("weAreText") }}</p>
      </div>
      -->
      <div class="we-are-model-list">
        <div class="list-content">
          <img
            :src="imageURL + 'change-new.svg'"
            width="390"
            height="188"
            alt="build"
          />
          <p class="title-text">{{ $t("pushingBoundaries") }}</p>
          <p class="exp-text">{{ $t("pushingBoundariesExp") }}</p>
        </div>
        <div class="list-content">
          <img
          :src="imageURL + 'change.svg'"
            width="390"
            height="188"
            alt="acquire"
          />
          <p class="title-text">{{ $t("changeMakers") }}</p>
          <p class="exp-text">{{ $t("changeMakersText") }}</p>
        </div>
        <div class="list-content">
          <img
           :src="imageURL + 'talent-icon.svg'"
            width="390"
            height="188"
            alt="invest"
          />
          <p class="title-text">{{ $t("talentArmada") }}</p>
          <p class="exp-text">{{ $t("talentArmadaText") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageURL: process.env.baseImgUrl,
    };
  },
};
</script>
<style lang="scss" scoped>
.we-are-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  .we-are-model {
    text-align: center;
    color: #333538;
    .model-explain {
      font-size: 52px;
      font-weight: 450;
      line-height: 64px;
      margin-top: 30px;
      margin-bottom: 40px;
      @media only screen and (max-width: 640px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
      }
    }
  }
  .we-are-model-list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media only screen and (max-width: 640px) {
      display: block;
    }

    .list-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      // margin-right: 50px;
      text-align: center;
      width: 33%;
      @media only screen and (max-width: 640px) {
        margin-top: 64px;
        margin-right: 0;
        width: 100%;
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
        @media only screen and (max-width: 640px) {
          font-size: 20px;
          line-height: 42px;
          margin: 24px 0;
        }
      }
      .exp-text {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        color: #494c4e;
        margin-bottom: 32px;
        @media only screen and (max-width: 640px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
