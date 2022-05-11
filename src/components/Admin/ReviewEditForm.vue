<template>
  <v-container style="background-color: #FBFBFB;">
    <v-row>
      <v-col class="black d-flex align-center" cols="12" lg="12">
        <p class="sliderTitleText" style="color:white;">
          후기 수정
        </p>
        <v-btn @click="$emit('close')" class="ml-auto" icon
          ><v-icon color="white">mdi-close</v-icon></v-btn
        >
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-8">
      <v-col cols="12" lg="2">
        <p class="sliderTitleText" style="color:black;">내용</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="title"
          hide-details
          label="내용"
          solo
        ></v-text-field>
      </v-col>
    </v-row>

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
    </v-row>
  </v-container>
</template>

<script>
import { editReview } from '@/api/review';

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
  methods: {
    responseAction(data) {
      switch (data) {
        case 'updated':
          alert('업데이트 성공.');
          break;
        case 'deleted':
          alert('삭제되었습니다.');
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
    async edit() {
      const { data } = await editReview(this.editData.id, this.title);
      this.responseAction(data);
      this.$emit('refresh');
      this.$emit('close');
    },
  },
};
</script>

<style></style>
