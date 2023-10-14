<template>
    <div class="innovation-sustainability">
      <b-container>
        <p class="inner-page-title rubik-family">
        {{$t('innovationEntre')}}
        </p>
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
            littleTitle: "TECHNOLOGY",
            header: "Techne",
            description:this.$t('techneText'),
            image: "https://cdn.napolyon.com/skyalp/images/techne.svg",
            website:"https://technebilisim.com.tr/",
            italicText:this.$t('techneSubsidary')
          },
          {
            littleTitle: "FINTECH",
            header: "Sysline",
            description:this.$t('syslineText'),
              image: "https://cdn.napolyon.com/skyalp/images/sysline.svg",
              website:"https://www.sysline.com/"
          },
          {
            littleTitle: "NFT",
            header: "Artıox",
            description:this.$t('artıoxText'),
              image: "https://cdn.napolyon.com/skyalp/images/artıox.svg",
              website:"https://www.artiox.com/"
          },
          {
            littleTitle: "FINTECH",
            header: "TeklifimGelsin",
            description:this.$t('teklifimGelsinText'),
              image: "https://cdn.napolyon.com/skyalp/images/teklifimgelsin.svg",
              website:"https://teklifimgelsin.com/"
          }
        ],
      };
    },
  };
  </script>
  <style lang="scss">
  .innovation-sustainability{
    padding: 70px 0;
    .card-style {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      @media only screen and (max-width: 1200px) {
      display: block;
      flex-wrap: nowrap;
    }
    .card-content {
      width: 30%;
      @media only screen and (max-width: 1200px) {
        width: 100%;
        margin-bottom: 30px;
      }
    }
    }
  }
  </style>
