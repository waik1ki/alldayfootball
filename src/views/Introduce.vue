<template>
  <div class="policy">
    <v-row class="mt-10 mx-auto" :style="{ width: ContentWidth }">
      <v-col class="d-flex justify-center" cols="12">
        <p class="termsMainText">매체 소개</p>
      </v-col>
      <v-col class="my-10" cols="12">
        <div class="mb-5">
          <v-card elevation="0">
            <v-img src="../assets/매체소개-1.png"></v-img>
          </v-card>
        </div>
        <div class="mb-5">
          <v-card elevation="0">
            <v-img src="../assets/매체소개-2.png" contain></v-img>
          </v-card>
        </div>
        <div class="mb-5 text-center introduceText">
          <p>안녕하세요 축구의 모든 순간과 함께하는 '올데이풋볼' 입니다.</p>
          <p>
            '올데이풋볼' 은 빠르고 정확하며, 투명한 축구 관련 정보를 제공하기
            위해 ’올데이컴퍼니’에서 설립한 매체입니다.
          </p>
          <br />
          <p>
            '올데이풋볼'은 과거 No.1 축구잡지 '축구매니아'의 새로운 도전이자
            시작입니다.
          </p>
          <br />
          <p>축구가 있는 곳이라면 어디든 함께하겠습니다.</p>
          <p>축구가 있는 곳에는 도전과 열정 그리고 설렘이 있기 때문입니다.</p>
          <br />
          <p>축구를 사랑하는 독자 여러분들을 위해 끝까지 동행하겠습니다.</p>
          <br />
          <p>관심과 성원에 감사드립니다.</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
