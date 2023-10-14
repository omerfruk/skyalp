<template>
  <div class="financial-sustainability">
    <b-container>
      <p class="inner-page-title rubik-family">{{$t('financialSustainability')}}</p>
      <div class="card-style">
        <investmentCard
          v-for="(invest, index) in impactList"
          :key="index"
          :list="invest"
          class="card-content"
        />
      </div>
    </b-container>
  </div>
</template>
<script>
import investmentCard from "./investmentCard.vue";
export default {
  components: { investmentCard },
  data() {
    return {
      impactList: [
        {
          littleTitle: "STOCK MARKET",
          header: "Fintables",
          description:this.$t('fintablesText'),
            image: "https://cdn.napolyon.com/skyalp/images/fintables.svg",
            website:"https://fintables.com/",
            italicText:this.$t('fintablesSubsidary')
        },
        {
          littleTitle: "FINANCE",
          header: "Talkinvest",
          description:this.$t('talkinvestText'),
            image: "https://cdn.napolyon.com/skyalp/images/talkinvest.svg",
            website:"https://talkinvest.com/",
            italicText:this.$t('talkinvestSubsidary')
        },
        {
          littleTitle: "STOCK MARKET",
          header: "Zephlex",
          description:this.$t('zephlexText'),
            image: "https://cdn.napolyon.com/skyalp/images/zephlex.svg",
            website:"https://zephlex.com/",
            italicText:this.$t('zephlexSubsidary')
        },
        {
          littleTitle: "STOCK MARKET",
          header: "Idealdata",
          description:this.$t('idealDataText'),
            image: "https://cdn.napolyon.com/skyalp/images/ideal-data.svg",
            website:"https://idealdata.com.tr/"
        },
        {
          littleTitle: "CRYPTO",
          header: "Traderbull",
          description:this.$t('traderbullText'),
            image: "https://cdn.napolyon.com/skyalp/images/traderbull.svg",
            website:"https://www.traderbull.com/",
            italicText:this.$t('traderbullSubsidary')
        },
        {
          littleTitle: "FOREX",
          header: "Ftech",
          description:this.$t('ftechText'),
            image: "https://cdn.napolyon.com/skyalp/images/ftech.svg",
            website:"https://ftechlabs.com/",
            italicText:this.$t('ftechSunsidary')
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.financial-sustainability {
  padding: 70px 0;
  .card-style {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    @media only screen and (max-width: 640px) {
      display: block;
      flex-wrap: nowrap;
      gap: 0;
    }
    .card-content {
      width: 31%;
      @media only screen and (max-width: 640px) {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
