<template>
  <div class="just-image-component"></div>
</template>
<style lang="scss" scoped>
.just-image-component {
  background-image: url("https://cdn.napolyon.com/skyalp/images/culture-career-new.png"),  linear-gradient(139deg, rgba(240, 190, 87, 0.19) 0%, rgba(229, 89, 41, 0.19) 100%),
  linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);
  background-color: lightgray;
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
  height: 350px;
  @media only screen and (max-width: 640px) {
    background-image: url("https://cdn.napolyon.com/skyalp/images/culture-mobile.png");
    background-size: cover;
    width: auto;
    height: 255px;
  }
}
</style>
