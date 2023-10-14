<template>
  <div class="invest-card rubik-family">
    <img class="isDesktop" width="340" height="380" :src="list.image" alt="invest" />
    <img class="isMobile"
         style="width: 100%; object-fit: contain"
         height="380" :src="list.image" alt="invest" />
    <p class="little-title">{{ list.littleTitle }}</p>
    <p class="header-title">{{ list.header }}</p>
    <p class="card-exp">{{ truncatedDescription }}

    </p>
    <p v-if="(!isTruncated || list.description.length < 200) && list.italicText" class="italic-text">{{ list.italicText }}</p>
    <div class="card-bottom-content">
      <button class="learn-more" @click="toggleTruncate" v-if="isTruncated && list.description.length > 200">
        {{ $t("learnMore") }}
      </button>
      <button class="learn-more" @click="toggleTruncate" v-if="!isTruncated">
        {{ $t("showLess") }}
      </button>
      <a class="web-site" target="_blank" :href="list.website">
        {{ $t("viewWebsite") }}
        <span class="material-symbols-outlined"> north_east </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isTruncated: true,
    };
  },
  computed: {
    // filter ile de yapılabilirdi.Computed ile yapmamızın sebebi description değiştiğinde otomatik olarak yeniden hesaplamasıdır.
    truncatedDescription() {
      if (this.isTruncated) {
        if (this.list.description.length > 200) {
          return this.list.description.substring(0, 200) + '...';
        } else {
          return this.list.description;
        }
      } else {
        return this.list.description;
      }
    },
  },
  methods: {
    toggleTruncate() {
      this.isTruncated = !this.isTruncated;
    },
  }
};
</script>
<style lang="scss" scoped>
.isMobile{
  display: none;
  @media only screen and (max-width: 1200px) {
    display: block;
  }
}
.isDesktop{
  display: block;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
}
.invest-card {
  margin-right: 5px;
  @media only screen and (max-width: 1200px) {
    margin-bottom: 25px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .little-title {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #e55929;
    margin-top: 22px;
    margin-bottom: 14px;
  }
  .header-title {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 16px;
    color: #1c1f22;
  }
  .italic-text{
    margin-top: 5px;
    font-style: italic;
    font-size: 14px;
    opacity: 0.7;
  }
  .card-exp {
    font-size: 16px;
    font-weight: 450;
    line-height: 20px;
    color: #494c4e;
  }
  .card-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    .learn-more {
      border-bottom: 1px solid #1c1f22;
      font-size: 18px;
      font-weight: 450;
      line-height: 26px;
      color: #1c1f22;
    }
    .web-site {
      font-size: 18px;
      font-weight: 450;
      line-height: 42px;
      color: #d73828;
      span{
        vertical-align: middle;
      }
    }
  }
}
</style>
