<template>
  <div class="my-5">
    <v-row class="my-5">
      <v-col cols="12">
        <p class="mainSubText">구독자 후기</p>
      </v-col>
    </v-row>

    <div>
      <v-row style="text-align:center;" class="mt-5" no-gutters>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            No
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="9">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            제목
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            닉네임
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p style="color:white;" class="sliderTitleText">작성자</p>
        </v-col>
      </v-row>
      <v-row
        style="text-align:center;border-bottom:1px solid rgba(0,0,0,.2);"
        no-gutters
        v-for="(i, index) in reviews"
        :key="index"
      >
        <v-col class="py-2" cols="1">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);"
            class="sliderTitleText"
          >
            {{ i.seq }}
          </p>
        </v-col>
        <v-col class="py-2" cols="9" @click="openReviewEditForm(i)">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);"
            class="newsSubText px-3"
          >
            {{ i.title }}
          </p>
        </v-col>
        <v-col class="py-2" cols="1">
          <p
            style="border-right:1px solid rgba(0,0,0,.25);"
            class="sliderTitleText"
          >
            {{ i.nickName }}
          </p>
        </v-col>
        <v-col class="py-2" cols="1">
          <p class="sliderTitleText">
            {{ i.author }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-end" cols="12">
          <v-btn @click="writeDialog = true" color="#509F3F" class="mr-10 my-5"
            ><v-icon color="white">mdi-pencil-plus</v-icon>
            <p class="subText" style="color:white;">후기 등록</p></v-btn
          >
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="text-center">
            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-container class="max-width">
                    <v-pagination
                      v-model="page"
                      class="my-4"
                      color="#0C9045"
                      :length="pageLength"
                    ></v-pagination>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="writeDialog" :width="dialogWidth" persistent>
      <admin-review-write-form
        @refresh="fetchReviewsData"
        @close="writeDialog = false"
      ></admin-review-write-form>
    </v-dialog>

    <v-dialog v-model="editDialog" :width="dialogWidth" persistent>
      <admin-review-edit-form
        @close="editDialog = false"
        @refresh="fetchReviewsData"
        :editData="propsEditData"
      ></admin-review-edit-form>
    </v-dialog>
  </div>
</template>

<script>
import { paginationReviews, deleteReview } from '@/api/review';
import AdminReviewWriteForm from './AdminReviewWriteForm.vue';
import AdminReviewEditForm from './AdminReviewEditForm.vue';

export default {
  components: { AdminReviewWriteForm, AdminReviewEditForm },
  data() {
    return {
      reviews: [],

      // 리뷰 페이지 네이션
      totalReviewLength: 0,
      page: 1,

      // 리뷰 수정 팝업 데이터
      propsEditData: {},
      editDialog: false,
      writeDialog: false,
    };
  },
  created() {
    this.fetchReviewsData();
  },
  methods: {
    async fetchReviewsData() {
      const { data } = await paginationReviews(10, this.page);
      console.log(data);
      this.reviews = data.docs;
      this.totalReviewLength = data.totalDocs;
      this.editDialog = false;
      this.writeDialog = false;
    },
    initForm() {
      this.nickName = '';
      this.author = '';
      this.title = '';
    },
    responseAction(data) {
      switch (data) {
        case 'uploaded':
          alert('업로드 성공.');
          this.initForm();
          this.fetchReviewsData();
          break;
        case 'deleted':
          alert('삭제되었습니다.');
          this.fetchReviewsData();
          break;
        case 'not_logged':
          alert('권한이 없습니다.');
          break;
        case 'not_admin':
          alert('권한이 없습니다.');
          break;
        default:
          alert('권한이 없습니다.');
          break;
      }
    },

    openReviewEditForm(data) {
      this.propsEditData = {
        id: data._id,
        nickName: data.nickName,
        author: data.author,
        title: data.title,
      };
      this.editDialog = true;
    },
    async deleteReviewData(id) {
      const { data } = await deleteReview(id);
      this.responseAction(data);
    },
  },
  computed: {
    info() {
      return {
        email: this.email,
        tel: this.tel,
        pub: this.pub,
        edi: this.edi,
        pol: this.pol,
        add: this.add,
      };
    },
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
    pageLength() {
      var quo = parseInt(this.totalReviewLength / 10);
      var rem = this.totalReviewLength % 10;
      if (quo === 0) return 1;
      if (quo > 0 && rem === 0) return quo;
      return quo + 1;
    },
  },
  watch: {
    page() {
      this.fetchReviewsData();
    },
  },
};
</script>

<style></style>
