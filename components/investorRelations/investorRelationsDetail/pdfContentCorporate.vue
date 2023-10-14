<template>
  <div class="pdf-content">
    <p class="corporate-info">Şirket Bilgileri</p>
    <div class="pdf-content-detail">
      
      <button class="pdf-button" @click="pdfCommonCorporate()">
        <img
          :src="imageURL + 'pdf-icon.svg'"
          alt="pdf-icon"
          width="21"
          height="24"
        />
        Şirketin Ortaklık Yapısı
      </button>
      <button class="pdf-button" @click="pdfPayInfo()">
        <img
          :src="imageURL + 'pdf-icon.svg'"
          alt="pdf-icon"
          width="21"
          height="24"
        />
        İmtiyazlı Pay Bilgileri
      </button>
      <button class="pdf-button" @click="pdfDirectors()">
        <img
          :src="imageURL + 'pdf-icon.svg'"
          alt="pdf-icon"
          width="21"
          height="24"
        />
        Şirketin Yönetim Kurulu
      </button>
      <button class="pdf-button" @click="pdfRegistryInfo()">
        <img
          :src="imageURL + 'pdf-icon.svg'"
          alt="pdf-icon"
          width="21"
          height="24"
        />
        Ticaret Sicil Bilgileri
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageURL: process.env.baseImgUrl,
    };
  },
  methods: {
    pdfCommonCorporate() {
      // PDF dosyasının URL'ini buraya yazın veya isteğe bağlı olarak bir API çağrısı yapın
      const pdfUrl = "https://cdn.napolyon.com/skyalp/images/sirketin-ortaklik-yapisi-new.pdf";

      // PDF dosyasını indirmek için bir a etiketi oluşturun
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "sirketin-ortaklik-yapisi.pdf"; // İndirilen dosyanın adını burada belirleyebilirsiniz

      // Oluşturulan a etiketini tıklama işlemiyle tetikleyin
      link.click();
    },
    pdfPayInfo() {
      // PDF dosyasının URL'ini buraya yazın veya isteğe bağlı olarak bir API çağrısı yapın
      const pdfUrl = "https://cdn.napolyon.com/skyalp/images/imtiyazli-pay-bilgileri.pdf";

      // PDF dosyasını indirmek için bir a etiketi oluşturun
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "imtiyazli-pay-bilgileri.pdf"; // İndirilen dosyanın adını burada belirleyebilirsiniz

      // Oluşturulan a etiketini tıklama işlemiyle tetikleyin
      link.click();
    },
    pdfDirectors() {
      const pdfUrl = "https://cdn.napolyon.com/skyalp/images/sirketin-yonetim-kurulu-new.pdf";

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "sirketin-yönetim-kurulu.pdf"; 
      link.click();
    },
    pdfRegistryInfo() {
      const pdfUrl = "https://cdn.napolyon.com/skyalp/images/ticaret-sicil-bilgileri-new.pdf";

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "ticaret-sicil-bilgileri.pdf"; 
      link.click();
    },
  },
};
</script>
<style lang="scss">
.pdf-content {
  border-radius: 12px;
    background: #fafafa;
    padding: 24px;
    margin-top: 24px;
  .corporate-info {
      color:#101828;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      margin-bottom: 24px;
    }
  .pdf-content-detail {
    display: grid;
    justify-content:start;
    .pdf-button {
      color:#d73828;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      padding: 0;
      text-align: left;
      margin-bottom: 20px !important;
      .material-symbols-outlined{
        vertical-align: middle;
      }
      &:last-child{
           margin-bottom: 0;
        }
    }
  }
}
</style>
