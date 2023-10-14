<template>
  <div class="footer">
    <b-container>
      <div class="footer-content">
        <div class="footer-list">
          <redLogo class="logo-content" />
          <p class="rubik-family text-content">
            {{ $t("mainPageFooter") }}
          </p>
        </div>
        <div class="footer-list-right">
          <div class="content-detail">
            <p class="header-content">{{ $t("pagesText") }}</p>
            <ul class="list-content">
              <li>
                <button @click="focusElement()">{{ $t("whoWeAreSmall") }}</button>
              </li>
              <li>
                <nuxt-link :to="$t('ourCompaniesURL')">{{
                  $t("ourCompaniesText")
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$t('investmentsURL')">{{
                  $t("investmentsText")
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$t('cultureAndCareerURL')">{{
                  $t("cultureAndCareerSmall")
                }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="content-detail">
            <p class="header-content">{{ $t("contactUsText") }}</p>
            <ul class="list-content">
              <li>{{ $t("adress") }}</li>
              <li>{{ $t("emailAdress") }}</li>
              <li>{{ $t("phone") }}</li>
            </ul>
          </div>
          <div class="content-detail">
            <p class="header-content">{{ $t("followUsText") }}</p>
            <ul class="list-content">
              <li>
                <img
                  :src="imageURL + 'linkedin.svg'"
                  width="15"
                  height="15"
                  alt="linkedin"
                />
                <a href="https://www.linkedin.com/company/skyalpglobal" target="_blank">{{ $t("linkedinText") }}</a>
              </li>
              <li>
                <img
                 :src="imageURL + 'twitter-new.svg'"
                  width="15"
                  height="15"
                  alt="twitter"
                />
                <a href="https://twitter.com/skyalpglobal" target="_blank">{{ $t("twitterText") }}</a>
              </li>
              <li>
                <img
                 :src="imageURL + 'instagram.svg'"
                  width="15"
                  height="15"
                  alt="instagram"
                />
                <a href="https://www.instagram.com/skyalpglobal/" target="_blank">{{ $t("instagramText") }}</a>
              </li>
              <li>
                <img
                 :src="imageURL + 'medium.svg'"
                  width="25"
                  height="25"
                  alt="medium"
                  class="medium-img"
                />
                <a class="medium" href="https://medium.com/@skyalp" target="_blank">{{ $t("mediumText") }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footerText />
      <hedefHoldingLogo />
    </b-container>
  </div>
</template>
<script>
import redLogo from "../logos/redLogo.vue";
import footerText from "./footerText.vue";
import hedefHoldingLogo from "./hedefHoldingLogo.vue";
export default {
  components: { redLogo, footerText, hedefHoldingLogo },
  data(){
    return{
      imageURL: process.env.baseImgUrl
    }
  },
  methods:{
    focusElement(){
     const scrollArea = document.getElementsByClassName("who-we-are-content")
     window.scrollTo(0,scrollArea[0].clientHeight)

    }
  }
};
</script>
<style lang="scss">
.footer {
  padding: 50px 0;
  border-bottom: 1px solid 1px solid rgba(51, 53, 56, 0.1);
  @media only screen and (max-width: 640px) {
    padding: 50px 20px;
  }
  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 50px;
    @media only screen and (max-width: 1024px) {
      flex-direction: column;
      padding-bottom: 0;
    }
    .footer-list {
      width: 50%;
      margin-right: 25px;
      @media only screen and (max-width: 1024px) {
        width: 100%;
        margin-right: 0;
      }
      .logo-content {
        margin-bottom: 22px;
        @media only screen and (max-width: 1024px) {
          margin-bottom: 48px;
        }
      }
      .text-content {
        font-size: 32px;
        font-weight: 400;
        line-height: 52px;
        color: #1c1f22;
        @media only screen and (max-width: 1024px) {
          margin-bottom: 48px;
        }
      }
    }
    .footer-list-right {
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width: 1024px) {
        width: 100%;
        flex-direction: column;
      }
      .content-detail {
        width: 30%;
        @media only screen and (max-width: 1024px) {
          width: 100%;
          margin-bottom: 48px;
        }
        .header-content {
          font-size: 26px;
          font-weight: 600;
          line-height: 48px;
          color: #1c1f22;
          margin-bottom: 22px;
        }
        .list-content {
          li {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            color: #333538;
            margin-bottom: 20px;
            button{
              padding: 0;
            }
            &:last-child{
              white-space: nowrap;
           img{
            margin-right: 10px;
           }
        }
            img {
              margin-right: 20px;
            }
            .medium{
              white-space: nowrap;
              margin-left: 5px;
            }
            .medium-img{
              margin-left: -4px;
            }
          }
        }
      }
    }
  }
}
</style>
