<template>
  <div class="explanation-content-detail">
    <div class="explanation-content">
      <div class="content-detail">
        <p class="pioneer-text">{{ $t("thisIsWhere") }}</p>
      </div>
      <div class="content-detail rubik-family">
        <p class="detail-one">{{ $t("weBelieveThat") }}</p>
        <p class="detail-two">
          {{ $t("weAreComitted") }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.explanation-content-detail {
  padding: 100px;
  background: linear-gradient(180deg, #f8f4e9 0%, rgba(248, 244, 233, 0) 100%);
  @media only screen and (max-width: 640px) {
    padding: 50px 20px;
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
        font-size: 48px;
        font-weight: 500;
        line-height: 60px;
        width: 80%;
        @media only screen and (max-width: 640px) {
          width: 100%;
          margin-bottom: 50px;
          font-size: 24px;
          line-height: 34px;
        }
      }
      .detail-one {
        font-size: 22px;
        font-weight: 400;
        line-height: 34px;
        margin-bottom: 30px;
        @media only screen and (max-width: 640px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
      .detail-two {
        font-size: 22px;
        font-weight: 400;
        line-height: 34px;
        @media only screen and (max-width: 640px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
