<template>
  <div class="my-5">
    <v-row class="my-5">
      <v-col cols="12">
        <p class="mainSubText">푸터 내용 수정</p>
      </v-col>
    </v-row>
    <Footer @isLoding="lodingState = true" />
    <admin-footer-edit-form v-if="lodingState"></admin-footer-edit-form>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import AdminFooterEditForm from '@/components/Admin/AdminFooterEditForm.vue';
export default {
  components: { Footer, AdminFooterEditForm },
  data() {
    return {
      lodingState: false,
    };
  },
};
</script>

<style></style>
