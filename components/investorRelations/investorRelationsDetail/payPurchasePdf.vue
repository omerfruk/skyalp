<template>
    <div class="pdf-content">
      <p class="corporate-info">{{ $t('payPurchase') }}</p>
      <div class="pdf-content-detail">
        
        <button class="pdf-button" @click="pdfOne()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          MCTAS Pay Alım Teklifi Talep Formu - 2018-09-20
        </button>
        <button class="pdf-button" @click="pdfTwo()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          MCTAS Pay Alım Teklifi Bilgi Formu - 2018-09-24
        </button>
        <button class="pdf-button" @click="pdfThree()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          MCTAS Pay Alım Teklifine İlişkin Bilgilendirme Formu - 2018-01-25
        </button>
        <button class="pdf-button" @click="pdfFour()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          MCTAS Pay Alım Teklifi Talep Formu - 2018-01-25
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
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/mctas-pay-alim-teklifi-talep-formu-20-09-2018.pdf";
  
        // PDF dosyasını indirmek için bir a etiketi oluşturun
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "pay-alim-teklifi-talep-formu-20-09-2018.pdf"; // İndirilen dosyanın adını burada belirleyebilirsiniz
  
        // Oluşturulan a etiketini tıklama işlemiyle tetikleyin
        link.click();
      },
      pdfTwo() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/mctas-pay-alim-teklifi-bilgi-formu-24-09-2018.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "pay-alim-teklifi-bilgi-formu-24-09-2018.pdf" 
        link.click();
      },
      pdfThree() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/mctas-pay-alim-teklifine-iliskin-bilgilendirme-formu-25-01-2018.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "pay-alim-teklifine-iliskin-bilgilendirme-formu-25-01-2018.pdf";
        link.click();
      },
      pdfFour() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/mctas-pay-alim-teklifi-talep-formu-25-01-2018.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "pay-alim-teklifi-talep-formu-25-01-2018.pdf";
        link.click();
      }
    },
  };
  </script>