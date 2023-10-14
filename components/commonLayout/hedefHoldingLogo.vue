<template>
  <div class="hedef-holding-content">
    <div class="image-content">
      <img
        :src="imageURL + 'hedef-logo.svg'"
        width="220"
        height="35"
        alt="hedef-logo"
      />
      <p class="rubik-family skyalp-footer">{{ $t("skyalpFooter") }}</p>
    </div>
    <div class="privacy-content">
      <div class="rubik-family privacy">
        <span>
          <a
            href="https://e-sirket.mkk.com.tr/?page=company&company=10833#"
            target="_blank"
            >{{ $t('informationSocietyServices') }}</a
          >
          I
        </span>

        <span>
          <nuxt-link :to="$t('kvkkPolicyURL')">{{
            $t("privacyPolicy")
          }}</nuxt-link>
          I
        </span>
        <nuxt-link :to="$t('cookieSettingsURL')">{{
          $t("cookieSettings")
        }}</nuxt-link>
      </div>
      <p class="rubik-family skyalp-info">{{ $t("skyalpInfo") }}</p>
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
  methods: {
    openCookieSettings() {
      deleteCookie("cookieAcceptedAll");
      this.$bus.$emit("cookieControl", true);
    },
  },
};
</script>
<style lang="scss">
.hedef-holding-content {
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
  .image-content {
    @media only screen and (max-width: 640px) {
      margin-bottom: 48px;
    }
    img {
      @media only screen and (max-width: 640px) {
        margin: 0 auto;
        width: 100%;
      }
    }
    .skyalp-footer {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: #77797a;
      margin-top: 2px;
    }
  }
  .privacy-content {
    @media only screen and (max-width: 640px) {
      display: block;
      text-align: center;
      }
    .privacy {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: #333538;
    }
    .skyalp-info {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: #77797a;
      margin-top: 8px;
      text-align: right;
      @media only screen and (max-width: 640px) {
      text-align: center;
      }
    }
  }
}
</style>
