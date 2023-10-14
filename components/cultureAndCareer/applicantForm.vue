<template>
  <div class="presentation-form">
    <div class="presentation-form-detail container">
      <div class="form-content">
        <div class="form-step-1">
          <div class="form-types">
            <p class="form-title">{{ $t("yourName") }}</p>
            <input v-model="name" class="form-input" type="text" />
            <span v-if="error && !name" class="error-message">{{
              $t("required")
            }}</span>
          </div>
          <div class="form-types">
            <p class="form-title">{{ $t("yourSurname") }}</p>
            <input v-model="surname" class="form-input" type="text" />
            <span v-if="error && !surname" class="error-message">{{
              $t("required")
            }}</span>
          </div>
        </div>
        <div class="form-step-1">
          <div class="form-types">
            <p class="form-title">{{ $t("eposta") }}</p>
            <input
              v-model="ePosta"
              class="form-input"
              type="email"
              autocomplete="off"
            />
            <span v-if="error && !ePosta" class="error-message">{{
              $t("required")
            }}</span>
          </div>
          <div class="form-types">
            <p class="form-title">{{ $t("phoneNumber") }}</p>
            <input
              v-model="phoneNumber"
              class="form-input"
              type="number"
              autocomplete="off"
            />
            <span v-if="error && !phoneNumber" class="error-message">{{
              $t("required")
            }}</span>
          </div>
        </div>
        <!--  <div class="form-step-1">
          <div class="form-types">
            <span class="form-title">{{ $t("uploadCV") }}</span>
            <span class="error-message">{{ $t("required") }}</span>
            <input
              type="file"
              ref="fileInput"
              @change="handleFileChange"
              class="form-input"
            />
          </div>
        </div>

-->
        <div class="form-step-1">
          <div class="form-types">
            <p class="form-title">{{ $t("additionalNote") }}</p>
            <textarea
              v-model="applicantNote"
              style="width: 100%"
              class="form-input"
            />
            <span v-if="error && !applicantNote" class="error-message">{{
              $t("required")
            }}</span>
          </div>
        </div>
        <kvkkPolicy ref="policiy"/>
        <!-- <vue-grecaptcha v-model="captchaResponse" /> -->
        <div class="send-and-communation">
          <button class="send-button" @click="sendRequestPresentation()">
            {{ $t("send") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import kvkkPolicy from '../shared/kvkkPolicy.vue';
export default {
  components:{kvkkPolicy},
  data() {
    return {
      name: "",
      surname: "",
      phoneNumber: null,
      ePosta: "",
      applicantNote: "",
      attachmentData: null,
      error: false,
    };
  },

  methods: {
    handleFileChange() {
      const fileInput = this.$refs.fileInput;
      if (fileInput.files.length > 0) {
        const selectedFile = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          this.attachmentData = event.target.result;
        };
        reader.readAsDataURL(selectedFile);
      }
    },
    async sendRequestPresentation() {
      if (
        this.name &&
        this.surname &&
        this.ePosta &&
        this.phoneNumber &&
        this.applicantNote &&
        this.$refs.policiy.accepted 
       
      ) {
        const data = {
          name: this.name,
          surname: this.surname,
          phoneNumber: this.phoneNumber,
          ePosta: this.ePosta,
          applicantNote: this.applicantNote,
          attachmentData: this.attachmentData,
          policiyData:this.$refs.policiy.accepted,
          ticariData:this.$refs.policiy.isAccepted
        };

        let emailContent = `Adı: ${data.name}\nSurname: ${data.surname}\nPhone Number: ${data.phoneNumber}\nE-posta: ${data.ePosta}\nMesaj: ${data.applicantNote}\nAydınlatma-Metni: ${data.policiyData}\nTicari-Elektronik-İzni: ${data.ticariData}`;
        if (!data.attachmentData) {
          alert("Mail Adresinize Yönlendiriliyorsunuz.Lütfen CV Yükleyiniz");
        } else if (data.attachmentData) {
          emailContent += `\nAttachment: ${data.attachmentData}`;
        }
        const recipientEmail = "ik@skyalp.com.tr";
        window.location.href = `mailto:${recipientEmail}?subject=Genel Başvuru&body=${encodeURIComponent(
          emailContent
        )}`;
        this.name = "";
        this.surname = "";
        this.ePosta = "";
        this.phoneNumber = null;
        this.applicantNote = "";
        
      } else {
        this.error = true;
        this.$bus.$emit("errorText", true);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.presentation-form {
  background-color: white;
  border-radius: 16px;
  width: 520px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    width: 100%;
  }
  .presentation-form-detail {
    padding: 40px 30px;
    .form-content {
      display: block;
      .form-step-1 {
        display: flex;
        @media (max-width: 640px) {
          display: block;
        }
        .form-types {
          width: 90%;
          @media (max-width: 640px) {
            width: 100%;
          }
          .form-title {
            margin-bottom: 10px;
            color: #333538;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            @media (max-width: 640px) {
              margin-bottom: 6px;
            }
          }
          .form-input {
            border-radius: 8px;
            border: 1px solid #d0d5dd !important;
            outline: none;
            font-size: 14px;
            padding: 11px 10px;
            font-weight: 700;
            display: inline-block;
            width: 90%;
            background-color: transparent;
            margin-bottom: 8px;
            @media (max-width: 640px) {
              width: 100%;
              margin-bottom: 15px;
            }
          }
          .form-input::-webkit-outer-spin-button,
          .form-input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          .presentation-choices {
            display: flex;
            align-items: center;
            @media (max-width: 640px) {
              margin-bottom: 20px;
            }
          }
          .error-message {
            color: red;
            font-weight: 400;
            font-size: 12px;
          }
        }
      }
    }
    .send-and-communation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 640px) {
        flex-direction: column-reverse;
        justify-content: center;
      }
      .send-button {
        width: 100%;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        padding: 12px 16px;
        background: #d73828;
        color: white;
        text-align: center;
        @media (max-width: 640px) {
          width: 100%;
          margin-bottom: 25px;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
