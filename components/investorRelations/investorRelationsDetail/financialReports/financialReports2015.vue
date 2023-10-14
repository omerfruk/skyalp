<template>
    <div>
      <div class="pdf-content-detail">
        <button class="pdf-button" @click="toggleCollapse">
          <span v-if="isCollapsed" class="material-symbols-outlined"> expand_less </span>
          <span v-else class="material-symbols-outlined">
            expand_more
          </span>
          2015 Yılı Mali Tablolar
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
          <button class="pdf-button" @click="pdfTwo()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Denetimden Geçmemiş Mali Tablolar ve Dipnotları (30.09.2015) - 2015-09-30
          </button>
          <button class="pdf-button" @click="pdfThree()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Denetimden Geçmemiş Mali Tablolar ve Dipnotları (30.06.2015) - 2015-06-30
          </button>
          <button class="pdf-button" @click="pdfFour()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Denetimden Geçmemiş Mali Tablolar ve Dipnotları (31.03.2015) - 2015-03-31
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
          "https://cdn.napolyon.com/skyalp/images/bagimsiz-denetimden-gecmis-mali-tablolar-ve-dipnotlari-2015.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "bagimsiz-denetimden-gecmis-mali-tablolar-ve-dipnotlari-2015.pdf";
        link.click();
      },
      pdfTwo() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/denetimden-gecmemis-mali-tablolar-ve-dipnotlari-30-09-2015.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "denetimden-gecmemis-mali-tablolar-ve-dipnotlari-30-09-2015.pdf";
        link.click();
      },
      pdfThree() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/denetimden-gecmemis-mali-tablolar-ve-dipnotlari-30-06-2015.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "denetimden-gecmemis-mali-tablolar-ve-dipnotlari-30-06-2015.pdf";
        link.click();
      },
      pdfFour() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/denetimden-gecmemis-mali-tablolar-ve-dipnotlari-31.03.2015.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "denetimden-gecmemis-mali-tablolar-ve-dipnotlari-31-03-2015.pdf";
        link.click();
      }
    },
  };
  </script>