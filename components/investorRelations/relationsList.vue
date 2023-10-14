<template>
  <div class="investor-relations-list">
    <b-container>
      <div class="list-detail">
        <relationsCard
          v-for="(relation, index) in relationList"
          :key="index"
          :relations="relation"
          class="card-detail-content"
        />
      </div>
    </b-container>
  </div>
</template>
<script>
import relationsCard from "../investorRelations/relationsCard.vue";

export default {
  components: { relationsCard },
  data() {
    return {
      relationList: [
        {
          image: "https://cdn.napolyon.com/skyalp/images/investor-image.svg",
          header: this.$t('annualReports'),
          link:this.$t("investorRelationsAnnualReportsURL"),
        },
        {
          image:"https://cdn.napolyon.com/skyalp/images/activity-report.svg",
          header: this.$t('activityReports'),
          link:this.$t("investorRelationsActivityReportsURL"),
        },
        {
          image: "https://cdn.napolyon.com/skyalp/images/special-status.svg",
          header: this.$t('disclosureToBist'),
          link:this.$t("investorRelationsDisclosuresURL"),
        },
        {
          image: "https://cdn.napolyon.com/skyalp/images/instutional.svg",
          header: this.$t('corporateOverview'),
          link:this.$t("investorRelationsCorporateURL"),
        },
        {
          image: "https://cdn.napolyon.com/skyalp/images/financial-tables.svg",
          header: this.$t('financialReports'),
          link:this.$t("investorRelationsFinancialReportsURL"),
        },
        {
          image: "https://cdn.napolyon.com/skyalp/images/offer-form.svg",
          header: this.$t('payPurchase'),
          link: this.$t("investorRelationsPayPurchaseURL"),
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.investor-relations-list {
  padding: 100px 0 0px 0;
 .list-detail{
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 1200px) {
         flex-direction: column;
         flex-wrap: nowrap;
        }
    .card-detail-content{
        width: 33%;
        &:nth-child(-n+3){
          margin-bottom: 80px;
          @media only screen and (max-width: 1200px) {
         margin-bottom: 0;
        }
        }

        @media only screen and (max-width: 1200px) {
         width: 100%;
        }
    }
  }
}
</style>
