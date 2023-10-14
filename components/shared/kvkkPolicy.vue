<template>
  <div class="kvkk-policy">
    <label v-if="$route.fullPath.includes($t('tr'))" class="checkbox-label container">
      <input
        type="checkbox"
        v-model="accepted"
        @change="handleChange"
        class="checkbox-input"
      />
      <span class="custom-checkbox"></span>
      <nuxt-link class="link-content" :to="$t('kvkkPolicyURL')">
        {{$t('permissionWithLink')}}
      </nuxt-link>
     {{ $t('permissionWithLinkLast') }}
    </label>
    <label v-else class="checkbox-label container">
      <input
        type="checkbox"
        v-model="accepted"
        @change="handleChange"
        class="checkbox-input"
      />
      <span class="custom-checkbox"></span>
      {{ $t('ıHaveReadThe') }}
      <nuxt-link class="link-content" :to="$t('kvkkPolicyURL')">
        {{$t('permissionWithLink')}}
      </nuxt-link>
      {{ $t('permissionWithLinkLast') }}
    </label>
    <p v-if="!accepted && error" class="error-message">{{
      $t("required")
    }}</p>
    <label class="checkbox-label container">
      <input
        type="checkbox"
        v-model="isAccepted"
        @change="handleChangeAccept"
        class="checkbox-input"
      />
      <span class="custom-checkbox"></span>
     {{$t('permissionText')}}
    </label>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  data() {
    return {
      accepted: false,
      isAccepted: false,
      error: false,
    };
  },
  mounted() {
    this.$bus.$on("errorText", (data) => {
      this.error = data;
    });
  },
  methods: {
    handleChange() {
      Cookie.set("aydinlatma_metni_accepted", true);
    },
    handleChangeAccept() {
      Cookie.set("ticari_ileti", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.kvkk-policy {
  .checkbox-label {
    font-size: 12px;
    margin-bottom: 10px;
    color: #333538;
  }
  .error-message {
    color: red;
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 12px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .custom-checkbox {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: white;
    border: 2px solid #8e8f91;
    border-radius: 6px;
    color: white;
  }
  input:checked ~ .custom-checkbox {
    background-color: #d73828;
    border: none;
    color: white;
  }
  .custom-checkbox:after {
    content: "";
    position: absolute;
    display: none;
    color: white;
  }

  /* Updated style to show white arrow when the checkbox is checked */
  .checkbox-input:checked ~ .custom-checkbox:after {
    display: block;
    content: "";
    position: absolute;
    left: 8px;
    top: 4px;
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    color: white;
  }

  /* İşaretlenmemiş checkbox stilini ekleyelim */
  .checkbox-input:not(:checked) + .custom-checkbox::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: transparent;
    color: white;
    border-radius: 2px;
  }

  .link-content {
    font-weight: 450;
    color: #d73828;
  }
}
</style>
