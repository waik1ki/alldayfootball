<template>
  <div>
    <v-img
      src="../assets/백그라운드이미지.jpg"
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
            v-if="!this.$vuetify.breakpoint.smAndDown"
            class="subscribeSubText"
          >
            매일 낮 12시 주요 축구소식을 보내드립니다.
          </h5>
          <h5
            v-if="this.$vuetify.breakpoint.smAndDown"
            class="subscribeSubText mb-4"
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
              <p
                v-if="this.failExistEmail === 1"
                class="my-1 pl-2"
                style="color: white; font-size: .8rem'"
              >
                이미 구독중인 이메일 입니다.
              </p>
              <p
                v-else
                class="my-1 pl-2"
                :style="
                  'color:' +
                    errorcolor1 +
                    '; font-size: .8rem; font-weight: bold'
                "
              >
                이메일 형식에 맞춰 작성해주세요.
              </p>
              <v-text-field
                v-model="nickname"
                color="#00923B"
                hide-details
                solo
                clearable
                label="닉네임"
              ></v-text-field>
              <p
                class="mt-1 pl-2"
                :style="
                  'color:' +
                    errorcolor2 +
                    '; font-size: .8rem; font-weight: bold'
                "
              >
                닉네임을 작성해 주세요.
              </p>
            </div>
            <div
              class="d-flex align-center mb-2"
              style="color: white !important;"
            >
              <div
                class="checkBox mr-2"
                v-if="!checked1"
                @click="checked1 = !checked1"
              ></div>
              <div
                class="d-flex align-center justify-center checkedBox mr-2"
                v-if="checked1"
                @click="checked1 = !checked1"
              >
                <v-icon small dark>mdi-check</v-icon>
              </div>
              <p style="font-size: 14px; font-weight: 700">
                <span
                  @click="dialog1 = !dialog1"
                  style="color: white !important; border-bottom: 1px solid white; cursor: pointer;"
                  >개인정보 수집·이용</span
                >에 동의합니다
              </p>
            </div>
            <div class="d-flex align-center" style="color: white !important;">
              <div
                class="checkBox mr-2"
                v-if="!checked2"
                @click="checked2 = !checked2"
              ></div>
              <div
                class="d-flex align-center justify-center checkedBox mr-2"
                v-if="checked2"
                @click="checked2 = !checked2"
              >
                <v-icon small dark>mdi-check</v-icon>
              </div>
              <p style="font-size: 14px; font-weight: 700">
                <span
                  @click="dialog2 = !dialog2"
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
            @click="goSubscribe(checked1, checked2)"
            width="100%"
            :height="mobilebtnheight"
            ><h6 style="font-size: 20px; font-weight: bold">
              무료로 구독하기
            </h6></v-btn
          >
        </v-col>
        <!-- <v-col cols="12" v-if="this.$vuetify.breakpoint.smAndDown" class="pa-6">
          <div style="color: white !important; font-size: 34px; font-weight: 800;">
            <p>세계 주요 축구 소식을</p>
            <p>간편하고 빠르게</p>
            <p>접하는 방법</p>
          </div>
          <p style="color: white !important; font-size: 20px; font-weight: 800">매일 아침 주요 축구소식을 메일로 보내드립니다.</p>          
          <div>
            <div class="my-2 subscribeWrap">
              <v-text-field v-model="email" color="#00923B" hide-details solo clearable label="이메일 주소"></v-text-field>
              <p class="my-1 pl-2" :style="'color:' + errorcolor1 + '; font-size: .8rem'">이메일 형식에 맞춰 작성해주세요.</p>
              <v-text-field v-model="nickname" color="#00923B" hide-details solo clearable label="닉네임"></v-text-field>
              <p class="mt-1 pl-2" :style="'color:' + errorcolor2 + '; font-size: .8rem'">닉네임을 작성해 주세요.</p>
            </div>
            <div class="d-flex align-center mb-2" style="color: white !important;">
              <div class="checkBox mr-2" v-if="!checked1" @click="checked1 = !checked1">
              </div>
              <div class="d-flex align-center justify-center checkedBox mr-2" v-if="checked1" @click="checked1 = !checked1">
                <v-icon small dark>mdi-check</v-icon>
              </div>
              <p style="font-size: 14px; font-weight: 700"><span @click="dialog1 = !dialog1" style="color: white !important; border-bottom: 1px solid white; cursor: pointer;">개인정보 수집·이용</span>에 동의합니다</p>
            </div>
            <div class="d-flex align-center" style="color: white !important;">
              <div class="checkBox mr-2" v-if="!checked2" @click="checked2 = !checked2">
              </div>
              <div class="d-flex align-center justify-center checkedBox mr-2" v-if="checked2" @click="checked2 = !checked2">
                <v-icon small dark>mdi-check</v-icon>
              </div>
              <p style="font-size: 14px; font-weight: 700"><span @click="dialog2 = !dialog2" style="color: white !important; border-bottom: 1px solid white; cursor: pointe;r">광고성 정보 수신</span>에 동의합니다</p>
            </div>
          </div>
          <v-btn elevation="0" color="#00923B" dark class="mt-3" @click="goSubscribe(checked1, checked2)" width="100%" height="60"><h6 style="font-size: 20px; font-weight: bold">무료로 구독하기</h6></v-btn>          
        </v-col> -->
      </v-row>
    </v-img>
    <v-dialog v-model="dialog" width="400">
      <v-card>
        <v-card class="d-flex justify-end pa-2" elevation="0">
          <v-icon @click="dialog = false" small>mdi-close</v-icon>
        </v-card>
        <v-card elevation="0" class="d-flex justify-center mb-2">
          <v-card width="90" height="90" elevation="0">
            <v-img src="@/assets/빵빠레.png"></v-img>
          </v-card>
        </v-card>
        <v-card class="d-flex flex-column align-center py-5" elevation="0">
          <div class="d-flex align-center">
            <v-card width="20" height="20" elevation="0" class="mr-1">
              <v-img src="@/assets/축구공.png"></v-img>
            </v-card>
            <p>올데이풋볼 구독자가 되신 것을 환영합니다.</p>
          </div>
          <div class="d-flex align-center">
            <v-card width="20" height="20" elevation="0" class="mr-1">
              <v-img src="@/assets/시계.png"></v-img>
            </v-card>
            <p>매일 낮 12시 다양한 축구 소식이 발송됩니다.</p>
          </div>
        </v-card>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog1" width="650">
      <v-card class="px-5 py-3">
        <v-card class="d-flex justify-end mb-3" elevation="0">
          <v-spacer></v-spacer>
          <v-icon @click="dialog1 = false" small>mdi-close</v-icon>
        </v-card>
        <v-card class="pb-3" elevation="0">
          <div class="mb-4">
            <p class="agreeText mb-1">개인정보 수집·이용 동의</p>
            <p class="agreeSubText mb-1">
              올데이풋볼은 뉴스레터 발송을 위해 최소한의 개인정보를 수집하고
              이용합니다.
            </p>
            <table
              border="1"
              style="border-collapse: collapse; font-size: 12px; width: 100%"
              class="tableStyle text-center mb-2"
            >
              <tr>
                <td>수집·이용 목적</td>
                <td>수집·이용 항목</td>
                <td>보유·이용 기간</td>
              </tr>
              <tr>
                <td>뉴스레터 발송</td>
                <td>이메일주소</td>
                <td>서비스 종료 시 또는 뉴스레터 구독 해지 시 즉시 파기</td>
              </tr>
            </table>

            <p class="agreeSubText">
              개인정보 수집·이용 동의를 거부할 권리가 있으며, 거부할 경우
              뉴스레터 구독 서비스를 이용할 수 없습니다.
            </p>
          </div>
          <div class="mb-4">
            <p class="agreeText mb-1">개인정보 처리 위탁·수탁</p>
            <p class="agreeSubText mb-1">
              회사는 서비스 제공 및 향상을 위해서 아래와 같이 개인정보를
              위탁하고 있으며, 관계 법령에 따라 위탁 계약 시 개인정보가 안전하게
              관리될 수 있도록 필요한 사항을 규정하고 있습니다.
            </p>
            <table
              border="1"
              style="border-collapse: collapse; font-size: 12px; width: 100%"
              class="tableStyle text-center"
            >
              <tr>
                <td>수탁업체</td>
                <td>수탁업무 내용</td>
                <td>개인정보의 보유 및 이용기간</td>
              </tr>
              <tr>
                <td>스티비</td>
                <td>
                  뉴스레터 또는 광고가 포함된 뉴스레터 발송, 서비스 이용 통계 및
                  분석
                </td>
                <td>구독해지 시 또는 위탁계약 종료 시</td>
              </tr>
              <tr>
                <td>AWS</td>
                <td>개인정보가 저장된 국내 클라우드 서버 운영 및 관리</td>
                <td>구독해지 시 또는 위탁계약 종료 시</td>
              </tr>
            </table>
          </div>
        </v-card>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" width="650">
      <v-card class="px-5 py-3">
        <v-card class="d-flex justify-end mb-3" elevation="0">
          <v-spacer></v-spacer>
          <v-icon @click="dialog2 = false" small>mdi-close</v-icon>
        </v-card>
        <v-card class="pb-3" elevation="0">
          <div class="mb-4">
            <p class="agreeText mb-1">광고성 정보 수신 동의</p>
            <p class="agreeSubText">
              광고성 정보 수신에 동의하실 경우, 올데이풋볼은 이메일 뉴스레터에
              광고성 정보를 함께 발송할 수 있습니다.
            </p>
            <br />
            <p class="agreeSubText">
              올데이풋볼은 타 기업, 단체, 브랜드와 광고 콘텐츠를 만들어
              소개하기도 합니다. 읽는 사람에게 방해가 되는 광고가 아닌, 협업하는
              조직의 전문성과 올데이풋볼만의 스토리텔링을 더해 더욱 유익하고
              재밌는 콘텐츠를 만들어내고자 노력하고 있습니다. 더불어 광고성 정보
              수신에 동의한다고 하더라도, 광고 콘텐츠가 이메일 뉴스레터에
              들어가는 경우 꼭 제목에 (광고)를 붙여 메일을 발송합니다.
            </p>
            <br />
            <p class="agreeSubText">
              현재는 뉴스레터에서 광고성 정보만 따로 보내는 것이 어렵기 때문에,
              광고성 정보 수신 동의를 하지 않을 경우 서비스 이용이 제한될 수
              있습니다. 올데이풋볼의 광고성 정보 수신 서비스를 원하지 않을 경우,
              뉴스레터 하단의 '수신 거부'를 눌러 서비스 이용을 해지할 수
              있습니다.
            </p>
          </div>
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
  data() {
    return {
      checked1: false,
      checked2: false,
      dialog: false,
      dialog1: false,
      dialog2: false,
      email: '',
      nickname: '',
      errorcolor1: 'rgba(0,0,0,.0)',
      errorcolor2: 'rgba(0,0,0,.0)',
      failExistEmail: 0,
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
    goSubscribe(checked1, checked2) {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // const sub = (checked1 & checked2 & pattern.test(this.email) & this.nickname !== '');
      // console.log(sub)
      switch (
        checked1 &
        checked2 &
        pattern.test(this.email) &
        (this.nickname !== '')
      ) {
        case 1: {
          axios
            .post('http://alldayfootball.co.kr/api/ad/subscribe', {
              email: this.email,
              name: this.nickname,
            })
            .then(res => {
              this.email = '';
              this.nickname = '';
              this.checked1 = false;
              this.checked2 = false;
              this.errorcolor1 = 'rgba(0,0,0,.0)';
              this.errorcolor2 = 'rgba(0,0,0,.0)';
              if (res.data.Value.failExistEmail.length > 0) {
                this.failExistEmail = 1;
                // console.log(this.failExistEmail);
              } else {
                this.failExistEmail = 0;
                this.dialog = true;
              }
              // console.log(res.data.Value.failExistEmail.length);
            });
          break;
        }
        case 0: {
          if (!checked1) {
            alert('개인정보 수집·이용에 동의해주세요.');
          } else if (!checked2) {
            alert('광고성 정보 수신에 동의해주세요.');
          } else {
            if (pattern.test(this.email) === false) {
              if (this.nickname === '') {
                this.errorcolor1 = 'rgba(220,0,0)';
                this.errorcolor2 = 'rgba(220,0,0)';
              } else {
                this.errorcolor1 = 'rgba(220,0,0)';
                this.errorcolor2 = 'rgba(0,0,0,.0)';
              }
            } else {
              this.errorcolor1 = 'rgba(0,0,0,.0)';
              this.errorcolor2 = 'rgba(220,0,0)';
            }
          }
          break;
        }
        default:
          break;
      }
    },
  },
};
</script>

<style>
@import url('../assets/css/unify.css');

.checkBox:hover {
  background: rgba(200, 200, 200);
}
.checkBox {
  background: rgba(255, 255, 255);
  width: 14px;
  height: 14px;
}
.checkedBox {
  background-color: #00923b;
  width: 14px;
  height: 14px;
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
