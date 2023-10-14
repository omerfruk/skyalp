<template>
  <header
    :class="{ 'header-scrolled': isScrolled, 'white-overlay': mobileMenu }"
    class="header"
  >
    <b-container fluid="sm">
      <div v-if="!resize(windowInnerWidth, 'xs')" class="header-links">
        <whiteLogo v-if="!isScrolled" />
        <nuxt-link v-else  :to="$t('homePageURL')">
        <redLogo />
      </nuxt-link>
        <headerOuickLink v-if="!resize(windowInnerWidth, 'xs')" />
      </div>
      <div v-if="resize(windowInnerWidth, 'xs')" class="header-links">
        <whiteLogo v-if="!isScrolled" />
        <nuxt-link v-else-if="isRedLogo" :to="$t('homePageURL')">
        <redLogo />
      </nuxt-link>
        <span v-if="!isScrolled" @click="openHamburgerMenu()" class="material-symbols-outlined">
          menu
        </span>
        <span v-else @click="openHamburgerMenu()" class="material-symbols-outlined black">
          menu
        </span>
      </div>
      <div v-if="mobileMenu" class="white-overlay">
        <hamburgerMenu @triggerMenu="close" />
      </div>
    </b-container>
  </header>
</template>
<script>
import redLogo from "../logos/redLogo.vue";
import whiteLogo from "../logos/whiteLogo.vue";
import headerOuickLink from "../mainPage/headerQuickLink.vue";
import { resizeMixin } from "~/plugins/resize.js";
import hamburgerMenu from "../shared/hamburgerMenu.vue";
export default {
  components: {
    redLogo,
    headerOuickLink,
    hamburgerMenu,
    whiteLogo,
  },
  mixins: [resizeMixin],
  data() {
    return {
      windowInnerWidth: "xl",
      mobileMenu: false,
      isScrolled: false,
      isRedLogo: false,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.changeWidth();
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("resize", this.changeWidth);
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    changeWidth() {
      this.windowInnerWidth = parseInt(window.innerWidth);
    },
    openHamburgerMenu() {
      this.mobileMenu = true;
      document.querySelector("body").style.overflow = "hidden";
    },
    close() {
      this.mobileMenu = false;
      document.querySelector("body").style.overflow = "auto";
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
      this.isRedLogo = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 30px 0 10px 0;
  z-index: 999999;
  .header-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .material-symbols-outlined{
      color: white;
      margin-bottom: 10px;
    }
    .black{
      color: black;
    }
  }
}
.header-scrolled {
  position: fixed;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(28, 31, 34, 0.14);
  padding: 17px 0 10px 0;
}
</style>
