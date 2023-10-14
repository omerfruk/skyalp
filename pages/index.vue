<template>
  <section class="home IndexPage">
      <BackgroundComponent />
    <LazyHydrate>
      <WhoWeAre/>
    </LazyHydrate>
    <LazyHydrate>
      <BussinessModeL />
    </LazyHydrate>
      <BuildComponent />
    <LazyHydrate>
      <InvestmentsComponent />
    </LazyHydrate>
   <!-- <LazyHydrate>
      <BlogComponent />
    </LazyHydrate>
    -->
   <!-- <LazyHydrate>
      <GetInTouch />
    </LazyHydrate>
    -->
  </section>


</template>


<script>
import LazyHydrate from "vue-lazy-hydration";
import BussinessModeL from "../components/mainPage/bussinessModel.vue";
//import GetInTouch from "../components/mainPage/getInTouch.vue";
import WhoWeAre from "../components/mainPage/whoWeAre.vue";
import BackgroundComponent from "../components/mainPage/backgroundComponent.vue";
import BuildComponent from "../components/mainPage/buildComponent.vue";
import BlogComponent from "../components/mainPage/blogComponent.vue";
import InvestmentsComponent from "../components/mainPage/investmentsComponent.vue";
export default {
  name: "IndexPage",
  components: {
    LazyHydrate,
    BussinessModeL,
    WhoWeAre,
    BackgroundComponent,
    BuildComponent,
    BlogComponent,
    InvestmentsComponent,
  },
  head(){
    return {
      title:this.$t("skyalpTitle")
    }
  }
};
</script>


<style lang="scss" scoped></style>


