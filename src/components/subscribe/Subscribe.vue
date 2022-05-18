<template>
  <div>
    <v-img
      src="../../assets/백그라운드이미지.jpg"
      width="100%"
      :height="mobileheight"
      class="d-flex align-center justify-center"
    >
      <v-row no-gutters justify="center" align="end" :class="mobilePadding3">
        <v-col lg="3" cols="12">
          <div class="subscribeMainText" :style="mobileMargin">
            <h4>세계 주요 축구 소식을</h4>
            <h4>간편하고 빠르게</h4>
            <h4>접하는 방법</h4>
          </div>
          <h5
            :class="
              this.$vuetify.breakpoint.smAndDown
                ? 'subscribeSubText mb-4'
                : 'subscribeSubText'
            "
          >
            매일 낮 12시 주요 축구소식을 보내드립니다.
          </h5>
        </v-col>
        <v-col cols="1" v-if="!this.$vuetify.breakpoint.smAndDown"></v-col>
        <v-col lg="3" cols="12">
          <div class="mb-2">
            <div class="my-2 subscribeWrap">
              <v-text-field
                v-model="email"
                color="#00923B"
                hide-details
                solo
                clearable
                label="이메일"
              ></v-text-field>
              <v-card
                elevation="0"
                height="20"
                color="rgba(0,0,0,.0)"
                class="my-1"
              >
                <p class="validationFalidText pl-2">
                  {{ emailValidationText }}
                </p>
              </v-card>
              <v-text-field
                v-model="nickname"
                color="#00923B"
                hide-details
                solo
                clearable
                label="닉네임"
              ></v-text-field>
              <v-card
                elevation="0"
                height="20"
                color="rgba(0,0,0,.0)"
                class="my-1"
              >
                <p class="validationFalidText pl-2">
                  {{ nicknameValidationText }}
                </p>
              </v-card>
            </div>
            <div
              class="d-flex align-center mb-2"
              style="color: white !important;"
            >
              <label for="privacyCheckbox" class="chk_box">
                <input
                  v-model="privacyAgree"
                  type="checkbox"
                  id="privacyCheckbox"
                  checked="checked"
                />
                <span class="on"></span>
              </label>
              <p style="font-size: 14px; font-weight: 700">
                <span
                  @click="privacyDialog = !privacyDialog"
                  style="color: white !important; border-bottom: 1px solid white; cursor: pointer;"
                  >개인정보 수집·이용</span
                >에 동의합니다
              </p>
            </div>
            <div class="d-flex align-center" style="color: white !important;">
              <label for="advertCheckbox" class="chk_box">
                <input
                  v-model="advertAgree"
                  type="checkbox"
                  id="advertCheckbox"
                  checked="checked"
                />
                <span class="on"></span>
              </label>
              <p style="font-size: 14px; font-weight: 700">
                <span
                  @click="advertDialog = !advertDialog"
                  style="color: white !important; border-bottom: 1px solid white; cursor: pointe;r"
                  >광고성 정보 수신</span
                >에 동의합니다
              </p>
            </div>
          </div>
          <v-btn
            elevation="0"
            color="#00923B"
            dark
            class="mt-3"
            @click="startSubscribe"
            width="100%"
            :height="mobilebtnheight"
            ><h6 style="font-size: 20px; font-weight: bold">
              무료로 구독하기
            </h6></v-btn
          >
        </v-col>
      </v-row>
    </v-img>

    <Congrats :state="congratsDialog" @close="congratsDialog = false" />
    <Privacy :state="privacyDialog" @close="privacyDialog = false" />
    <Advert :state="advertDialog" @close="advertDialog = false" />
  </div>
</template>

<script>
import Privacy from '@/components/subscribe/dialog/Privacy.vue';
import Advert from '@/components/subscribe/dialog/Advert.vue';
import Congrats from '@/components/subscribe/dialog/Congrats.vue';
import { subscribe } from '@/api/stibee';
import { validateEmail } from '@/utils/validation';

