<template>
  <section>
    <innerPageBackground v-if="$route.fullPath.includes($t('tr'))"  :text1="'Aramıza'" :text2="'Hoş Geldin'" :text3="'Burası'" :text4="'Senin'" :text5="'Yerin.'"/>
    <innerPageBackground v-else :text1="'Welcome to Skyalp'" :text2="'Welcome'" :text3="'to'" :text4="'our'" :text5="'team.'"/>
    <justImage/>
    <explainComponent />
    <weAreComponent />
    <joinTheChange />
  </section>
</template>
<script>
import innerPageBackground from "../../components/shared/innerPageBackground.vue";
import explainComponent from "../../components/cultureAndCareer/explainComponent.vue";
import weAreComponent from "../../components/cultureAndCareer/weAreComponent.vue";
import joinTheChange from "../../components/cultureAndCareer/joinTheChange.vue";
import justImage from "../../components/cultureAndCareer/justImage.vue";
export default {
  components: {
    innerPageBackground,
    explainComponent,
    weAreComponent,
    joinTheChange,
    justImage
  },
  head(){
    return {
      title:this.$t("skyalpTitle")
    }
  }
};
</script>

