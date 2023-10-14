<template>
    <div class="pdf-content">
      <p class="corporate-info">{{ $t('announcement') }}</p>
      <div class="pdf-content-detail">
        
        <button class="pdf-button" @click="pdfOne()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Fonun Kullanım Yerlerine İlişkin YKK ve Rapor
        </button>
        <button class="pdf-button" @click="pdfTwo()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Genel Kurul Yatırımcı Sorusu Hakkında Duyuru
        </button>
        <button class="pdf-button" @click="pdfThree()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          İhraç Belgesi
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
        // PDF dosyasının URL'ini buraya yazın veya isteğe bağlı olarak bir API çağrısı yapın
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/fonun-kullanim-yerlerine-iliskin-ykk-ve-rapor.pdf";
  
        // PDF dosyasını indirmek için bir a etiketi oluşturun
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "fonun-kullanim-yerlerine-iliskin-ykk-ve-rapor.pdf"; // İndirilen dosyanın adını burada belirleyebilirsiniz
  
        // Oluşturulan a etiketini tıklama işlemiyle tetikleyin
        link.click();
      },
      pdfTwo() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/genel-kurul-yatirimci-sorusu-hakkinda-duyuru.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "genel-kurul-yatirimci-sorusu-hakkinda-duyuru.pdf" 
        link.click();
      },
      pdfThree() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/ihrac-belgesi.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "ihrac-belgesi.pdf";
        link.click();
      },
    },
  };
  </script>