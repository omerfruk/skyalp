<template>
    <div>
      <div class="pdf-content-detail">
        <button class="pdf-button" @click="toggleCollapse">
          <span v-if="isCollapsed" class="material-symbols-outlined"> expand_less </span>
          <span v-else class="material-symbols-outlined">
            expand_more
          </span>
         2014 Faaliyet Raporu
        </button>
        <div class="pdf-content-detail" v-if="isCollapsed">
            <button class="pdf-button" @click="pdf2014()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(31.12.2014) - 2014-12-31
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
      pdf2014() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-2014.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-2014.pdf";
        link.click();
      },
    },
  };
  </script>