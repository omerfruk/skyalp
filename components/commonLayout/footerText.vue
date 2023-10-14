<template>
  <div class="footer-text-content">
    <p class="rubik family text-exp">{{ $t("footerText") }}</p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.footer-text-content {
  padding: 40px 0;
  border-top: 1px solid rgba(51, 53, 56, 0.1);
  border-bottom: 1px solid rgba(51, 53, 56, 0.1);
  .text-exp {
    color: #77797a;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    @media only screen and (max-width: 640px) {
        text-align: center;
      }
  }
}
</style>
