<template>
  <div v-if="dataTable" class="graphic-table">
    <div class="header-table">
      <p>{{ dataTable.SonFiyat }}</p>
      <p>
        {{ dataTable.Fark }}
        <span>(%{{ dataTable.FarkYuzde }})</span>
      </p>
    </div>
    <p>Son Güncellenme Tarih : {{ dataTable.Tarih }}</p>
    <div class="data-content">
      <div class="data-detail">
        <ul class="detail-list">
          <li>
            <p>Son Fiyat</p>
            <p>{{ dataTable.SonFiyat }}</p>
          </li>
          <li>
            <p>Açılış</p>
            <p>{{ dataTable.Acilis }}</p>
          </li>
          <li>
            <p>Yüksek</p>
            <p>{{ dataTable.Yuksek }}</p>
          </li>
          <li>
            <p>Düşük</p>
            <p>{{ dataTable.Dusuk }}</p>
          </li>
          <li>
            <p>Hacim</p>
            <p>{{ dataTable.Acilis }}</p>
          </li>
          <li>
            <p>Ortalama</p>
            <p>{{ dataTable.Acilis }}</p>
          </li>
          <li>
            <p>Yıllık Değişim</p>
            <p>{{ dataTable.Acilis }}</p>
          </li>
        </ul>
        <ul class="detail-list">
          <li>
            <p>Piyasa Değeri</p>
            <p>{{ dataTable.PiyasaDegeri }}</p>
          </li>
          <li>
            <p>Bilanço Dönemi</p>
            <p>{{ dataTable.BilancoDonemi }}</p>
          </li>
          <li>
            <p>Sermaye</p>
            <p>{{ dataTable.Sermaye }}</p>
          </li>
          <li>
            <p>Özsermaye</p>
            <p>{{ dataTable.OzSermaye }}</p>
          </li>
          <li>
            <p>Defter Değeri</p>
            <p>{{ dataTable.DefterDegeri }}</p>
          </li>
          <li>
            <p>PD/DD</p>
            <p>{{ dataTable.PiyDegDefterDeg }}</p>
          </li>
          <li>
            <p>FK</p>
            <p>{{ dataTable.FK }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dataTable: null,
    };
  },
  mounted() {
    this.getTableDataFromAPI();
  },
  methods: {
    async getTableDataFromAPI() {
      try {
        const response = await axios.get(
          "https://atayi.idealdata.com.tr:3000/cmd=SirketDetay?symbol=IDEAS?lang=tr"
        );
        if (response) {
          this.dataTable = response.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.graphic-table {
  .header-table {
    display: flex;
  }
  .data-content {
    .data-detail{
        display: flex;
        justify-content: space-between;
        .detail-list {
      li {
        display: flex;
        justify-content: space-between;
      }
    }
    }
   
  }
}
</style>
