<template>
    <div class="blog">
      <b-container>
        <div class="blog-content">
        <div class="text-content">
       <img :src="imageURL + 'medium-logo.svg'" alt="medium-logo">
        <p class="blog-bold rubik-family">{{ $t("followUsMedium") }}</p>
        <a href="https://medium.com/@skyalp" target="_blank" class="main-page-button">
          {{ $t("allPosts") }}
          <span class="material-symbols-outlined"> chevron_right </span>
        </a>
      </div>
   <blogSlider/>
     </div>
      </b-container>
    </div>
  </template>
  <script>
  import blogSlider from './blogSlider.vue';
  export default {
    components:{blogSlider},
    data(){
        return{
            imageURL: process.env.baseImgUrl
        }
    }
  };
  </script>
  <style lang="scss">
  .blog {
    padding: 80px 0;
    .blog-content{    
    display: flex !important;
    justify-content: space-between;
    @media only screen and (max-width: 640px) {
      flex-direction: column;
    }
    .text-content{   
    .blog-bold {
      font-size: 24px;
      font-weight: 450;
      line-height: 34px;
      margin-bottom: 64px;
      margin-top: 24px;
    }
    .main-page-button{
      @media only screen and (max-width: 640px) {
      margin-bottom: 15px;
    }
      .material-symbols-outlined{
        vertical-align: middle;
        padding-left: 24px;
        color: #333538;
        font-size: 28px;
      }
    }
  }
  }
  }
  </style>