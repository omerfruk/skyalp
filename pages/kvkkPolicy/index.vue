<template>
    <section>
      <innerPageBackground :text1="'Privacy Policy'"/>
      <kvkkPolicyText/>
    </section>
  </template>
  <script>
  import innerPageBackground from "../../components/shared/innerPageBackground.vue";
  import kvkkPolicyText from "../../components/shared/kvkkPolicyText.vue";

  export default {
    components: {
      innerPageBackground,
      kvkkPolicyText
    },
    head(){
    return {
      title:this.$t("skyalpTitle")
    }
  }
  };
  </script>