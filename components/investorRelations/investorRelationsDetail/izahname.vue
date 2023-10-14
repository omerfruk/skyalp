<template>
    <div class="pdf-content">
      <p class="corporate-info">İzahname</p>
      <div class="pdf-content-detail">
        
        <button class="pdf-button" @click="pdfOne()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          İzahname
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageURL: process.env.baseImgUrl,
      };
    },
    methods: {
        pdfOne() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/İzahname.pdf";
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "İzahname.pdf";
        link.click();
      }
    },
  };
  </script>