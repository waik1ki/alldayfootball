<template>
  <v-dialog v-model="state" width="650" @click:outside="$emit('close')">
    <v-card class="px-5 py-3">
      <v-card class="d-flex justify-end mb-3" elevation="0">
        <v-spacer></v-spacer>
        <v-icon @click="$emit('close')" small>mdi-close</v-icon>
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
            올데이풋볼은 타 기업, 단체, 브랜드와 광고 콘텐츠를 만들어 소개하기도
            합니다. 읽는 사람에게 방해가 되는 광고가 아닌, 협업하는 조직의
            전문성과 올데이풋볼만의 스토리텔링을 더해 더욱 유익하고 재밌는
            콘텐츠를 만들어내고자 노력하고 있습니다. 더불어 광고성 정보 수신에
            동의한다고 하더라도, 광고 콘텐츠가 이메일 뉴스레터에 들어가는 경우
            꼭 제목에 (광고)를 붙여 메일을 발송합니다.
          </p>
          <br />
          <p class="agreeSubText">
            현재는 뉴스레터에서 광고성 정보만 따로 보내는 것이 어렵기 때문에,
            광고성 정보 수신 동의를 하지 않을 경우 서비스 이용이 제한될 수
            있습니다. 올데이풋볼의 광고성 정보 수신 서비스를 원하지 않을 경우,
            뉴스레터 하단의 '수신 거부'를 눌러 서비스 이용을 해지할 수 있습니다.
          </p>
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
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style></style>
