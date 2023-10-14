<template>
  <div class="investments">
    <b-container>
      <div class="investments-content">
        <div class="text-content">
          <div class="investments-text-part">
            <p class="title-red-content">{{ $t("investTextBold") }}</p>
            <hr class="horizontal-line" />
          </div>
          <p class="investments-bold rubik-family">
            {{ $t("ourInvestmentsText") }}
          </p>
          <p class="investments-bold rubik-family">{{ $t("ourInvestmentsTextTwo") }}</p>
          <button @click="goInvestments()" class="main-page-button">
            <nuxt-link :to="$t('investmentsURL')"
              >{{ $t("ourInvestments") }}
              <span class="material-symbols-outlined">
                chevron_right
              </span></nuxt-link
            >
          </button>
        <!-- <showMorePicture /> -->
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import showMorePicture from "./showMorePicture.vue";
export default {
  components: { showMorePicture },
  methods: {
    goInvestments() {
      this.$router.push($t("investmentsURL"));
    },
  },
};
</script>
<style lang="scss">
.investments {
  background-image: url("https://cdn.napolyon.com/skyalp/images/Investments-1.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
  height: 100vh;
  padding: 50px 0;
  @media only screen and (max-width: 640px) {
    background-image: url("https://cdn.napolyon.com/skyalp/images/invest-mobile.png");
    height: 800px;
    padding: 40px 0;
  }
  .investments-content {
    display: flex !important;
    justify-content: space-between;
    width: 45%;
    @media only screen and (max-width: 640px) {
      width: 100%;
    }
    .text-content {
      .investments-text-part {
        .horizontal-line {
          border: none;
          border-top: 2px solid #606264;
          width: 30px;
          margin-left: 0;
        }
      }
      .investments-bold {
        font-size: 24px;
        font-weight: 450;
        line-height: 34px;
        margin-bottom: 40px;
      }
      .main-page-button {
        .material-symbols-outlined {
          vertical-align: middle;
          padding-left: 24px;
          color: #333538;
          font-size: 28px;
        }
      }
    }
  }
}
</style>
