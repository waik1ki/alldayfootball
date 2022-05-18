<template>
  <div
    style="height: 80vh;"
    class="Login mx-auto d-flex align-center justify-center"
  >
    <v-card width="450" height="250" elevation="8">
      <div
        style="background-color: rgba(0,0,0,.85); height: 50px;"
        class="d-flex align-center"
      >
        <h4 class="ml-4" style="color: rgba(255,255,255,.85);">페이지 관리</h4>
      </div>
      <div class="d-flex flex-column align-center loginForm">
        <div style="width: 90%">
          <v-text-field
            class="my-5"
            @keydown.enter="clickLogin"
            color="black"
            v-model="id"
            hide-details
            solo
            label="아이디"
          ></v-text-field>
        </div>
        <div style="width: 90%">
          <v-text-field
            @keydown.enter="Login"
            type="password"
            v-model="password"
            hide-details
            solo
            label="비밀번호"
          ></v-text-field>
        </div>
        <div class="mt-5">
          <v-btn @click="Login" color="rgba(0,0,0,.12)">
            <h4>Login</h4>
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      password: '',
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
  },
};
</script>

<style scoped>
@import url('../assets/css/unify.css');
</style>

<style>
.loginForm .v-text-field.v-text-field--solo .v-input__control {
  min-height: 42px !important;
  width: 200px;
  align-self: center;
}
</style>
