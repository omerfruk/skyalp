<template>
    <div>
      <div class="pdf-content-detail">
        <button class="pdf-button" @click="toggleCollapse">
          <span v-if="isCollapsed" class="material-symbols-outlined"> expand_less </span>
          <span v-else class="material-symbols-outlined">
            expand_more
          </span>
          2011 Yılı Mali Tablolar
        </button>
        <div class="pdf-content-detail" v-if="isCollapsed">
          <button class="pdf-button" @click="pdfOne()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Bağımsız Denetimden Geçmiş Mali Tablolar ve Dipnotları
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
          "https://cdn.napolyon.com/skyalp/images/bagimsiz-denetimden-gecmis-mali-tablolar-2011.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "bagimsiz-denetimden-gecmis-mali-tablolar-2011.pdf"; // İndirilen dosyanın adını burada belirleyebilirsiniz
        link.click();
      }
    },
  };
  </script>