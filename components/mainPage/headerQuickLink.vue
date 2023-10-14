<template>
  <div class="header-quick-link">
    <ul :class="{ 'scrolled-text': isScrolled }" class="top-links">
         <li class="language-content">
        <img :src="imageURL + 'lang.svg'" alt="pdp" width="15" height="15" />
        <img
            v-if="isScrolled"
            :src="imageURL + 'lang-black.png'"
            alt="pdp"
            width="15"
            height="15"
          />
       <languageSwitch/>
      </li>
     
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
              $route.fullPath.includes($t('announcementURL')) && isScrolled,
          }"
          :to="$t('announcementURL')"
        >
          <img
            v-if="$route.fullPath.includes($t('announcementURL')) && isScrolled"
            :src="imageURL + 'announcement-red.svg'"
            alt="pdp"
            width="15"
            height="15"
          />
          <img
            v-else-if="
              $route.fullPath.includes($t('announcementURL')) && !isScrolled
            "
            :src="imageURL + 'announcement-yellow.svg'"
            alt="pdp"
            width="15"
            height="15"
          />
          <img
            v-else-if="
              !$route.fullPath.includes($t('announcementURL')) && isScrolled
            "
            :src="imageURL + 'announcement-black.svg'"
            alt="pdp"
            width="15"
            height="15"
          />
          <img
            v-else
            :src="imageURL + 'announcement.svg'"
            alt="pdp"
            width="15"
            height="15"
          />
          {{ $t("announcement") }}
        </nuxt-link>
      </li>
      <li
        :class="{
          'active-link': $route.fullPath.includes($t('investorRelationsURL')),
        }"
      >
        <nuxt-link
          :class="{
            'active-link-style': $route.fullPath.includes(
              $t('investorRelationsURL')
            ),
            'active-link':
              $route.fullPath.includes($t('investorRelationsURL')) &&
              isScrolled,
          }"
          class="header-link"
          :to="$t('investorRelationsURL')"
        >
          <img
            v-if="
              $route.fullPath.includes($t('investorRelationsURL')) && isScrolled
            "
            :src="imageURL + 'investor-relations-red.svg'"
            alt="pdp"
            width="15"
            height="15"
          />
          <img
            v-else-if="
              $route.fullPath.includes($t('investorRelationsURL')) &&
              !isScrolled
            "
            :src="imageURL + 'investor-relations-yellow.svg'"
            alt="pdp"
            width="15"
            height="15"
          />
          <img
            v-else-if="
              !$route.fullPath.includes($t('investorRelationsURL')) &&
              isScrolled
            "
            :src="imageURL + 'investor-relations-black.svg'"
            alt="pdp"
            width="15"
            height="15"
          />
          <img
            v-else
            :src="imageURL + 'relations.svg'"
            alt="pdp"
            width="15"
            height="15"
          />
          {{ $t("investorRelations") }}
        </nuxt-link>
      </li>
    </ul>
    <ul
      :class="{ 'scrolled-text': isScrolled }"
      class="header-link-content rubik-family"
    >
      <li>
        <button class="header-link" @click="focusElement()">
          {{ $t("whoWeAre") }}
        </button>
        <div class="hover-link"></div>
      </li>
      <li>
        <nuxt-link class="header-link" :to="$t('ourCompaniesURL')">
          {{ $t("ourCompaniesBold") }}
        </nuxt-link>
        <div class="hover-link"></div>
      </li>
      <li>
        <nuxt-link class="header-link" :to="$t('investmentsURL')">
          {{ $t("investTextBold") }}
        </nuxt-link>
        <div
          class="hover-link"
          :class="{
            'active-link': $route.fullPath.includes($t('investmentsURL')),
          }"
        ></div>
      </li>
      <li>
        <nuxt-link class="header-link" :to="$t('cultureAndCareerURL')">
          {{ $t("cultureAndCareerText") }}
        </nuxt-link>
        <div class="hover-link"></div>
      </li>
      <li>
        <button
          :class="{ 'scrolled-button': isScrolled }"
          class="main-page-button rubik-family"
          @click="scrollToFooter()"
        >
          {{ $t("contactUsBold") }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
import languageSwitch from "../shared/languageSwitch.vue";
export default {
  components: {
    languageSwitch,
  },
  data() {
    return {
      isScrolled: false,
      imageURL: process.env.baseImgUrl,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    scrollToFooter() {
      window.scrollTo(0, document.body.scrollHeight);
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
      } else {
        this.$router.push({ path: "/" });
        setTimeout(() => {
          const scrollArea =
            document.getElementsByClassName("who-we-are-content");
          window.scrollTo(0, scrollArea[0].clientHeight);
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-quick-link {
  position: relative;
  .top-links {
    display: flex;
    align-items: center;
    color: #d2d2d3;
    position: absolute;
    right: 0;
    top: -17px;
    .language-content {
      display: flex;
      img{
        margin-top: 5px;
      }
    }
    li {
      img {
        margin-right: 8px;
      }
      padding-right: 20px;
      border-right: 1px solid #d2d2d3;
      &:nth-child(2) {
        padding-left: 20px;
      }
      &:last-child {
        padding-left: 20px;
        border-right: none;
      }
      select {
        background: transparent;
        border: none;
        color: #d2d2d3;
      }
    }
  }
  .header-link-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    gap: 20px;
    li {
      position: relative;
      .hover-link {
        display: none;
      }
      &:hover {
        .hover-link {
          display: block;
          position: absolute;
          z-index: 9999999;
          bottom: -32px;
          border-bottom: 3px solid #f0be57;
          left: 0px;
          width: 100%;
          height: 10px;
        }
      }
      .header-link {
        display: inline-block;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        color: white;
      }

      .main-page-button {
        background: transparent;
        color: white;
        border: 1px solid white;
        margin-top: 12px;
        &:hover {
          background: rgba(51, 53, 56, 0.14);
        }
      }
      .scrolled-button {
        background: white;
        color: #333538;
        border: 1px solid #333538;
      }
    }
  }
}
.active-link {
  color: #f0be57 !important;
  display: block !important;
}
.scrolled-text {
  li {
    .active-link.header-link {
      color: #d73828 !important;
    }
    .header-link {
      color: #333538 !important;
    }
    &:hover {
      .hover-link {
        display: block;
        position: absolute;
        z-index: 9999999;
        bottom: -32px;
        border-bottom: 3px solid #d73828 !important;
        left: 0px;
        width: 100%;
        height: 10px;
      }
    }
  }
}
</style>
