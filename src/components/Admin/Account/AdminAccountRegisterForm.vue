<template>
  <v-container style="background-color: #FBFBFB;" class="white">
    <v-row class="mb-3">
      <v-col class="black d-flex align-center" cols="12" lg="12">
        <p class="sliderTitleText" style="color:white;">관리자 등록</p>
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
        <v-text-field hide-details label="ID" v-model="id" solo></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="2">
        <p class="sliderTitleText" style="color:black;">비밀번호</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          hide-details
          label="Password"
          v-model="password"
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
          hide-details
          label="Name"
          v-model="name"
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
          hide-details
          label="E-mail"
          v-model="email"
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="d-flex align-center" cols="12" lg="2">
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

    <v-row class="d-flex justify-center">
      <v-col class="d-flex justify-space-around mb-2" cols="12">
        <v-btn @click="register" color="#509F3F"
          ><v-icon color="white">mdi-upload</v-icon>
          <p class="subText" style="color:white;">등록하기</p></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { imageUpload } from '@/api/storage';
import { registerUser } from '@/api/auth';

import Methods_ResponseAction from '@/mixins/account/Methods_ResponseAction';
import Mounted_InitJodit from '@/mixins/account/Methods_InitForm';

export default {
  mixins: [Methods_ResponseAction, Mounted_InitJodit],
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
    inputValidation() {
      if (this.id === '') {
        alert('id를 입력하세요');
        return true;
      }
      if (this.password === '') {
        alert('비밀번호를 입력하세요');
        return true;
      }
      if (this.name === '') {
        alert('이름을 입력하세요');
        return true;
      }
      if (this.email === '') {
        alert('이메일을 입력하세요');
        return true;
      }
    },
    async register() {
      if (this.inputValidation()) return;
      var photoURL = '';
      if (this.file != '') {
        const formData = new FormData();
        formData.append('image', this.file);
        const { data } = await imageUpload(formData);
        photoURL = data.slice(0);
      }

      const userData = {
        id: this.id,
        name: this.name,
        email: this.email,
        photo: photoURL,
        password: this.password,
        superAdmin: this.radio === 0,
      };
      const { data } = await registerUser(userData);
      this.responseAction(data);
    },
  },
};
</script>

<style></style>
