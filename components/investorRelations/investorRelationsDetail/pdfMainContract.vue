<template>
    <div class="pdf-content">
      <p class="corporate-info">Esas Sözleşme</p>
      <div class="pdf-content-detail">
        
        <button class="pdf-button" @click="pdfMainContract()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Esas Sözleşme
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
        pdfMainContract() {
        // PDF dosyasının URL'ini buraya yazın veya isteğe bağlı olarak bir API çağrısı yapın
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/esas-sozlesme.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "esas-sozlesme.pdf"; // İndirilen dosyanın adını burada belirleyebilirsiniz
  
        link.click();
      },
    
    }
  };
  </script>
  