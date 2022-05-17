<template>
  <div
    style="background-color:rgba(0,0,0,.85); width:100vw; height:55px;"
    class="AdminHeader"
  >
    <v-row class="fill-height" no-gutters>
      <v-col cols="12" class="d-flex align-center">
        <v-app-bar-nav-icon
          v-if="this.$vuetify.breakpoint.mdAndDown && isAdminLocation"
          class="mx-2"
          color="white"
          @click="OpenAdminDrawer"
        ></v-app-bar-nav-icon>
        <div
          v-else
          @click="toHome()"
          class="d-flex align-center"
          style="height: 30px; cursor: pointer;"
        >
          <v-img
            height="100%"
            contain
            src="@/assets/logo_size_down.png"
          ></v-img>
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
    isAdminLocation() {
      return window.location.href.includes('admin');
    },
  },
  methods: {
    OpenAdminDrawer() {
      console.log(this.$vuetify.breakpoint.mdAndDown);
      this.$store.commit(
        'set_adminDrawerBool',
        !this.$store.state.adminDrawerBool,
      );
    },
    toHome() {
      location.href = '/';
    },
  },
};
</script>

<style scoped>
@import url('../../../assets/css/unify.css');
</style>
