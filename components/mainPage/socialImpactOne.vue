<template>
    <div class="social-impact-images">
        <img
        class="image-1"
        src="https://cdn.napolyon.com/skyalp/images/social-impact-1.png"
        alt="image.alt"
      />
       <button @click="innovation()">
       
      <p class="impact-text">{{$t('innovationEntre')}}</p>
       </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
    methods:{
        innovation(){
            this.$router.push({ path: this.$t("investmentsURL") });
            this.$bus.$emit("innovationComponent", true);
        }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .social-impact-images {
    cursor: pointer;
    position: relative;
    .image-1 {
      margin-right: 16px;
      position: relative;
      &:hover {
        .impact-text {
          display: block;
        }
      }
    }
    .impact-text {
      position: absolute;
      width: 160px;
      display: none;
      box-shadow: 0px 23px 30px rgba(0, 0, 0, 0.05);
      box-sizing: border-box;
      z-index: 99999;
      background: #d32e29;
      border-radius: 10px;
      left: -30px;
      padding: 10px;
      color: #facb6b;
      @media (max-width: 960px) {
        left: -28px;
      }
      @media (max-width: 640px) {
        left: -35px;
      }
  
      &::after {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        background: #d32e29;
        top: 0px;
        left: 58%;
        box-sizing: border-box;
        transform-origin: 0 0;
        transform: rotate(135deg);
      }
      @media (max-width: 960px) {
        width: 120px;
        bottom: 55px;
      }
  
      @media (max-width: 640px) {
        width: 100px;
      }
    }
  
    &:hover {
      .impact-text {
        display: block;
      }
    }
   
 
    
   
  }
  </style>