<template>
  <div class="get-in-touch">
    <div class="container content">
      <div v-if="currentIndex === 0">
        <p class="top-text">{{ $t(mainPageTexts[currentIndex]) }}</p>
      </div>
      <div v-else>
        <p>{{ $t(mainPageTexts[currentIndex]) }}</p>
      </div>
     <!--  <div class="button-content">
        <button>{{ $t("getInTouchText") }}</button>
      </div>
      -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainPageTexts: [
        "mainPageText",
        "mainPageTextThree",
        "mainPageTextFour",
        "mainPageTextFive"
      ],
      currentIndex: 0
    };
  },
  mounted() {
    this.startTextInterval();
  },
  methods: {
    startTextInterval() {
      // Her bir metni 5 saniye arayla değiştirmek için setTimeout'ı kullanıyoruz.
      // Metinlerin döngüsel olarak tekrarlanmasını sağlamak için recursive olarak başvuruyoruz.
      const interval = 5000; // 5000 milisaniye = 5 saniye
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.mainPageTexts.length;
        this.startTextInterval(); // Yeni metni gösterdikten sonra bir sonraki metine geçmek için startTextInterval'i tekrar çağırıyoruz.
      }, interval);
    }
  }
};
</script>
<style lang="scss" scoped>
.get-in-touch {
  background-image: url("https://cdn.napolyon.com/skyalp/images/contact.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: auto;
  padding: 46px 0;
  @media only screen and (max-width: 640px) {
        background-repeat: repeat-x;
        overflow: hidden;
      }
  .content {
    width: 55%;
    margin: 0 auto;
    @media only screen and (max-width: 640px) {
      width: 100%;
    }
    .top-text {
      width: 65%;
      margin: 0 auto;
      @media only screen and (max-width: 640px) {
        width: 100%;
      }
    }
    p {
      color: #facb6b;
      font-size: 32px;
      font-weight: 500;
      text-align: center;
      line-height: 44px;
      @media only screen and (max-width: 640px) {
        font-size: 28px;
        line-height: 38px;
      }
    }
    .button-content {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 35px;
      button {
        border: 1px solid #facb6b;
        color: #facb6b;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        padding: 20px 24px;
      }
    }
  }
}
</style>
