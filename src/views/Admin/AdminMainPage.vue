<template>
  <div :style="{ marginLeft: isMobile }" class="admin">
    <AdminDrawer />
    <router-view class="mt-16" />
  </div>
</template>

<script>
import AdminDrawer from '@/components/admin/common/AdminDrawer.vue';

export default {
  components: {
    AdminDrawer,
  },
  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '2%';
        case 'sm':
          return '2%';
        case 'md':
          return '2%';
        case 'lg':
          return '20%';
        case 'xl':
          return '20%';
        default:
          return '20%';
      }
    },
  },
};
</script>

<style></style>
