<template>
  <section class="default">
    <Header />
    <nuxt />
    <GetInTouch/>
    <Footer />
    <CookieControl v-if="!isCookieControl"/>
  
  </section>
</template>
<script>
import Footer from "../components/commonLayout/Footer.vue"
import Header from "../components/commonLayout/Header.vue";
import GetInTouch from "../components/mainPage/getInTouch.vue";
import CookieControl from "../components/shared/cookieControl.vue"
import Cookie from "js-cookie";

export default {
    components:{Footer,Header,GetInTouch,CookieControl},
    data(){
      return{
        isCookieControl:false
      }
    },
    mounted() {
    this.$bus.$on("cookieControl", (data) => {
      this.isCookieControl = data;
    });
    if(Cookie.get("cookieAcceptedAll")){
      this.isCookieControl = true
    }


  },
}
</script>
<style lang="scss">
.default{
  position: relative;
}
</style>
