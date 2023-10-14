<template>
    <section>
      <innerPageBackground v-if="$route.fullPath.includes($t('tr'))" :text1="'Duyurular'"/>
      <innerPageBackground v-else :text1="'Announcements'"/>
      <relationsContentPage/>
      
    </section>
  </template>
  <script>
  import innerPageBackground from "../../components/shared/innerPageBackground.vue";
  import relationsContentPage from "../../components/investorRelations/relationsContentPage.vue";
  export default {
    components: {
      innerPageBackground,
      relationsContentPage
    },
    head(){
    return {
      title:this.$t("skyalpTitle")
    }
  }
  };
  </script>