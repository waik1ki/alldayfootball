<template>
  <div class="Accout">
    <v-row class="my-5">
      <v-col cols="12">
        <p class="mainText">계정관리</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="grey lighten-2" cols="4">
        <p style="text-align:center" class="sliderTitleText">이름</p>
      </v-col>
      <v-col class="grey lighten-2" cols="4">
        <p style="text-align:center" class="sliderTitleText">아이디</p>
      </v-col>
      <v-col class="grey lighten-2" cols="4">
        <p style="text-align:center" class="sliderTitleText">등급</p>
      </v-col>
    </v-row>
    <v-row
      style="border-bottom:1px solid rgba(0,0,0,.2);"
      @click="openAccountEditForm(users[idx])"
      v-for="(i, idx) in users"
      :key="idx"
    >
      <v-col style="border-right:1px solid rgba(0,0,0,.2);" cols="4">
        <p style="text-align:center; color:black" class="sliderTitleText">
          {{ i.name }}
        </p>
      </v-col>
      <v-col style="border-right:1px solid rgba(0,0,0,.2);" cols="4">
        <p style="text-align:center; color:black;" class="sliderTitleText">
          {{ i.id }}
        </p>
      </v-col>
      <v-col cols="4">
        <p
          v-if="i.superAdmin"
          style="text-align:center; color:black;"
          class="sliderTitleText"
        >
          최고관리자
        </p>
        <p
          v-if="!i.superAdmin"
          style="text-align:center; color:black;"
          class="sliderTitleText"
        >
          일반관리자
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-end" cols="12">
        <v-btn @click="registerDialog = true" color="#509F3F" class="mr-10 my-5"
          ><v-icon color="white">mdi-pencil-plus</v-icon>
          <p class="subText" style="color:white;">관리자 등록</p></v-btn
        >
      </v-col>
    </v-row>
    <v-dialog v-model="registerDialog" :width="dialogWidth">
      <admin-account-register-form
        @refresh="fetchUserData"
        @close="registerDialog = false"
      ></admin-account-register-form>
    </v-dialog>

    <v-dialog v-model="editDialog" :width="dialogWidth">
      <admin-account-edit-form
        :user="propData"
        @refresh="fetchUserData"
        @close="editDialog = false"
      ></admin-account-edit-form>
    </v-dialog>
  </div>
</template>

<script>
import { fetchUsers } from '@/api/auth';
import AdminAccountRegisterForm from './AdminAccountRegisterForm.vue';
import AdminAccountEditForm from './AdminAccountEditForm.vue';

export default {
  components: {
    AdminAccountRegisterForm,
    AdminAccountEditForm,
  },
  data() {
    return {
      users: [{ name: '', id: '', superAdmin: true, Admin: true }],
      registerDialog: false,
      editDialog: false,
      propData: {},
    };
  },
  computed: {
    dialogWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '100%';
        case 'sm':
          return '100%';
        case 'md':
          return '90%';
        case 'lg':
          return '60%';
        case 'xl':
          return '50%';
        default:
          return '100%';
      }
    },
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const { data } = await fetchUsers();
      this.users = data;
      this.registerDialog = false;
      this.editDialog = false;
    },
    openAccountEditForm(data) {
      this.propData = data;
      this.editDialog = true;
    },
  },
};
</script>

<style scoped>
@import url('../../../assets/css/unify.css');
</style>
