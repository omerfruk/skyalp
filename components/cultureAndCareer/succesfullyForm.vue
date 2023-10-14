<template>
  <div class="submit-check">
    <div class="submit-check-detail">
      <img
        :src="imageURL + 'submit-check.svg'"
        width="64"
        height="64"
        alt="submit-successfull"
      />
      <p class="applicant-text rubik-family">{{ $t("successApplicant") }}</p>
      <p class="applicant-text-second rubik-family">
        {{ $t("successApplicantExp") }}
      </p>
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
};
</script>
<style lang="scss" scoped>
.submit-check {
  background-color: white;
  border-radius: 16px;
  width: 520px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    width: 100%;
  }
  .submit-check-detail {
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .applicant-text {
      color: #000;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .applicant-text-second {
      color: #000;
      font-size: 16px;
      font-weight: 450;
    }
  }
}
</style>
