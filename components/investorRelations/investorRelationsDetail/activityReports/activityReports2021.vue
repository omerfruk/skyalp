<template>
    <div>
      <div class="pdf-content-detail">
        <button class="pdf-button" @click="toggleCollapse">
          <span v-if="isCollapsed" class="material-symbols-outlined">
            expand_less
          </span>
          <span v-else class="material-symbols-outlined"> expand_more </span>
          2021 Faaliyet Raporu
        </button>
        <div class="pdf-content-detail" v-if="isCollapsed">
            <button class="pdf-button" @click="pdf2021Two()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(31.03.2021) - 2021-06-03
        </button>
        <button class="pdf-button" @click="pdf2021Three()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(31.06.2021) - 2021-08-17
        </button>
            <button class="pdf-button" @click="pdf2021One()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(30.09.2021) - 2021-11-10
        </button>
       
       
        <button class="pdf-button" @click="pdf2021Four()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(31.12.2021) - 2022-03-08
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
     
      pdf2021One() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-30.09.2021-2021-11-10.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-30.09.2021-2021-11-10.pdf";
        link.click();
      },
      pdf2021Two() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-31.03.2021-2021-06-03.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-31.03.2021-2021-06-03.pdf";
        link.click();
      },
      pdf2021Three() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-31.06.2021-2021-08-17.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-31.06.2021-2021-08-17.pdf";
        link.click();
      },
      pdf2021Four() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-31.12.2021-2022-03-08.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-31.12.2021-2022-03-08.pdf";
        link.click();
      },
    },
  };
  </script>