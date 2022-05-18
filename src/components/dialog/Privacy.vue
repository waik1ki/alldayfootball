<template>
  <v-dialog v-model="state" width="650" @click:outside="$emit('close')">
    <v-card class="px-5 py-3">
      <v-card class="d-flex justify-end mb-3" elevation="0">
        <v-spacer></v-spacer>
        <v-icon @click="$emit('close')" small>mdi-close</v-icon>
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
            개인정보 수집·이용 동의를 거부할 권리가 있으며, 거부할 경우 뉴스레터
            구독 서비스를 이용할 수 없습니다.
          </p>
        </div>
        <div class="mb-4">
          <p class="agreeText mb-1">개인정보 처리 위탁·수탁</p>
          <p class="agreeSubText mb-1">
            회사는 서비스 제공 및 향상을 위해서 아래와 같이 개인정보를 위탁하고
            있으며, 관계 법령에 따라 위탁 계약 시 개인정보가 안전하게 관리될 수
            있도록 필요한 사항을 규정하고 있습니다.
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
</template>

<script>
export default {
  props: {
    state: Boolean,
  },
};
</script>

<style></style>
