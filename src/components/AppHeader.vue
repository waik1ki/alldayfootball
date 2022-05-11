<template>
  <div>
    <div :style="{ width: HeaderWidth }" class="Header mx-auto">
      <v-row no-gutters>
        <v-col
          class="d-flex align-center"
          cols="12"
          v-if="!this.$vuetify.breakpoint.mdAndDown"
        >
          <div
            @click="toHome()"
            style="height: 38px; width: 150px; cursor: pointer"
            class="my-6 mr-5 transparent"
          >
            <v-img
              width="100%"
              height="100%"
              contain
              src="@/assets/logo_size_down.png"
            ></v-img>
          </div>
          <div style="width: 317px"></div>
          <div class="d-flex justify-center" style="width: 45%">
            <p class="mx-auto"><a class="navTitle" href="/">홈</a></p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k1">풋볼레터</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k2">뉴스</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k3">칼럼</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/introduce">매체소개</a>
            </p>
            <p class="mx-auto">
              <a
                class="navTitle"
                href="https://forms.gle/amB1HzEarnYtWPf8A"
                target="_blank"
                >제안</a
              >
            </p>
          </div>
        </v-col>

        <v-col
          class="d-flex flex-column align-center"
          cols="12"
          v-if="this.$vuetify.breakpoint.mdAndDown"
        >
          <div
            @click="toHome()"
            style="height: 38px; width: 150px; cursor: pointer"
            class="my-4 transparent"
          >
            <v-img
              width="100%"
              height="100%"
              contain
              src="@/assets/logo_size_down.png"
            ></v-img>
          </div>
          <div
            v-if="this.$vuetify.breakpoint.mdAndDown"
            style="width: 95%; border-bottom: 1px solid rgba(0,0,0,.12);"
            class="mb-3 mx-auto"
          ></div>
          <div class="d-flex justify-center px-3" style="width: 100%;">
            <p class="mx-auto"><a class="navTitle" href="/">홈</a></p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k1">풋볼레터</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k2">뉴스</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k3">칼럼</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/introduce">매체소개</a>
            </p>
            <p class="mx-auto">
              <a
                class="navTitle"
                href="https://forms.gle/amB1HzEarnYtWPf8A"
                target="_blank"
                >제안</a
              >
            </p>
          </div>
        </v-col>
        <div
          v-if="this.$vuetify.breakpoint.mdAndDown"
          style="width: 95%; border-bottom: 1px solid rgba(0,0,0,.12);"
          class="mt-3 mx-auto"
        ></div>
      </v-row>
    </div>
    <div
      v-if="!this.$vuetify.breakpoint.mdAndDown"
      style="width: 100%; border-bottom: 2px solid rgba(0,0,0,.12);"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    HeaderWidth() {
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
  methods: {
    toHome() {
      if (this.$route.path !== '/') this.$router.push('/');
    },
  },
};
</script>

<style scoped>
@import url('../assets/css/unify.css');
</style>

<style>
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 42px !important;
  width: 200px;
  align-self: center;
}
.logo {
  cursor: pointer;
}
.navTitle {
  text-decoration: none;
  color: black !important;
}
.navTitle:hover {
  color: #00923b !important;
}
</style>
