<template>
    <section class="investor-relations-content">
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsCorporateURL')) && $route.fullPath.includes($t('tr'))" :text1="'Yatırımcı'" :text2="'İlişkileri'" :text3="'Kurumsal'" :text4="'Bilgiler'"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsCorporateURL')) && !$route.fullPath.includes($t('tr'))" :text1="'Investor'" :text2="'Relations'" :text3="'Corporate'" :text4="'Overview'"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsAnnualReportsURL')) &&  $route.fullPath.includes($t('tr'))" :text1="'Yatırımcı'" :text2="'İlişkileri'" :text3="'Genel'" :text4="'Kurul'" :text5="'Raporları'"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsAnnualReportsURL')) && !$route.fullPath.includes($t('tr'))" :text1="'Investor'" :text2="'Relations'" :text3="'Annual'" :text4="'Reports'" :text5="''"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsActivityReportsURL')) && $route.fullPath.includes($t('tr'))" :text1="'Yatırımcı'" :text2="'İlişkileri'" :text3="'Faaliyet'" :text4="'Raporları'"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsActivityReportsURL')) && !$route.fullPath.includes($t('tr'))" :text1="'Investor'" :text2="'Relations'" :text3="'Activity'" :text4="'Reports'"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsDisclosuresURL')) && $route.fullPath.includes($t('tr'))" :text1="'Yatırımcı'" :text2="'İlişkileri'" :text3="'Özel'" :text4="'Durum'" :text5="'Açıklamaları'"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsDisclosuresURL')) && !$route.fullPath.includes($t('tr'))" :text1="'Investor'" :text2="'Relations'" :text3="'Disclosure'" :text4="'to'" :text5="'BIST'"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsFinancialReportsURL')) && $route.fullPath.includes($t('tr'))" :text1="'Yatırımcı'" :text2="'İlişkiler'" :text3="'Finansal'" :text4="'Tablolar'"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsFinancialReportsURL')) && !$route.fullPath.includes($t('tr'))" :text1="'Investor'" :text2="'Relations'" :text3="'Financial'" :text4="'Reports'"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsPayPurchaseURL')) && $route.fullPath.includes($t('tr'))" :text1="'Yatırımcı'" :text2="'İlişkileri'" :text3="'Pay Alım'" :text4="'Teklif'" :text5="'Formu'"/>
      <innerPageBackground v-if="$route.fullPath.includes($t('investorRelationsPayPurchaseURL')) && !$route.fullPath.includes($t('tr'))" :text1="'Investor'" :text2="'Relations'" :text3="'Pay Purchase'" :text4="'Proposal'" :text5="'Form'"/>
      <div>
        <relationsContentPage/>
      </div>
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
