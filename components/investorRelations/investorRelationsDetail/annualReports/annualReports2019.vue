<template>
    <div>
      <div class="pdf-content-detail">
        <button class="pdf-button" @click="toggleCollapse">
          <span v-if="isCollapsed" class="material-symbols-outlined"> expand_less </span>
          <span v-else class="material-symbols-outlined">
            expand_more
          </span>
          2019 Olağan Genel Kurul
        </button>
        <div class="pdf-content-detail" v-if="isCollapsed">
          <button class="pdf-button" @click="pdfOne()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            2019 Olağan Genel Kurul Toplantı Tutanağı
          </button>
          <button class="pdf-button" @click="pdfTwo()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Hazır Bulunanlar Listesi
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
          "https://cdn.napolyon.com/skyalp/images/toplanti-tutanagi-2019.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "hazirun-cetveli.pdf"; // İndirilen dosyanın adını burada belirleyebilirsiniz
  
        // Oluşturulan a etiketini tıklama işlemiyle tetikleyin
        link.click();
      },
      pdfTwo() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/hazir-bulunanlar-listesi-2019.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "toplanti-tutanagi.pdf";
        link.click();
      }
    
    },
  };
  </script>