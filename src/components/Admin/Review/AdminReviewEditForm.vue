<template>
  <v-container style="background-color: #FBFBFB;">
    <v-row class="mb-3">
      <v-col class="black d-flex align-center" cols="12" lg="12">
        <p class="sliderTitleText" style="color:white;">
          후기 수정
        </p>
        <v-btn @click="$emit('close')" class="ml-auto" icon
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
          disabled
          v-model="editData.author"
          hide-details
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
          disabled
          v-model="editData.nickName"
          hide-details
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

    <v-row v-if="!$vuetify.mdAndDown" class="d-flex justify-center">
      <v-col class="d-flex justify-space-around mb-2" cols="12" lg="12">
        <v-btn @click="editReviewData" color="#509F3F"
          ><v-icon color="white">mdi-upload</v-icon>
          <p class="subText" style="color:white;">등록하기</p></v-btn
        >
        <v-btn @click="deleteReviewData(editData.id)" color="#737373"
          ><v-icon color="white">mdi-trash-can-outline</v-icon>
          <p class="subText" style="color:white;">삭제하기</p></v-btn
        >
      </v-col>
    </v-row>
    <!-- 
    <v-row v-if="!$vuetify.mdAndDown" class="d-flex justify-center">
      <v-col class="d-flex justify-space-around" cols="12" lg="12">
        <v-btn @click="edit" color="#509F3F"
          ><v-icon color="white">mdi-upload</v-icon>
          <p class="subText" style="color:white;">
            수정하기
          </p></v-btn
        >
      </v-col>
    </v-row>

    <v-row v-if="$vuetify.mdAndDown" class="d-flex justify-center">
      <v-col class="d-flex justify-space-around" cols="12" lg="12">
        <v-btn x-small @click="edit" color="#509F3F"
          ><v-icon color="white">mdi-upload</v-icon>
          <p class="subText" style="color:white;">수정</p></v-btn
        >
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import { editReview, deleteReview } from '@/api/review';

export default {
  props: {
    editData: Object,
  },
  data() {
    return {
      title: '',
    };
  },
  created() {
    this.title = this.editData.title;
  },
  watch: {
    editData() {
      this.title = this.editData.title;
    },
  },
  methods: {
    responseAction(data) {
      switch (data) {
        case 'updated':
          alert('업데이트 성공.');
          this.$emit('refresh');
          this.$emit('close');
          break;
        case 'deleted':
          alert('삭제되었습니다.');
          this.$emit('refresh');
          this.$emit('close');
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
    async editReviewData() {
      const { data } = await editReview(this.editData.id, this.title);
      this.responseAction(data);
    },
    async deleteReviewData(id) {
      const { data } = await deleteReview(id);
      this.responseAction(data);
    },
  },
};
</script>

<style></style>
