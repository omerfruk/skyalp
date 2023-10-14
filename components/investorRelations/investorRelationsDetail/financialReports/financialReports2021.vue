<template>
    <div>
      <div class="pdf-content-detail">
        <button class="pdf-button" @click="toggleCollapse">
          <span v-if="isCollapsed" class="material-symbols-outlined"> expand_less </span>
          <span v-else class="material-symbols-outlined">
            expand_more
          </span>
          2021 Yılı Mali Tablolar
        </button>
        <div class="pdf-content-detail" v-if="isCollapsed">
          <button class="pdf-button" @click="pdfOne()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Denetimden Geçmiş Mali Tablolar ve Dipnotları (30.06.2021) - 2021-08-17
          </button>
          <button class="pdf-button" @click="pdfTwo()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Denetimden Geçmiş Mali Tablolar ve Dipnotları (30.09.2021) - 2021-11-10
          </button>
          <button class="pdf-button" @click="pdfThree()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Denetimden Geçmiş Mali Tablolar ve Dipnotları (31.04.2021) - 2021-06-03
          </button>
          <button class="pdf-button" @click="pdfFour()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
            Denetimden Geçmiş Mali Tablolar ve Dipnotları (31.12.2021) - 2022-03-08
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
          "https://cdn.napolyon.com/skyalp/images/denetimden-gecmis-mali-tablolar-ve-dipnotlari-30-06-2021.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "denetimden-gecmis-mali-tablolar-ve-dipnotlari-2021.pdf";
        link.click();
      },
      pdfTwo() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/denetimden-gecmis-mali-tablolar-ve-dipnotlari-30-09-2021.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "denetimden-gecmis-mali-tablolar-ve-dipnotlari-30-09-2021.pdf";
        link.click();
      },
      pdfThree() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/denetimden-gecmis-mali-tablolar-ve-dipnotlari-31-04-2021.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "denetimden-gecmis-mali-tablolar-ve-dipnotlari-31-04-2021.pdf";
        link.click();
      },
      pdfFour() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/denetimden-gecmis-mali-tablolar-ve-dipnotlari-31-12-2021.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "denetimden-gecmis-mali-tablolar-ve-dipnotlari-31-12-2021.pdf";
        link.click();
      }
    },
  };
  </script>