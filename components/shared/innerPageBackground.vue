<template>
  <div class="invest-background rubik-family" :class="{'background-animation': isCompleteText}">
    <b-container>
      <div class="background-text">
        <span class="bold-text" ref="text1">{{ text1 }} </span>
        <span class="bold-text" ref="text2">{{ text2 }} </span>
        <span class="bold-text" ref="text3">{{ text3 }} </span>
        <span class="bold-text" ref="text4">{{ text4 }} </span>
        <span class="bold-text" ref="text5">{{ text5 }} </span>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  props: {
    text1: {
      type: String,
    },
    text2: {
      type: String,
    },
    text3: {
      type: String,
    },
    text4: {
      type: String
    },
    text5: {
      type: String,
    },
  },
  data(){
    return{
      isCompleteText:false
    }
  },
  mounted(){
    this.animateText();
  },
  methods:{
    animateText(){
      const texts = [
        this.$refs.text1,
        this.$refs.text2,
        this.$refs.text3,
        this.$refs.text4,
        this.$refs.text5
      ];
      texts.forEach((text,index) => {
        setTimeout(() => {
          text.style.opacity = "1";
          text.style.transform = "translateX(0)";

          if(index === texts.length - 1) {
            this.isCompleteText = true
          }
        }, index * 500);
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.invest-background {
  background: linear-gradient(180deg, #d73828 0%, #e55929 100%);
  /*padding: 100px 0px;*/
  position: relative;
  color: white;
  overflow: hidden;
  height: 100vh;
}

.background-text {
  width: 65%;
  padding: 150px 0;
  padding: 115px 0 125px 0;
  @media only screen and (max-width: 640px) {
    width: 100%;
    text-align: center;
    padding: 150px 35px 88px 35px;
  }
}

.bold-text {
  font-size: 72px;
  font-weight: 500;
  line-height: 92px;
  letter-spacing: -0.02em;
  /*animation: text-animation 0.5s ease-in-out forwards;*/
  opacity: 0;
  position: relative;
  transform: translateX(-100%);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  @media only screen and (max-width: 640px) {
    line-height: 50px;
    font-size: 44px;
  }
}

.background-animation {
  animation: background-text 5s linear forwards;
  -webkit-animation: background-text 5s linear forwards; /* Safari, Chrome, Opera için */
  animation-iteration-count: 1;
}

@-webkit-keyframes background-text {
  0% {
    height: 100vh;
  }
  25% {
    height: 650px;
  }
  50% {
    height: 600px;
  }
  75% {
    height: 550px;
  }
  100% {
    transform: translateY(0%);
    height: 420px;
  }
}

@keyframes background-text {
  0% {
    height: 100vh;
  }
  25% {
    height: 650px;
  }
  50% {
    height: 600px;
  }
  75% {
    height: 550px;
  }
  100% {
    transform: translateY(0%);
    height: 420px;
  }
}

</style>
