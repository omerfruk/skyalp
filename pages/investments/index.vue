<template>
  <section class="investments-page">
    <innerPageBackground v-if="$route.fullPath.includes($t('tr'))" :text1="'İnsanlara'" :text2="'ve'"  :text3="'Fikirlere'" :text4="'Yatırım'" :text5="'Yapıyoruz'"/>
    <innerPageBackground v-else :text1="'We'" :text2="'invest in'" :text3="'people'" :text4="'and'" :text5="'ideas.'"/>
    <innovation ref="innovation" />
    <financial ref="financial" />
    <socialImpact ref="socialImpact" />
   
  </section>
</template>
<script>
import innerPageBackground from "../../components/shared/innerPageBackground.vue";
import socialImpact from "../../components/investmentsPage/socialImpact.vue";
import financial from "../../components/investmentsPage/financial.vue";
import innovation from "../../components/investmentsPage/innovation.vue";
export default {
  components: {
    innerPageBackground,
    socialImpact,
    financial,
    innovation,
  },
  head(){
    return {
      title:this.$t("skyalpTitle")
    }
  },
  mounted(){
    this.$bus.$on("innovationComponent", (data) => {
      const scrollArea =
          document.getElementsByClassName("innovation-sustainability");
        window.scrollTo(0, scrollArea[0].clientHeight);
    });
    this.$bus.$on("financialComponent", (data) => {
      this.$refs.financial.scrollIntoView({
      behavior: 'smooth', 
      block: 'start',
    });
    });
    this.$bus.$on("socialComponent", (data) => {
      this.$refs.socialImpact.scrollIntoView({
      behavior: 'smooth', // Yavaşça kaydırma için
      block: 'start', // Kaydırma, komponentin başlangıcına odaklanacak
    });
    });
  },
  methods:{
    
  }
};
</script>
<style lang="scss" scoped>
.investments-page{
  background: linear-gradient(180deg, #F8F4E8 0%, #FDFBF7 100%);

}
</style>
