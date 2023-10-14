<template>
    <div class="manage-development-content">
      <div class="container">
        <div class="manage-development rubik-family">
          <p class="model-title">{{ $t("manageDevelopment") }}</p>
          <p class="model-explain">{{ $t("manageDevelopmentRight") }}</p>
        </div>
        <div class="container-new">
          <div class="divider"></div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {};
  </script>
  <style lang="scss" scoped>
  .manage-development-content {
    background: linear-gradient(180deg, #F8F4E9 0%, rgba(248, 244, 233, 0) 100%);
    padding: 70px 0;
    @media only screen and (max-width: 640px) {
          padding: 30px 0;
        }
   
    .manage-development {
     display: flex;
     justify-content: space-between;
     color: #333538;
     gap: 30px;
      @media only screen and (max-width: 640px) {
        flex-direction: column;
          width: 100%;
        }
      .model-title {
        font-size: 46px;
        font-weight: 500;
        line-height: 58px;
        width: 100%;
        @media only screen and (max-width: 640px) {
          width: 100%;
          font-size: 44px;
          line-height: 54px;
        }
      }
      .model-explain {
        font-size: 22px;
        font-weight: 450;
        line-height: 32px;
        width: 100%;
        @media only screen and (max-width: 640px) {
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 0;
        }
      }
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
  }
  </style>