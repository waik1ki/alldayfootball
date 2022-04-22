<template>
  <div style="height: 80vh;" class="Login mx-auto d-flex">
    <div style="width:100%;" class="my-auto">
      <v-row class="d-flex justify-center">
        <v-col cols="6" class="d-flex justify-center">
          <v-card width="300" height="100" elevation="0">
            <v-img
              width="100%"
              height="100%"
              contain
              src="../../assets/logo/logo.png"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="!logged" class="mt-7 d-flex justify-center">
        <v-col cols="6">
          <v-text-field
            @keydown.enter="clickLogin"
            color="black"
            v-model="id"
            hide-details
            solo
            label="아이디"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col v-if="!logged" cols="6">
          <v-text-field
            @keydown.enter="clickLogin"
            type="password"
            v-model="password"
            hide-details
            solo
            label="비밀번호"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col
          class="d-flex justify-center"
          v-if="!logged"
          align-self="center"
          cols="6"
        >
          <v-btn @click="tryLogin">로그인</v-btn>
        </v-col>
        <v-col
          class="d-flex justify-center"
          v-if="logged"
          align-self="center"
          cols="6"
        >
          <v-btn @click="clickLogout">로그아웃</v-btn>
        </v-col>
      </v-row>
      <v-btn @click="checkAuth"></v-btn>
    </div>
  </div>
</template>

<script>
import { check, login, logout } from '@/api/auth';
import axios from 'axios';
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
  data() {
    return {
      id: '',
      password: '',
      logged: false,
    };
  },
  mounted() {
    axios.get('api/auth/check').then(res => {
      if (res.data.success === true) this.logged = true;
      else this.logged = false;
    });
  },
  methods: {
    async tryLogin() {
      try {
        const userData = {
          id: this.id,
          password: this.password,
        };
        await login(userData);
        const { data } = await check();
        this.$store.commit('setUserData', data.info);
        this.$router.push('/admin');
      } catch (error) {
        console.log(error);
      }
    },
    async Logout() {
      const response = await logout();
      console.log(response);
    },
  },
};
</script>

<style scoped>
@import url('../../assets/css/unify.css');
</style>
