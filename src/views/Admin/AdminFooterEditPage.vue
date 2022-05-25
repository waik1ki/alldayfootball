<template>
  <div class="my-5">
    <v-row class="my-5">
      <v-col cols="12">
        <p class="mainText">푸터관리</p>
      </v-col>
    </v-row>
    <Footer @isLoading="loadingState = true" />
    <admin-footer-edit-form v-if="loadingState"></admin-footer-edit-form>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import AdminFooterEditForm from '@/components/admin/AdminFooterEditForm.vue';
export default {
  components: { Footer, AdminFooterEditForm },
  data() {
    return {
      loadingState: false,
    };
  },
};
</script>

<style></style>
