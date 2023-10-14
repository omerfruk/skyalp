<template>
    <div class="pdf-content">
      <p class="corporate-info">{{ $t('disclosureToBist') }}</p>
      <div class="pdf-content-detail">
        
        <button class="pdf-button" @click="pdfOne()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Kurumsal Yönetim Bilgi Formu 2020
        </button>
        <button class="pdf-button" @click="pdfTwo()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Kurumsal Yönetim Uyum Raporu 2020
        </button>
        <button class="pdf-button" @click="pdfThree()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Kurumsal Yönetim Bilgi Formu 2021
        </button>
        <button class="pdf-button" @click="pdfFour()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Kurumsal Yönetim Uyum Raporu 2021
        </button>
        <button class="pdf-button" @click="pdfFive()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Kurumsal Yönetim Bilgi Formu 2022
        </button>
        <button class="pdf-button" @click="pdfSix()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Kurumsal Yönetim Uyum Raporu 2022
        </button>
        <button class="pdf-button" @click="pdfSeven()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Sürdürülebilirlik Uyum Raporu 2022
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
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/kurumsal-yonetim-bilgi-formu-2020.pdf";
  
        // PDF dosyasını indirmek için bir a etiketi oluşturun
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "kurumsal-yonetim-bilgi-formu.pdf"; // İndirilen dosyanın adını burada belirleyebilirsiniz
  
        // Oluşturulan a etiketini tıklama işlemiyle tetikleyin
        link.click();
      },
      pdfTwo() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/kurumsal-yonetim-uyum-raporu-2020.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "kurumsal-yonetim-uyum-raporu-2020.pdf";
        link.click();
      },
      pdfThree() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/kurumsal-yonetim-bilgi-formu-2021.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "kurumsal-yonetim-bilgi-formu-2021.pdf";
        link.click();
      },
      pdfFour() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/kurumsal-yonetim-uyum-raporu-2021.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "kurumsal-yonetim-uyum-raporu-2021.pdf";
        link.click();
      },
      pdfFive() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/kurumsal-yonetim-bilgi-formu-2022.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "kurumsal-yonetim-bilgi-formu-2022.pdf";
        link.click();
      },
      pdfSix() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/kurumsal-yonetim-uyum-raporu-2022.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "kurumsal-yonetim-uyum-raporu-2022.pdf";
        link.click();
      },
      pdfSeven() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/surdurebilirlik-uyum-raporu-2022.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "surdurebilirlik-uyum-raporu-2022.pdf";
        link.click();
      }
    },
  };
  </script>