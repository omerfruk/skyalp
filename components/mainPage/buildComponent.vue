<template>
  <div class="build">
    <b-container>
      <div class="build-content">
        <div class="text-content">
          <div class="build-text-part">
            <p class="title-red-content">{{ $t("ourCompaniesBold") }}</p>
            <hr class="horizontal-line" />
          </div>
          <p class="build-bold rubik-family">{{ $t("buildLongText") }}</p>
          <button @click="routerPage()" class="main-page-button">
            {{ $t("allCaseStudies") }}
            <span class="material-symbols-outlined"> chevron_right </span>
          </button>
        </div>

        <buildSlider /> 
      </div>
    </b-container>
  </div>
</template>
<script>
import buildSlider from "./buildSlider.vue";
export default {
  components: { buildSlider },
  methods:{
    routerPage(){
      this.$router.push({ path: this.$t("ourCompaniesURL") });
    }
  }
};
</script>
<style lang="scss">
.build {
  padding: 80px 0;
  .build-content {
    display: flex !important;
    justify-content: space-between;
    width: 100%;
    @media only screen and (max-width: 640px) {
      flex-direction: column;
    }
    .text-content {
      width: 40%;
      margin-right: 30px;
      @media only screen and (max-width: 640px) {
        width: 100%;
      }
      .build-text-part {
        .horizontal-line {
          border: none;
          border-top: 2px solid #606264;
          width: 30px;
          margin-left: 0;
        }
      }
      .build-bold {
        font-size: 22px;
        font-weight: 450;
        line-height: 32px;
        margin-bottom: 64px;
      }
      .main-page-button {
        @media only screen and (max-width: 640px) {
          margin-bottom: 48px;
        }
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
