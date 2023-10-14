<template>
  <section class="new-black-overlay">
    <div class="cookie-settings">
      <div class="cookie-settings-header">
        <p class="cookie-header">{{ $t("cookieSettings") }}</p>
        <span @click="closeSideCookie()" class="material-symbols-outlined">
          close
        </span>
      </div>
      <div class="body-text">
        <p class="use-cookie">{{ $t("useOfCookie") }}</p>
        <p class="use-cookie-desc">
          {{ $t("useOfCookieDesc") }}
          <nuxt-link class="cookie-link" to="/cookie-policy"
            >cookie policy</nuxt-link
          >
        </p>
      </div>
      <div class="cookie-body-part">
        <div class="cookie-item">
          <p class="cookie-item-title">{{ $t("necessaryCookies") }}</p>
          <div class="cookie-item-action">
            <label class="switch">
              <input
                :disabled="loadingSmsService"
                v-model="checkedValue"
                type="checkbox"
              />
              <span class="slider round" />
            </label>
          </div>
        </div>
      </div>
      <div class="cookie-body-part">
        <div class="cookie-item">
          <p class="cookie-item-title">{{ $t("performanceCookies") }}</p>
          <div class="cookie-item-action">
            <label class="switch">
              <input
                :disabled="loadingSmsService"
                v-model="checkedValue"
                type="checkbox"
              />
              <span class="slider round" />
            </label>
          </div>
        </div>
      </div>
      <div class="cookie-body-part">
        <div class="cookie-item">
          <p class="cookie-item-title">{{ $t("targetCookies") }}</p>
          <div class="cookie-item-action">
            <label class="switch">
              <input
                :disabled="loadingSmsService"
                v-model="checkedValue"
                type="checkbox"
              />
              <span class="slider round" />
            </label>
          </div>
        </div>
      </div>
      <div class="cookie-button">
        <div class="button-content">
          <button @click="activateAcceptAll" class="accept">
            {{ $t("acceptAll") }}
          </button>
          <button @click="activateRejectAll">{{ $t("rejectAll") }}</button>
        </div>
        <div>
          <button>{{ $t("saveText") }}</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Cookie from "js-cookie";
export default {
  data() {
    return {};
  },
  methods: {
    closeSideCookie() {
      this.$parent.manageCookie = false;
    },
    activateAcceptAll() {
      Cookie.set("cookieAcceptedAll", true);
      this.$bus.$emit("cookieControl", true);
      this.$parent.manageCookie = false;
    },
    activateRejectAll(){
        Cookie.set("cookieAcceptedAll", false);
        this.$bus.$emit("cookieControl", true);
      this.$parent.manageCookie = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.cookie-settings {
  position: absolute;
  z-index: 99990;
  height: 100%;
  width: 450px;
  left: 0px;
  background-color: white;

  padding: 16px 24px;
  @media (max-width: 640px) {
    display: block;
    padding: 35px 25px 55px 25px; // safari ve iphone chrome da popup alt ve üst kısımları gözükmediği için padding top yüksek verildi.
    bottom: 0;
    left: 0;
    width: 97%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 15px 5px;
    height: 650px;
    overscroll-behavior: contain;
    z-index: 999999999;
  }
  .cookie-settings-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f1f3f5;
    height: auto;
    padding: 10px;
    .cookie-header {
      font-size: 16px;
      font-weight: 600;
    }
    span {
      background-color: #eaeff2;
      padding: 4px;
      border-radius: 4px;
      height: 33px;
      cursor: pointer;
    }
  }
  .body-text {
    padding: 10px;
    font-size: 16px;
    color: #2d4156;
    .use-cookie {
      font-weight: 600;
      margin-bottom: 10px;
    }
    .use-cookie-desc {
      font-size: 400;
      .cookie-link {
        text-decoration: underline;
        font-weight: 600;
      }
    }
  }
  .cookie-body-part {
    background-color: #eaeff2;
    padding: 16px;
    border-radius: 4px;
    margin-top: 16px;
    .cookie-item {
      display: flex;
      justify-content: space-between;
      .cookie-item-title {
        font-size: 16px;
        font-weight: 600;
      }
      .cookie-item-action {
        .switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 30px;
          margin-right: 10px;
          margin-bottom: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 25px;
          width: 25px;
          left: 3px;
          top: 2px;
          text-align: center;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }
        input {
          display: none;
        }
        input:checked + .slider {
          background-color: #d73828;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #d73828;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(19px);
          -ms-transform: translateX(19px);
          transform: translateX(19px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 20px;
        }

        .slider.round:before {
          border-radius: 55%;
        }
      }
    }
  }
  .cookie-button {
    border-top: 1px solid #f1f3f5;
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 20px;
    width: 88%;
    button {
      background-color: #eaeff2;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      font-weight: 600;
      color: #2d4156;
    }
    .accept {
      color: white;
      background: #d73828;
    }
  }
}
</style>
