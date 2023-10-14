<template>
  <div class="job-card rubik-family">
    <p class="job-position">{{ job.position }}</p>
    <p class="job-name">{{ job.name }}</p>
  </div>
</template>
<script>
export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.job-card {
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  @media only screen and (max-width: 640px) {
    padding: 20px;
    margin-top: 25px;
  }
  .job-position {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #d73828;
    margin-bottom: 10px;
  }
  .job-name {
    font-size: 32px;
    font-weight: 500;
    line-height: 60px;
    color: #333538;
  }
}
</style>
