<template>
  <div class="side-menu-content">
    <div class="investor-page-select">
      <select v-model="selectedOption" @change="redirectToPage">
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
        >
          {{ option.label }}
        </option>  
      </select>
      <span class="material-symbols-outlined"> expand_more </span>
    </div>

    <div class="page-content">
      <corporateOverview
        v-if="$route.fullPath.includes($t('investorRelationsCorporateURL'))"
      />
      <activityReports
        v-if="
          $route.fullPath.includes($t('investorRelationsActivityReportsURL'))
        "
      />
      <disclosureToBist
        v-if="$route.fullPath.includes($t('investorRelationsDisclosuresURL'))"
      />
      <annualReport
        v-if="$route.fullPath.includes($t('investorRelationsAnnualReportsURL'))"
      />
      <financialReports
        v-if="
          $route.fullPath.includes($t('investorRelationsFinancialReportsURL'))
        "
      />
      <payPurchaseForm
        v-if="$route.fullPath.includes($t('investorRelationsPayPurchaseURL'))"
      />
      <announcements
        v-if="$route.fullPath.includes($t('announcementURL'))"
      />
    </div>
  </div>
</template>
<script>
import corporateOverview from "./investorRelationsDetail/corporateOverview.vue";
import activityReports from "./investorRelationsDetail/activityReports.vue";
import disclosureToBist from "./investorRelationsDetail/disclosureToBist.vue";
import annualReport from "./investorRelationsDetail/annualReports/annualReports.vue";
import financialReports from "./investorRelationsDetail/financialReports/financialReports.vue";
import payPurchaseForm from "./investorRelationsDetail/payPurchaseForm.vue";
import announcements from "./investorRelationsDetail/announcements.vue";
export default {
  components: {
    corporateOverview,
    activityReports,
    disclosureToBist,
    annualReport,
    financialReports,
    payPurchaseForm,
    announcements
  },
  data() {
    return {
      selectedOption: this.$t("investorRelationsCorporateURL"),
      options: [
        {
          id: 1,
          label: this.$t('corporateOverview'),
          value: this.$t("investorRelationsCorporateURL"),
        },
        {
          id: 2,
          label: this.$t('annualReports'),
          value: this.$t("investorRelationsAnnualReportsURL"),
        },
        {
          id: 3,
          label: this.$t('activityReports'),
          value: this.$t("investorRelationsActivityReportsURL"),
        },
        {
          id: 4,
          label: this.$t('disclosureToBist'),
          value: this.$t("investorRelationsDisclosuresURL"),
        },
        {
          id: 5,
          label: this.$t('financialReports'),
          value: this.$t("investorRelationsFinancialReportsURL"),
        },
        {
          id: 6,
          label: this.$t('payPurchase'),
          value: this.$t("investorRelationsPayPurchaseURL"),
        },
        {
          id: 7,
          label: this.$t('announcement'),
          value: this.$t("announcementURL"),
        },
      ],
    };
  },
  mounted() {
    const currentRoute = this.$route.fullPath;
    const matchedOption = this.options.find(
      (option) => option.value === currentRoute
    );
    if (matchedOption) {
      this.selectedOption = matchedOption.value;
    }
  },
  methods: {
    async redirectToPage() {
      try {
        await this.$nextTick();
        await this.$router.push(this.selectedOption);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style lang="scss">
.side-menu-content {
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
  .side-menu-list {
    li {
      padding: 16px 14px;
      color: #606264;
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
    }
    .active-link-style {
      color: #333538;
      border-radius: 6px;
      background: #f9fafb;
    }
  }
  .investor-page-select {
    position: relative;
    select {
      width: 100%;
      border-radius: 8px;
      padding: 14px;
      margin-bottom: 30px;
      border: 1px solid #d0d5dd;
      background-color: #fff; 
      color: #1c1f22; 
      font-size: 16px;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      appearance: none;
    }
    span{
        position: absolute;
        right: 15px;
        top: 15px;
    }
  }
}
</style>
