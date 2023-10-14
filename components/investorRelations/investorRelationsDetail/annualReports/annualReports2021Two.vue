<template>
    <div>
      <div class="pdf-content-detail">
        <button class="pdf-button" @click="toggleCollapse">
          <span v-if="isCollapsed" class="material-symbols-outlined"> expand_less </span>
          <span v-else class="material-symbols-outlined">
            expand_more
          </span>
          2021 Olağanüstü Genel Kurul
        </button>
        <div class="pdf-content-detail" v-if="isCollapsed">
          <button class="pdf-button" @click="pdfOne()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            2021 Olağanüstü Genel Kurul Toplantı Tutanağı
          </button>
          <button class="pdf-button" @click="pdfThree()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
           Bilgilendirme Dökümanı
          </button>
          <button class="pdf-button" @click="pdfFour()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Gündem
          </button>
          <button class="pdf-button" @click="pdfFive()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Hazır Bulunanlar Listesi
          </button>
          <button class="pdf-button" @click="pdfSix()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Davet Duyurusu
          </button>
          <button class="pdf-button" @click="pdfSeven()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Kar Dağıtım Politikası
          </button>
          <button class="pdf-button" @click="pdfEight()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Esas Sözleşme Tadil Metni
          </button>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        imageURL: process.env.baseImgUrl,
        isCollapsed: false,
      };
    },
    methods: {
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      },
      pdfOne() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/toplanti-tutanagi-2021-2.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "toplanti-tutanagi-2021-2.pdf";
        link.click();
      },
      pdfThree() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/bilgilendirme-dokumani-2021-2.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "bilgilendirme-dokumani-2021.pdf";
        link.click();
      },
      pdfFour() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/gundem-2021-2.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "gundem.pdf";
        link.click();
      },
      pdfFive() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/hazir-bulunanlar-listesi-2021-2.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "hazir-bulunanlar-listesi.pdf";
        link.click();
      },
      pdfSix() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/davet-duyurusu-2021-2.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "davet-duyurusu-2021.pdf";
        link.click();
      },
      pdfSeven() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/kar-dagitim-politikasi-2021-2.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "kar-dagitim-politikasi-2021-2.pdf";
        link.click();
      },
      pdfEight() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/esas-sozlesme-tadil-metni.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "esas-sozlesme-tadil-metni.pdf";
        link.click();
      }
    },
  };
  </script>