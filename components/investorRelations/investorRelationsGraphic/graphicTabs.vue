<template>
  <div class="graphic-tabs container">
    <ul class="tabs-content">
      <li @click="selectedTab = 1">Genel</li>
      <li @click="selectedTab = 2">Profil</li>
      <li @click="selectedTab = 3">Grafik</li>
      <li @click="selectedTab = 4">Haberler</li>
      <li @click="selectedTab = 5">Sermaye</li>
      <li @click="selectedTab = 6">Getiri</li>
      <li @click="selectedTab = 7">Bilanço Detay</li>
      <li @click="selectedTab = 8">Bilanço</li>
    </ul>
    <div class="graphics">
      <generalGraphicTable v-if="selectedTab === 1" />
      <periodTabs />
    </div>
  </div>
</template>
<script>
import generalGraphicTable from "./generalGraphicTable.vue";
import periodTabs from "./periodTabs.vue";
export default {
  components: { generalGraphicTable, periodTabs },
  data() {
    return {
      selectedTab: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
.graphic-tabs {
  .tabs-content {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;
    li {
      cursor: pointer;
      padding: 16px;
      color: #77797a;
      font-size: 18px;
      font-weight: 450;
    }
  }
  .graphics {
    display: flex;
    justify-content: space-between;
  }
}
</style>
