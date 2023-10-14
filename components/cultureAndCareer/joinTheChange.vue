<template>
  <div class="join-the-change">
    <b-container>
      <div class="join-change-content">
        <div class="text-content rubik-family">
          <p class="change-title">{{ $t("joinTheChange") }}</p>
          <p class="change-exp">{{ $t("joinChangeTextOne") }}</p>
          <p class="change-exp-second">{{ $t("joinChangeTextTwo") }}</p>
        </div>
        <div class="job-card">
          <applicantForm v-if="!success" />
          <succesfullyForm v-if="success"/>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import applicantForm from "./applicantForm.vue";
import succesfullyForm from "./succesfullyForm.vue";
export default {
  components: {
    applicantForm,
    succesfullyForm
  },
  data() {
    return {
      success : false
    };
  },
  mounted(){
    this.$bus.$on("triggerSuccess", (data) => {
     this.success = true
    });
  },
};
</script>
<style lang="scss">
.join-the-change {
  padding: 80px 0;
  background: linear-gradient(90deg, #efe6d5 0%, #f8f4e9 100%);
  @media only screen and (max-width: 640px) {
    padding: 80px 20px;
  }
  .join-change-content {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 640px) {
      flex-direction: column;
    }
    .text-content {
      width: 50%;
      @media only screen and (max-width: 640px) {
        width: 100%;
      }
      .change-title {
        color: #333538;
        font-size: 48px;
        font-weight: 500;
        line-height: 60px;
        margin-bottom: 20px;
        @media only screen and (max-width: 640px) {
          font-size: 30px;
        }
      }
      .change-exp {
        color: #1c1f22;
        font-size: 24px;
        font-weight: 400;
        line-height: 38px;
        margin-bottom: 20px;
        @media only screen and (max-width: 640px) {
          font-size: 16px;
        }
      }
      .change-exp-second {
        color: #1c1f22;
        font-size: 24px;
        font-weight: 400;
        line-height: 38px;
        @media only screen and (max-width: 640px) {
          font-size: 16px;
          margin-bottom: 40px;
        }
      }
    }
    .job-card {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
