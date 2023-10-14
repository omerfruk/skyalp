<template>
  <div class="hamburger-menu">
    <div class="hamburger-menu-header">
      <nuxt-link :to="$t('homePageURL')">
        <redLogo />
      </nuxt-link>
      
      <span @click="closeMobileMenu()" class="material-symbols-outlined">
        close
      </span>
    </div>
    <div class="hamburger-menu-list">
      <ul @click="closeMobileMenu()" class="menu-list">
        <li>
          <nuxt-link :to="$t('homePageURL')">{{ $t("home") }}</nuxt-link>
        </li>
        <li>
          <button @click="focusElement()">{{ $t("whoWeAre") }}</button>
        </li>
        <li>
          <nuxt-link :to="$t('ourCompaniesURL')">{{
            $t("ourCompaniesBold")
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="$t('investmentsURL')">{{
            $t("investTextBold")
          }}</nuxt-link>
        </li>

        <li>
          <nuxt-link :to="$t('cultureAndCareerURL')">{{
            $t("cultureAndCareerText")
          }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="menu-button">
      <div class="lang-content">
        <img
            :src="imageURL + 'lang-black.png'"
            alt="pdp"
            width="15"
            height="15"
          />
          <languageSwitch/>
      </div>
      <ul @click="closeMobileMenu()" class="rubik-family">
        <li
        :class="{
          'active-link': $route.fullPath.includes($t('announcementURL')),
        }"
      >
        <nuxt-link
          class="header-link"
          :class="{
            'active-link-style': $route.fullPath.includes(
              $t('announcementURL')
            ),
            'active-link':
              $route.fullPath.includes($t('announcementURL')),
          }"
          :to="$t('announcementURL')"
        >
          <img
      
            :src="imageURL + 'announcement-black.svg'"
            alt="pdp"
            width="15"
            height="15"
          />
          {{ $t("announcement") }}
        </nuxt-link>
      </li>
        <li
          :class="{
            'active-link': $route.fullPath.includes($t('investmentsURL')),
          }"
        >
          <nuxt-link class="mobile-link" :to="$t('investorRelationsURL')">
            <img
              v-if="$route.fullPath.includes($t('investorRelationsURL'))"
              :src="imageURL + 'investor-relations-yellow.svg'"
              alt="pdp"
              width="16"
              height="16"
            />
            <img
              v-else
              :src="imageURL + 'relations-mobile.svg'"
              alt="pdp"
              width="16"
              height="16"
            />
            {{ $t("investorRelations") }}</nuxt-link
          >
        </li>
      </ul>
      <button class="main-page-button">{{ $t("contactUsBold") }}</button>
    </div>
  </div>
</template>
<script>
import redLogo from "../logos/redLogo.vue";
import languageSwitch from "./languageSwitch.vue";
export default {
  components: {
    redLogo,
    languageSwitch
  },
  data() {
    return {
      imageURL: process.env.baseImgUrl,
    };
  },
  methods: {
    closeMobileMenu() {
      this.$emit("triggerMenu", true);
    },
    focusElement() {
      if (
        !this.$route.fullPath.includes(this.$t("investmentsURL")) &&
        !this.$route.fullPath.includes(this.$t("cultureAndCareerURL")) &&
        !this.$route.fullPath.includes(this.$t("ourCompaniesURL")) &&
        !this.$route.fullPath.includes(this.$t("investorRelationsURL"))
      ) {
        const scrollArea =
          document.getElementsByClassName("who-we-are-content");
        window.scrollTo(0, scrollArea[0].clientHeight);
        this.closeMobileMenu();
      } else {
        this.$router.push({ path: this.$t("homePageURL") });
        setTimeout(() => {
          const scrollArea =
            document.getElementsByClassName("who-we-are-content");
          window.scrollTo(0, scrollArea[0].clientHeight);
        }, 1000);
        this.closeMobileMenu();
      }
    },
  },
};
</script>
<style lang="scss">
.hamburger-menu {
  padding: 0 20px;
  .hamburger-menu-header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    .material-symbols-outlined {
      color: #77797a;
    }
  }
  .hamburger-menu-list {
    border-bottom: 1px solid #f2f4f7;
    .menu-list {
      padding: 36px 0;
      li {
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        margin-bottom: 32px;
        &:last-child {
          margin-bottom: 0;
        }
        button {
          padding: 0;
          margin: 0;
          font-size: 13px;
          font-weight: 700;
          line-height: 16px;
        }
        .another-site-link{
          font-size: 13px;
          font-weight: 700;
          line-height: 16px;
        }
      }
    }
  }
  .menu-button {
    padding: 24px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .lang-content{
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      img{
        margin-right: 8px;
      }
    }
    ul {
      li {
        margin-bottom: 20px;
        display: flex;
        color: #494c4e;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        img{
          margin-right: 8px;
        }
        .mobile-link {
          img {
            margin-right: 8px;
          }
        }
      }
    }
    button {
      width: 100%;
    }
  }
}
</style>
