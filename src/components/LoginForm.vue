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
              src="../assets/logo/logo.png"
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
            @keydown.enter="Login"
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
          <v-btn @click="Login">로그인</v-btn>
        </v-col>
        <v-col
          class="d-flex justify-center"
          v-if="logged"
          align-self="center"
          cols="6"
        >
          <v-btn @click="Logout">로그아웃</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { logout } from '@/api/auth';

export default {
  data() {
    return {
      id: '',
      password: '',
      logged: false,
    };
  },
  methods: {
    async Login() {
      try {
        const userData = {
          id: this.id,
          password: this.password,
        };

        const data = await this.$store.dispatch('auth/LOGIN', userData);
        if (data !== 'logged_in') {
          alert(data);
        } else {
          this.$router.push('/admin');
        }
      } catch (error) {
        console.log(error);
      }
    },
    async Logout() {
      const response = await logout();
      this.$store.commit('auth/setUserData', null);
      console.log(response);
    },
  },
};
</script>

<style scoped>
@import url('../assets/css/unify.css');
</style>
