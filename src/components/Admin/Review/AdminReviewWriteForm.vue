<template>
  <v-container style="background-color: #FBFBFB;" class="white">
    <v-row class="mb-3">
      <v-col class="black d-flex align-center" cols="12" lg="12">
        <p class="sliderTitleText" style="color:white;">후기 등록</p>
        <v-btn @click="close" class="ml-auto" icon
          ><v-icon color="white">mdi-close</v-icon></v-btn
        >
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="2">
        <p class="sliderTitleText" style="color:black;">작성자</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="author"
          hide-details
          label="이름"
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="2">
        <p class="sliderTitleText" style="color:black;">닉네임</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="nickName"
          hide-details
          label="닉네임"
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="2">
        <p class="sliderTitleText" style="color:black;">후기</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="title"
          hide-details
          label="내용을 작성해주세요."
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="d-flex justify-space-around mb-2" cols="12">
        <v-btn @click="createReviewData" color="#509F3F"
          ><v-icon color="white">mdi-upload</v-icon>
          <p class="subText" style="color:white;">등록하기</p></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createReview } from '@/api/review';

export default {
  data() {
    return {
      nickName: '',
      author: '',
      title: '',
    };
  },
  methods: {
    async createReviewData() {
      const { data } = await createReview(
        this.nickName,
        this.author,
        this.title,
      );
      this.responseAction(data);
    },
    responseAction(data) {
      switch (data) {
        case 'uploaded':
          alert('업로드 성공.');
          this.initForm();
          this.$emit('refresh');
          break;
        case 'not_logged':
          alert('권한이 없습니다.');
          break;
        case 'not_admin':
          alert('권한이 없습니다.');
          break;
        default:
          alert('권한이 없습니다.');
          break;
      }
    },
    initForm() {
      this.nickName = '';
      this.author = '';
      this.title = '';
    },
    close() {
      this.initForm();
      this.$emit('close');
    },
  },
};
</script>

<style></style>
