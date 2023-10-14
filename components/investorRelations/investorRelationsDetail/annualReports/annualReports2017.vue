<template>
    <div>
      <div class="pdf-content-detail">
        <button class="pdf-button" @click="toggleCollapse">
          <span v-if="isCollapsed" class="material-symbols-outlined"> expand_less </span>
          <span v-else class="material-symbols-outlined">
            expand_more
          </span>
          2017 Olağan Genel Kurul
        </button>
        <div class="pdf-content-detail" v-if="isCollapsed">
          <button class="pdf-button" @click="pdfOne()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            2017 Olağan Genel Kurul Toplantı Tutanağı
          </button>
          <button class="pdf-button" @click="pdfThree()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            2017 Yılı Kar Dağıtım Teklifi
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
            İlan Metni
          </button>
          <button class="pdf-button" @click="pdfSeven()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Vekaletname
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
          "https://cdn.napolyon.com/skyalp/images/toplanti-tutanagi-2017.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "toplanti-tutanagi-2017.pdf";
        link.click();
      },
      pdfThree() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/2017-yili-kar-dagitim-teklifi.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "2017-yili-kar-dagitim-teklifi.pdf";
        link.click();
      },
      pdfFour() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/gundem-2017.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "gundem.pdf";
        link.click();
      },
      pdfFive() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/hazir-bulunanlar-listesi-2017.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "hazir-bulunanlar-listesi.pdf";
        link.click();
      },
      pdfSix() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/ilan-metni-2017.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "ilan-metni-2017.pdf";
        link.click();
      },
      pdfSeven() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/vekaletname-2017.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "vekaletname-2017.pdf";
        link.click();
      }
    
    },
  };
  </script>