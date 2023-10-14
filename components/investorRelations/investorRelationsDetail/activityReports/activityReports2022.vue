<template>
  <div>
    <div class="pdf-content-detail">
      <button class="pdf-button" @click="toggleCollapse">
        <span v-if="isCollapsed" class="material-symbols-outlined">
          expand_less
        </span>
        <span v-else class="material-symbols-outlined"> expand_more </span>
        2022 Faaliyet Raporu
      </button>
      <div class="pdf-content-detail" v-if="isCollapsed">
        <button class="pdf-button" @click="pdf2022Three()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(31.03.2022)
        </button>
        <button class="pdf-button" @click="pdf2022One()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(30.06.2022)
        </button>
        <button class="pdf-button" @click="pdf2022Two()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(30.09.2022) - 2022-09-30
        </button>
        <button class="pdf-button" @click="pdf2022Four()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu (31.12.2022)
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
    pdf2022One() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-30.06.2022.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-30.06.2022.pdf";
        link.click();
      },
      pdf2022Two() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-30.09.2022-2022-09-30.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-30.09.2022-2022-09-30.pdf";
        link.click();
      },
      pdf2022Three() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-31.03.2022.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-31.03.2022.pdf";
        link.click();
      },
      pdf2022Four() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-31.12.2022.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-31.12.2022.pdf";
        link.click();
      },
  },
};
</script>
