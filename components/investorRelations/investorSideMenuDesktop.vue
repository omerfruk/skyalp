<template>
  <div class="side-menu-content">
    <ul class="side-menu-list">
      <li
        :class="{
          'active-link-style': $route.fullPath.includes(
            $t('investorRelationsCorporateURL')
          ),
        }"
      >
        <nuxt-link :to="$t('investorRelationsCorporateURL')">{{
          $t("corporateOverview")
        }}</nuxt-link>
      </li>
      <li
        :class="{
          'active-link-style': $route.fullPath.includes(
            $t('investorRelationsAnnualReportsURL')
          ),
        }"
      >
        <nuxt-link :to="$t('investorRelationsAnnualReportsURL')">{{
          $t("annualReports")
        }}</nuxt-link>
      </li>
      <li
        :class="{
          'active-link-style': $route.fullPath.includes(
            $t('investorRelationsActivityReportsURL')
          ),
        }"
      >
        <nuxt-link :to="$t('investorRelationsActivityReportsURL')">{{
          $t("activityReports")
        }}</nuxt-link>
      </li>
      <li
        :class="{
          'active-link-style': $route.fullPath.includes(
            $t('investorRelationsDisclosuresURL')
          ),
        }"
      >
        <nuxt-link :to="$t('investorRelationsDisclosuresURL')">{{
          $t("disclosureToBist")
        }}</nuxt-link>
      </li>
      <li
        :class="{
          'active-link-style': $route.fullPath.includes(
            $t('investorRelationsFinancialReportsURL')
          ),
        }"
      >
        <nuxt-link :to="$t('investorRelationsFinancialReportsURL')">{{
          $t("financialReports")
        }}</nuxt-link>
      </li>
      <li
        :class="{
          'active-link-style': $route.fullPath.includes(
            $t('investorRelationsPayPurchaseURL')
          ),
        }"
      >
        <nuxt-link :to="$t('investorRelationsPayPurchaseURL')">{{
          $t("payPurchase")
        }}</nuxt-link>
      </li>
      <li
        :class="{
          'active-link-style': $route.fullPath.includes(
            $t('announcementURL')
          ),
        }"
      >
        <nuxt-link :to="$t('announcementURL')">{{
          $t("announcement")
        }}</nuxt-link>
      </li>
    </ul>
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
    select {
      width: 100%;
      border-radius: 8px;
      padding: 14px;
      margin-bottom: 30px;
      border: 1px solid #d0d5dd; /* Border rengi ve kalınlığı */
      background-color: #fff; /* Arka plan rengi */
      color: #1c1f22; /* Yazı rengi */
      font-size: 16px;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    }
  }
}
</style>
