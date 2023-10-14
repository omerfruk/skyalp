<template>
  <div>
    <div class="pdf-content-detail">
      <button class="pdf-button" @click="toggleCollapse">
        <span v-if="isCollapsed" class="material-symbols-outlined">
          expand_less
        </span>
        <span v-else class="material-symbols-outlined"> expand_more </span>
        2018 Faaliyet Raporu
      </button>
      <div class="pdf-content-detail" v-if="isCollapsed">
        <button class="pdf-button" @click="pdf2018One()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(30.06.2018) - 2018-06-30
        </button>
        <button class="pdf-button" @click="pdf2018Two()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(31.12.2018) - 2018-12-31
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

    pdf2018One() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-30.06.2018.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-30.06.2018.pdf";
        link.click();
      },
      pdf2018Two() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-31.12.2018.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-31.12.2018.pdf";
        link.click();
      },
  },
};
</script>
