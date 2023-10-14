<template>
  <div>
    <div class="pdf-content-detail">
      <button class="pdf-button" @click="toggleCollapse">
        <span v-if="isCollapsed" class="material-symbols-outlined">
          expand_less
        </span>
        <span v-else class="material-symbols-outlined"> expand_more </span>
        2016 Faaliyet Raporu
      </button>
      <div class="pdf-content-detail" v-if="isCollapsed">
        <button class="pdf-button" @click="pdf2016()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Faaliyet Raporu(31.12.2016) - 2016-12-31
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
    pdf2016() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/faaliyet-raporu-31.12.2016.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "faaliyet-raporu-31.12.2016.pdf";
        link.click();
      },
  },
};
</script>
