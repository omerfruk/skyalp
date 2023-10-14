<template>
  <div>
    <div class="pdf-content-detail">
      <button class="pdf-button" @click="toggleCollapse">
        <span v-if="isCollapsed" class="material-symbols-outlined">
          expand_less
        </span>
        <span v-else class="material-symbols-outlined"> expand_more </span>
        2023 Yılı Mali Tablolar
      </button>
      <div class="pdf-content-detail" v-if="isCollapsed">
        <button class="pdf-button" @click="pdfThree()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
          Ideas 31.03.2023
          </button>
        <button class="pdf-button" @click="pdfTwo()">
            <img
              :src="imageURL + 'pdf-icon.svg'"
              alt="pdf-icon"
              width="21"
              height="24"
            />
          2023 Ideas Bağımsız Denetim Raporu
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
    pdfTwo() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/ideas-bagimsiz-denetim-raporu-2023-2.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "ideas-bagimsiz-denetim-raporu-2023-2.pdf";
        link.click();
      },
      pdfThree() {
        const pdfUrl =
          "https://cdn.napolyon.com/skyalp/images/ideas-31032023.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "ideas-31032023.pdf";
        link.click();
      }
  },
};
</script>
