<template>
    <section>
      <innerPageBackground v-if="$route.fullPath.includes($t('tr'))"  :text1="'Çerez'" :text2="'Ayarları'" />
      <innerPageBackground v-else :text1="'Cookie Settings'"/>
      <cookieSettingPage/>
    </section>
  </template>
  <script>
  import innerPageBackground from "../../components/shared/innerPageBackground.vue";
  import cookieSettingPage from "../../components/shared/cookieSettingPage.vue";

  export default {
    components: {
      innerPageBackground,
      cookieSettingPage
    },
    head(){
    return {
      title:this.$t("skyalpTitle")
    }
  }
  };
  </script>