export default {
  components: {
    Privacy,
    Advert,
    Congrats,
  },
  data() {
    return {
      // dialog
      congratsDialog: false,
      privacyDialog: false,
      advertDialog: false,

      // 동의 체크아웃
      privacyAgree: false,
      advertAgree: false,

      // 유효성 검증 텍스트
      emailValidationText: ' ',
      nicknameValidationText: '',

      // 입력 양식
      email: '',
      nickname: null,
    };
  },
  computed: {
    mobilePadding() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '';
        case 'sm':
          return '';
        case 'md':
          return 'my-2';
        case 'lg':
          return 'my-2';
        case 'xl':
          return 'my-2';
        default:
          return 'my-2';
      }
    },
    mobilePadding2() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'mb-10';
        case 'sm':
          return 'mb-10';
        case 'md':
          return 'pr-5 pt-2';
        case 'lg':
          return 'pr-5 pt-2';
        case 'xl':
          return 'pr-5 pt-2';
        default:
          return 'pr-5 pt-2';
      }
    },
    mobilePadding3() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'pa-7';
        case 'sm':
          return 'pa-7';
        case 'md':
          return 'pa-7';
        case 'lg':
          return '';
        case 'xl':
          return '';
        default:
          return '';
      }
    },
    mobileheight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '471px';
        case 'sm':
          return '471px';
        case 'md':
          return '471px';
        case 'lg':
          return '560px';
        case 'xl':
          return '560px';
        default:
          return '560px';
      }
    },
    mobileMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'margin-bottom: 10px';
        case 'sm':
          return 'margin-bottom: 10px';
        case 'md':
          return 'margin-bottom: 10px';
        case 'lg':
          return 'margin-bottom: 140px';
        case 'xl':
          return 'margin-bottom: 140px';
        default:
          return 'margin-bottom: 140px';
      }
    },
    mobilebtnheight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '50';
        case 'sm':
          return '50';
        case 'md':
          return '50';
        case 'lg':
          return '60';
        case 'xl':
          return '60';
        default:
          return '60';
      }
    },
  },
  methods: {
    async startSubscribe() {
      if (this.validateForm()) return;

      const subscriberData = {
        email: this.email,
        name: this.nickname,
      };
      const { data } = await subscribe(subscriberData);
      const failCode = data.Value.failExistEmail.length;

      this.initForm();

      if (failCode > 0) {
        this.emailValidationText = '이미 구독중인 이메일 입니다.';
      } else {
        this.congratsDialog = true;
      }
    },
    validateForm() {
      if (!this.privacyAgree) {
        alert('개인정보 수집·이용에 동의해주세요.');
        return true;
      }
      if (!this.advertAgree) {
        alert('광고성 정보 수신에 동의해주세요.');
        return true;
      }
      if (!validateEmail(this.email)) {
        this.emailValidationText = '이메일 형식에 맞춰 작성해주세요.';
        if (this.nickname === null) {
          this.nicknameValidationText = '닉네임을 작성해 주세요.';
        } else {
          this.nicknameValidationText = '';
        }
        return true;
      }
      if (this.nickname === null) {
        this.nicknameValidationText = '닉네임을 작성해 주세요.';
        this.emailValidationText = '';
        return true;
      }
      return false;
    },
    initForm() {
      this.emailValidationText = '';
      this.nicknameValidationText = '';
      this.email = '';
      this.nickname = '';
    },
  },
};
</script>

<style>
@import url('../../assets/css/unify.css');

.validationFalidText {
  color: rgba(220, 0, 0);
  font-size: 0.8rem;
  font-weight: bold;
}

.subscribeWrap
  > .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none !important;
}
.v-input--selection-controls__ripple {
  display: none;
}
.v-input--selection-controls {
  margin-top: 8px !important;
}
.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  background: white !important;
}
</style>

<style scoped>
.chk_box {
  display: block;
  position: relative;
  padding-left: 21px;
  margin-bottom: 9px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
} /* 기본 체크박스 숨기기 */
.chk_box input[type='checkbox'] {
  display: none;
} /* 선택되지 않은 체크박스 스타일 꾸미기 */
.on {
  width: 14px;
  height: 14px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.on:hover {
  background: rgba(200, 200, 200);
} /* 선택된 체크박스 스타일 꾸미기 */
.chk_box input[type='checkbox']:checked + .on {
  background: #00923b;
}
.on:after {
  content: '';
  position: absolute;
  display: none;
}
.chk_box input[type='checkbox']:checked + .on:after {
  display: block;
}
.on:after {
  width: 6px;
  height: 11px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  left: 4px;
  top: 0px;
}
</style>
