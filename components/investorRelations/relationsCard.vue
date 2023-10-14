<template>
  <div class="relations-card-content rubik-family">
    <nuxt-link :to="relations.link">
    <img
      :src="relations.image"
      class="mobile-image"
      alt="investor-relations"
    />
    <p class="relations-header">
      {{ relations.header }}
      <span class="material-symbols-outlined"> arrow_forward </span>
    </p>
  </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    relations: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.mobile-image {
  object-fit: contain;
  object-position: left ;
  width: 100%;
  height: 200px;
  @media only screen and (max-width: 1200px) {
   object-fit: cover;
    height: 300px;
  }
}

.relations-card-content {
  .relations-header {
    color: #1c1f22;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    margin-top: 22px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   span{
    color: #D73828;
    margin-right: 45px;
   }
  }
  .relations-text {
    color: #494c4e;
    font-size: 16px;
    font-weight: 450;
    line-height: 20px;
  }
}
</style>
