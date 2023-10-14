<template>
    <div>
      <div class="pdf-content-detail">
        <button class="pdf-button" @click="toggleCollapse">
          <span v-if="isCollapsed" class="material-symbols-outlined"> expand_less </span>
          <span v-else class="material-symbols-outlined">
            expand_more
          </span>
         2012 Faaliyet Raporu
        </button>
        <div class="pdf-content-detail" v-if="isCollapsed">
          <button class="pdf-button" @click="pdf2012()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
         Faaliyet Raporu(31.12.2012) - 2012-12-31
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
      pdf2012() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-2012.pdf";
  
        // PDF dosyasını indirmek için bir a etiketi oluşturun
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-2012.pdf"; // İndirilen dosyanın adını burada belirleyebilirsiniz
        link.click();
      },
    },
  };
  </script>