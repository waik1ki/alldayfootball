<template>
  <div class="help">
    <v-row class="mx-auto" :style="{ width: ContentWidth }">
      <v-col class="d-flex justify-center mt-15 mb-7" cols="12">
        <p class="termsMainText">불편신고</p>
      </v-col>
      <v-col class="my-10" cols="12">
        <p class="termsSubText">올데이풋볼은 언론 윤리강령을 준수합니다.</p>
        <br />
        <p class="termsSubText">
          올데이풋볼의 기사로 독자가 초상권 침해 또는 명예훼손 등 인권침해나
          재산상의 피해를 당했을 경우 이를 접수해 독자의 입장에서 신속하고
          효율적으로 문제를 해결해 드리겠습니다.
        </p>
        <br />
        <p class="termsSubText">
          불편신고에 접수된 내용은 엄격하게 비공개로 처리됩니다.
        </p>
        <br />
        <p class="termsSubText">
          불편신고는 이메일 official@allground.co.kr 또는 올데이풋볼 대표번호
          02-6953-0618 에서 접수 할 수 있습니다.
        </p>
        <br />

        <table
          border="1"
          style="border-collapse: collapse;"
          class="tableStyle termsSubText"
        >
          <tr>
            <td class="px-7">이메일</td>
            <td class="px-7">official@allground.co.kr</td>
          </tr>
          <tr>
            <td class="px-7">대표전화</td>
            <td class="px-7">02 - 6953 - 0618</td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
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
@import url('../../assets/css/unify.css');
</style>
