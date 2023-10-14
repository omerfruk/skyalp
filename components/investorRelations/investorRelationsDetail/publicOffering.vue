<template>
    <div class="pdf-content">
      <p class="corporate-info">Halka Arz</p>
      <div class="pdf-content-detail">
        
        <button class="pdf-button" @click="pdfOne()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Fiyat Tespit Raporu
        </button>
        <button class="pdf-button" @click="pdfTwo()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
         Hukuki Beyan
        </button>
        <button class="pdf-button" @click="pdfThree()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
         Onay ve Uyum Beyanı
        </button>
        <button class="pdf-button" @click="pdfFour()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
         Piyasa Danışmanı Raporu
        </button>
        <button class="pdf-button" @click="pdfFive()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
         Risk Bildirim Formu
        </button>
        <button class="pdf-button" @click="pdfSix()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
         Tasarruf Sahipleri Sirküleri
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
        pdfOne() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/fiyat-tespit-raporu.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "fiyat-tespit-raporu.pdf";
        link.click();
      },
      pdfTwo() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/hukuki-beyan.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "hukuki-beyan.pdf";
        link.click();
      },
      pdfThree() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/onay-ve-uyum-beyani.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "onay-ve-uyum-beyani.pdf";
        link.click();
      },
      pdfFour() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/piyasa-danismani-raporu.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "piyasa-danismani-raporu.pdf";
        link.click();
      },
      pdfFive() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/risk-bildirim-formu.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "risk-bildirim-formu.pdf";
        link.click();
      },
      pdfSix() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/tasarruf-sahipleri-sirküleri.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "tasarruf-sahipleri-sirküleri.pdf";
        link.click();
      }
    },
  };
  </script>