<template>
  <div class="screen">
    <v-app>
      <admin-header v-if="isAdmin"></admin-header>
      <app-header v-else></app-header>
      <v-main>
        <div>
          <router-view :style="{ width: ContentWidth }" />
        </div>
      </v-main>
      <Footer v-if="!isAdmin" />
    </v-app>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AdminHeader from '@/components/Admin/AdminHeader.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    AppHeader,
    AdminHeader,
    Footer,
  },
  computed: {
    ContentWidth() {
      if (window.location.href.includes('admin')) {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return '95%';
          case 'sm':
            return '95%';
          case 'md':
            return '95%';
          case 'lg':
            return '70%';
          case 'xl':
            return '70%';
          default:
            return '70%';
        }
      }
      return '';
    },
    isAdmin() {
      if (window.location.href.includes('admin')) return true;
      return false;
    },
  },
};
</script>

<style>
.v-application p {
  margin: 0;
}
.screen {
  /* padding-top:30px; */
  background-color: #fbfbfb;
}
</style>
