<template>
  <div class="policy">
    <v-row class="mt-10 mx-auto" :style="{ width: ContentWidth }">
      <v-col class="d-flex justify-center" cols="12">
        <p class="termsMainText">약관 및 정책</p>
      </v-col>
      <v-col class="my-10" cols="12">
        <div class="mb-5">
          <p class="termsSubText mb-2">
            &lt;올데이컴퍼니&gt;(이하 ‘회사’) 은(는) 각종 청소년유해정보로부터
            청소년을 보호하고자 관련법률에 따라 19세미만의 청소년들이 유해정보에
            접근할 수 없도록 청소년보호정책을 마련하여 시행하고 있습니다. 또한
            회사는 청소년의 건전한 성장을 저해하는 음란, 불법 등의 유해정보와
            비윤리적, 반사회적 행위에 대해서는 엄격하게 제재하기 위하여 다음과
            같이 활동하고 있습니다.
          </p>
          <v-card
            class="pa-3"
            style="border: 2px solid rgba(0,0,0,.12)"
            elevation="0"
            rounded="0"
          >
            <p class="termsSubText" style="font-weight: 800">
              1조 유해정보로부터 청소년보호계획 수립 및 업무담당자 교육시행
            </p>
            <p class="termsSubText" style="font-weight: 800">
              2조 유해정보에 대한 청소년접근제한 및 관리조치
            </p>
            <p class="termsSubText" style="font-weight: 800">
              3조 유해정보로 인한 피해상담 및 고충처리
            </p>
            <p class="termsSubText" style="font-weight: 800">
              4조 청소년보호책임자 및 담당자 연락법
            </p>
            <p class="termsSubText" style="font-weight: 800">5조 부칙</p>
          </v-card>
        </div>
        <div class="mb-5">
          <p class="termsTitleText">
            제 1 조 유해정보로부터 청소년보호계획 수립 및 업무담당자 교육시행
          </p>
          <p class="termsSubText">
            회사는 청소년이 아무런 제한장치 없이 청소년 유해정보에 노출되지
            않도록 청소년유해매체물에 대해서는 별도의 인증장치를 마련, 적용하며
            청소년 유해정보가 노출되지 않기 위한 예방차원의 조치를 강구하고
            있으며 해당 담당자에 대한 청소년보호교육을 실시합니다.
          </p>
        </div>
        <div class="mb-5">
          <p class="termsTitleText">
            제 2 조 유해정보에 대한 청소년접근제한 및 관리조치
          </p>
          <p class="termsSubText">
            회사는 청소년이 아무런 제한장치 없이 청소년 유해정보에 노출되지
            않도록 청소년유해매체물에 대해서는 별도의 인증장치를 마련, 적용하며
            청소년 유해정보가 노출되지 않기 위한 예방차원의 조치를 강구합니다.
          </p>
        </div>
        <div class="mb-5">
          <p class="termsTitleText">
            제 3 조 유해정보로 인한 피해상담 및 고충처리
          </p>
          <p class="termsSubText">
            회사는 청소년 유해정보로 인한 피해상담 및 고충처리를 위한 전문인력을
            배치하여 그 피해가 확산되지 않도록 하고 있습니다. 이용자 분들께서는
            하단에 명시한 회사는"청소년보호 책임자 및 담당자의 소속, 성명 및
            연락처" 사항을 참고하여 전화나 이메일을 통하여 피해상담 및
            고충처리를 요청할 수 있습니다.
          </p>
        </div>
        <div class="mb-5">
          <p class="termsTitleText">
            제 4 조 청소년보호책임자 및 담당자 연락법
          </p>
          <p class="termsSubText mb-3">
            회사는 청소년 보호에 대한 의견수렴 및 불만처리를 담당하는 청소년
            보호 책임자 및 담당자를 운영하고 있습니다. 이와 관련하여 문의사항이
            있으시면 신속하고 성실하게 답변하여 드리겠습니다.
          </p>
          <p class="termsSubText mb-1">청소년 보호 책임자</p>
          <table
            border="1"
            style="border-collapse: collapse;"
            class="tableStyle termsSubText"
          >
            <tr>
              <td class="px-7">성명(직위)</td>
              <td class="px-7">문유진</td>
            </tr>
            <tr>
              <td class="px-7">전화번호</td>
              <td class="px-7">02 - 6953 - 0618</td>
            </tr>
            <tr>
              <td class="px-7">이메일</td>
              <td class="px-7">official@allground.co.kr</td>
            </tr>
          </table>
        </div>
        <p class="termsTitleText">
          제 5 조 부칙 청소년보호정책 시행일자 : 2021-07-23
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
  mounted() {
    axios
      .post('http://alldayfootball.co.kr/api/settingboard/findone', {
        id: '60ce9a4fb7062e4c6c092cb5',
      })
      .then(res => {
        this.contents = res.data.contents;
      });
  },
  data() {
    return {
      contents: '',
    };
  },
  computed: {
    ContentWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '100%';
        case 'sm':
          return '100%';
        case 'md':
          return '100%';
        case 'lg':
          return '1100px';
        case 'xl':
          return '1100px';
        default:
          return '1100px';
      }
    },
  },
};
</script>

<style>
@import url('../assets/css/unify.css');
</style>
