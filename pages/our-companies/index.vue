<template>
    <section>
            <innerPageBackground v-if="$route.fullPath.includes($t('tr'))" :text1="'Uçtan Uca'" :text2="'Dijital'"  :text3="'Ürünler'" :text4="'İnşa'" :text5="'Ediyoruz'"/>
            <innerPageBackground  v-else :text1="'We'" :text2="'Build'"  :text3="'End-to-End'" :text4="'Digital'" :text5="'Products'"/>
            <manageDevelopment/>
            <napolyonSlider/>
            <duudeSlider/> 
    </section>
</template>
<script>
import innerPageBackground from "../../components/shared/innerPageBackground.vue"
import manageDevelopment from "../../components/ourCompanies/manageDevelopment.vue";
import napolyonSlider from "../../components/ourCompanies/napolyonSlider.vue";
import duudeSlider from "../../components/ourCompanies/duudeSlider.vue";
export default {
    components:{innerPageBackground,manageDevelopment,napolyonSlider,duudeSlider},
    head(){
    return {
      title:this.$t("skyalpTitle")
    }
  }
   
}
</script>

 