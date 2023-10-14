<template>
  <section class="switch-language-content">
    <div class="active-language">
      <span  :class="{'language-text-scrolled' : scrolled}" v-if="$route.fullPath.includes('tr')" @click="openedLanguageMenu()"
        >TR</span
      >
      <span  :class="{'language-text-scrolled' : scrolled}" v-if="!$route.fullPath.includes('tr')" @click="openedLanguageMenu()"
        >EN</span
      >
    </div>
    <div v-if="clickedMenu" class="hover-dropdown-wrap">
      <div class="hover-menu-detail">
        <ul class="switch-links">
          <li>
            <nuxt-link
              :to="switchLocalePath('en')"
              class="language"
              @click="languageSwitch('en')"
            >
              <span :class="{'language-text-scrolled' : scrolled}" class="language-text">EN</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="switchLocalePath('tr')"
              class="language"
              @click="languageSwitch('tr')"
            >
              <span :class="{'language-text-scrolled' : scrolled}" class="language-text">TR</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import Cookie from "js-cookie";
export default {
  data() {
    return {
      imageURL: process.env.baseImgUrl,
      checkLanguage: "en",
      clickedMenu: false,
      scrolled: false,
    };
  },
  mounted() {
    this.checkLanguage = Cookie.get("i18n_redirected");
    localStorage.setItem("previousLanguage", this.checkLanguage);
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    languageSwitch(locale) {
      Cookie.set("i18n_redirected", locale);
      this.checkLanguage = locale;
      if (this.$route.fullPath.includes(this.$t("cultureAndCareerURL"))) {
        this.$bus.$emit("changeRoute", { lang: this.checkLanguage });
      }
    },
    openedLanguageMenu() {
      this.clickedMenu = !this.clickedMenu;
    },
  },
};
</script>
<style lang="scss" scoped>
.language-text-scrolled {
  color: #333538 !important;
}
.switch-language-content {
  position: relative;

  .active-language {
    box-sizing: border-box;
    cursor: pointer;
    width: 25px;
    height: 22px;
    text-align: center;

    @media (max-width: 960px) and (min-width: 640px) {
      justify-content: center;
      margin: 0px;
    }
    @media (max-width: 640px) {
      display: block;
    }
  }
  .hover-dropdown-wrap {
    position: absolute;
    width: 50px;
    display: none;
    top: 20px;
    left: -5px;
    box-shadow: 0px 23px 30px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    z-index: 99999;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
   
    @media (max-width: 640px) {
      left: -25px;
      top: 25px;
    }

    .hover-menu-detail {
      background-color: white;
      border-radius: 10px;
      .switch-links {
        display: block;
        @media (max-width: 640px) {
          display: block;
        }
        li {
          &:first-child {
            padding: 10px 0;
            @media (max-width: 960px) {
              padding: 10px;
            }
            @media (max-width: 640px) {
              padding: 10px 0;
            }
          }
          &:last-child {
            border-bottom: none !important;
          }
          @media (max-width: 960px) {
            margin: 0px;
          }
          @media (max-width: 640px) {
            margin-left: 20px;
          }

          .choose-language-title {
            font-weight: 700;
            font-size: 12px;
            padding: 20px 15px;
            @media (max-width: 960px) and (min-width: 640px) {
              padding: 0px;
            }
          }
          .language-text {
            font-size: 12px;
            font-weight: 400;
          }

          a {
            padding: 10px 12px 10px 12px;
            font-size: 14px;
            display: block;

            font-weight: 500;
            cursor: pointer;
            margin-top: 0;
            display: flex;
            justify-content: space-between;
            @media (max-width: 960px) {
              border: none;
              padding: 15px 0;
            }
          
          }

          &:last-child {
            a {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
  &:hover {
    .hover-dropdown-wrap {
      display: block;
    }
  }
  .language-mobile {
    margin: 5px;
    .language-title-mobile {
      font-size: 16px;
      font-weight: 400;
    }
    .language-mobile-list {
      display: flex;
      margin-top: 10px;
      overflow-x: auto;
      li {
        margin-right: 30px;
        .language {
          display: block;
          text-align: center;
          .language-title {
            font-size: 12px;
            font-weight: 400;

            margin-top: 10px;
          }
        }
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
