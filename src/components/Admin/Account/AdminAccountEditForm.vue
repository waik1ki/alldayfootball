<template>
  <v-container style="background-color: #FBFBFB;">
    <v-row class="mb-3">
      <v-col class="black d-flex align-center" cols="12" lg="12">
        <p class="sliderTitleText" style="color:white;">관리자 정보 수정</p>
        <v-btn @click="$emit('close')" class="ml-auto" icon
          ><v-icon color="white">mdi-close</v-icon></v-btn
        >
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="2">
        <p class="sliderTitleText" style="color:black;">ID</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="id"
          hide-details
          :label="user.id"
          disabled
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="2">
        <p class="sliderTitleText" style="color:black;">비밀번호</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="password"
          hide-details
          :label="Password"
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="2">
        <p class="sliderTitleText" style="color:black;">이름</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="name"
          hide-details
          :label="user.name"
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="2">
        <p class="sliderTitleText" style="color:black;">E-mail</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="email"
          hide-details
          :label="user.email"
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="d-flex align-center" lg="2">
        <p class="sliderTitleText" style="color:black;">구분</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-radio-group row v-model="radio">
          <v-radio label="최고 관리자" :value="0"></v-radio>
          <v-radio label="일반 관리자" :value="1"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="d-flex align-center" lg="2">
        <p class="sliderTitleText" style="color:black;">사진업로드</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-file-input
          v-model="file"
          prepend-icon="mdi-camera"
          accept="image/png, image/jpeg, image/bmp"
          label="사진업로드"
        ></v-file-input>
      </v-col>
    </v-row>

    <v-row v-if="!$vuetify.mdAndDown" class="d-flex justify-center">
      <v-col class="d-flex justify-space-around mb-2" cols="12" lg="12">
        <v-btn @click="edit" color="#509F3F"
          ><v-icon color="white">mdi-upload</v-icon>
          <p class="subText" style="color:white;">등록하기</p></v-btn
        >
        <v-btn @click="deleteUserData(user.id)" color="#737373"
          ><v-icon color="white">mdi-trash-can-outline</v-icon>
          <p class="subText" style="color:white;">삭제하기</p></v-btn
        >
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.mdAndDown" class="d-flex justify-center">
      <v-col class="d-flex justify-space-around" cols="12" lg="12">
        <v-btn x-small @click="edit" color="#509F3F"
          ><v-icon color="white">mdi-upload</v-icon>
          <p class="subText" style="color:white;">등록</p></v-btn
        >
        <v-btn x-small @click="deleteUserData(user.id)" color="#737373"
          ><v-icon color="white">mdi-trash-can-outline</v-icon>
          <p class="subText" style="color:white;">삭제</p></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { imageUpload } from '@/api/storage';
import { editUser, deleteUser } from '@/api/auth';

import Methods_ResponseAction from '@/mixins/account/Methods_ResponseAction';
import Mounted_InitJodit from '@/mixins/account/Methods_InitForm';

export default {
  mixins: [Methods_ResponseAction, Mounted_InitJodit],
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      id: '',
      name: '',
      password: '',
      radio: 0,
      file: '',
      email: '',
    };
  },
  methods: {
    async edit() {
      var photoURL = '';
      if (this.file != '') {
        const formData = new FormData();
        formData.append('image', this.file);
        const { data } = await imageUpload(formData);
        photoURL = data.slice(0);
      }

      const userData = {
        id: this.user.id,
        name: this.name,
        email: this.email,
        photo: photoURL,
        password: this.password,
        superAdmin: this.radio === 0,
      };
      const { data } = await editUser(userData);
      this.responseAction(data);
    },
    async deleteUserData(id) {
      const { data } = await deleteUser(id);
      this.responseAction(data);
    },
  },
};
</script>

<style></style>
