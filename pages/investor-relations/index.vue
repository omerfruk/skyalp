<template>
  <section class="investor-relations">
    <div>
      <innerPageBackground
      v-if="$route.fullPath.includes($t('tr'))"
        :text1="'Yatırımcı'"
        :text2="'İlişkileri'"
      />
      <innerPageBackground
      v-else
        :text1="'Investor'"
        :text2="'Relations'"
      />
      <relationsList />
      <div class="iframe-content">
      <iframe
        :src="iframeSrc"
        style="height: 100%; width: 100%"
        frameborder="0"
        width="100%"
        height="1000px"
      ></iframe>
    </div>
      <!-- <graphicTabs /> -->
    </div>
  </section>
</template>
<script>
import innerPageBackground from "../../components/shared/innerPageBackground.vue";
import relationsList from "../../components/investorRelations/relationsList.vue";
//import graphicTabs from "../../components/investorRelations/investorRelationsGraphic/graphicTabs.vue";
export default {
  components: {
    innerPageBackground,
    relationsList,
    // graphicTabs,
  },
  head(){
    return {
      title:this.$t("skyalpTitle")
    }
  },
  data() {
    return {
      iframeSrc: "https://yatirimci.idealdata.com.tr/IDEAS/?symbol=IDEAS",
    };
  },
};
</script>
<style lang="scss" scoped>
.investor-relations {
  .iframe-content{
    padding: 0 130px;
    @media only screen and (max-width: 640px) {
   padding: 0;
    }
    iframe {
    height: 1000px !important;
    .tabs {
      .is-active {
        border-bottom-color: #d73828 !important;
        color: #d73828 !important;
      }
    }
  }
  }


}
</style>
