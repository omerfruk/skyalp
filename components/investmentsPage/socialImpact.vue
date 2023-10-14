<template>
  <div class="social-impact">
    <b-container>
      <p class="inner-page-title rubik-family">
      {{$t('socialImpactAndEnvironmental')}}
      </p>
      <div class="card-style">
        <investmentCard
          v-for="(invest, index) in impactList"
          :key="index"
          :list="invest"
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
          littleTitle: "SOCIAL IMPACT",
          header: "Komün",
          description:this.$t('komünText'),
          image: "https://cdn.napolyon.com/skyalp/images/komün.svg",
          website:"https://www.komun.online/",
          italicText:this.$t('komünSubsidary')
        },
        {
          littleTitle: "MEDIA",
          header: "Juphy",
          description:this.$t('juphyText'),
          image: "https://cdn.napolyon.com/skyalp/images/juphy.svg",
          website:"https://juphy.com/"
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.social-impact {
  padding: 100px 0;
  .card-style {
    display: flex;
    gap: 24px;
    @media only screen and (max-width: 640px) {
      display: block;
      flex-wrap: nowrap;
    }
  }
}
</style>
