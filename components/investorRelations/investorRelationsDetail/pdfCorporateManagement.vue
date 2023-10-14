<template>
    <div class="pdf-content">
      <p class="corporate-info">Kurumsal Yönetim</p>
      <div class="pdf-content-detail">
        
        <button class="pdf-button" @click="pdfOne()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Kurumsal Yönetim Komitesi Görev ve Çalışma Esasları
        </button>
        <button class="pdf-button" @click="pdfTwo()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Bilgilendirme Politikası
        </button>
        <button class="pdf-button" @click="pdfThree()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Denetimden Sorumlu Komite Görev ve Çalışma Esasları
        </button>
        <button class="pdf-button" @click="pdfFour()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Etik Kurallar
        </button>
        <button class="pdf-button" @click="pdfFive()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Riskin Erken Saptanması Komitesi Görev ve Çalışma Esasları
        </button>
        <button class="pdf-button" @click="pdfSix()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Tazminat Politikası
        </button>
        <button class="pdf-button" @click="pdfSeven()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Ücretlendirme Politikası
        </button>
        <button class="pdf-button" @click="pdfEight()">
          <img
            :src="imageURL + 'pdf-icon.svg'"
            alt="pdf-icon"
            width="21"
            height="24"
          />
          Kar Dağıtım Politikası
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
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/kurumsal-yonetim-komitesi-gorev-calisma-esaslari.pdf";
  
        // PDF dosyasını indirmek için bir a etiketi oluşturun
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "kurumsal-yonetim-komitesi-gorev-calisma-esaslari.pdf"; // İndirilen dosyanın adını burada belirleyebilirsiniz
  
        // Oluşturulan a etiketini tıklama işlemiyle tetikleyin
        link.click();
      },
      pdfTwo() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/bilgilendirme-politikasi.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "bilgilendirme-politikasi.pdf";
        link.click();
      },
      pdfThree() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/denetimden-sorumlu-komite-gorev-calisma-esaslari.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "denetimden-sorumlu-komite-görev-calisma-esaslari.pdf";
        link.click();
      },
      pdfFour() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/etik-kurallar.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "etik-kurallar.pdf";
        link.click();
      },
      pdfFive() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/riskin-erken-saptanmasi.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "riskin-erken-saptanmasi.pdf";
        link.click();
      },
      pdfSix() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/tazminat-politikasi.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "tazminat-politikasi.pdf";
        link.click();
      },
      pdfSeven() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/ucretlendirme-politikasi.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "ucretlendirme-politikasi.pdf";
        link.click();
      },
      pdfEight() {
        const pdfUrl = "https://cdn.napolyon.com/skyalp/images/kar-dagitim-politikasi.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "kar-dagitim-politikasi.pdf";
        link.click();
      },
    },
  };
  </script>
  
  