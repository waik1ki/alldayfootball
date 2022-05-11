<template>
  <div class="ConfigText">
    <v-row class="my-5">
      <v-col cols="12">
        <p class="mainText">기타관리</p>
      </v-col>
      <v-col cols="12">
        <v-expansion-panels v-model="panel" multiple focusable>
          <v-expansion-panel class="my-5">
            <v-expansion-panel-header
              ><p class="mainSubText">Footer 수정</p></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <div
                class="Footer mt-10"
                style="width:100%; background-color:#0C9045;"
              >
                <div v-if="!this.$vuetify.breakpoint.smAndDown">
                  <v-row
                    class="py-6"
                    v-if="!this.$vuetify.breakpoint.smAndDown"
                    no-gutters
                  >
                    <v-col cols="6" class="pl-5">
                      <p style="color:white;" class="articleSubText mr-6">
                        당신의 아침과 함께할 모닝 축구 뉴스레터
                      </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="text-start" cols="2">
                      <p
                        @click="goto('/introduce')"
                        style="color:white; cursor:pointer;"
                        class="articleSubText pl-16"
                      >
                        매체소개
                      </p>
                      <p
                        @click="goto('/policy')"
                        style="color:white; cursor:pointer;"
                        class="articleSubText pl-16"
                      >
                        청소년 보호정책
                      </p>
                      <p
                        @click="goto('/terms-of-use')"
                        style="color:white; cursor:pointer;"
                        class="articleSubText pl-16"
                      >
                        서비스이용약관
                      </p>
                      <p
                        @click="goto('/privacy-policy')"
                        style="color:white; cursor:pointer;"
                        class="articleSubText pl-16"
                      >
                        개인정보처리방침
                      </p>
                    </v-col>
                  </v-row>
                  <div
                    style="width: 100%; border-bottom: 1px solid rgba(255,255,255,.4);"
                  ></div>
                  <v-row class="py-6" no-gutters>
                    <v-col cols="12" class="pl-5">
                      <div class="d-flex align-end">
                        <p class="articleSubText" style="color: white">
                          올데이풋볼 2019 - 2021 | 대표자 : 이학진 | {{ add }}
                          <br />
                          전화번호 : {{ tel.replace(/-/gi, ' - ') }} | FAX : 02
                          - 6944 - 9018 | 메일주소 : {{ email }}<br />
                          사업자등록번호 : 832-86-02092 | 통신판매업신고 :
                          제2021-고양덕양구-1421호 | 직업정보제공사업 신고번호 :
                          J1202020210005<br />
                          발행인 : {{ pub }} | 편집인: {{ edi }} |
                          청소년보호정책책임자: {{ pol }}<br /><br />
                          Copyright © 2019 by alldayfootball. All rights
                          reserved.
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <v-row v-if="this.$vuetify.breakpoint.smAndDown" no-gutters>
                  <v-col class="d-flex justify-center my-5" cols="12">
                    <p
                      @click="goto('/introduce')"
                      style="color:white; cursor:pointer;"
                      class="articleTinyText mx-3"
                    >
                      매체소개
                    </p>
                    <p
                      @click="goto('/policy')"
                      style="color:white; cursor:pointer;"
                      class="articleTinyText mx-3"
                    >
                      청소년 보호정책
                    </p>
                    <p
                      @click="goto('/terms-of-use')"
                      style="color:white; cursor:pointer;"
                      class="articleTinyText mx-3"
                    >
                      서비스이용약관
                    </p>
                    <p
                      @click="goto('/privacy-policy')"
                      style="color:white; cursor:pointer;"
                      class="articleTinyText mx-3"
                    >
                      개인정보처리방침
                    </p>
                  </v-col>
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header color="#0C9045">
                        <p
                          style="color:rgba(255,255,255,.8); text-align:center;"
                          class="articleTinyText pa-1"
                        >
                          사업자 정보
                        </p>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content color="#0C9045">
                        <v-col cols="12" class="pb-0">
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            올데이풋볼 2019 - 2021
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            대표자 : 이학진
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            전화번호: {{ tel }}
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            FAX : 02 - 6944 - 9018
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            사업자등록번호 : 832-86-02092
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            통신판매업신고 : 제2021-고양덕양구-1421호
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            직업정보제공사업 신고번호 : J1202020210005
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            발행인: {{ pub }} | 편집인: {{ edi }}
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            청소년보호정책책임자: {{ pol }}
                          </p>
                        </v-col>
                        <v-col class="mb-2" cols="12">
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-2"
                          >
                            {{ add }}
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-2"
                          >
                            Copyright © 2019 by alldayfootball. All rights
                            reserved.
                          </p>
                        </v-col>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </div>
              <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                  <p class="sliderTitleText">메일주소 :</p>
                </v-col>
                <v-col cols="auto">
                  <v-text-field
                    solo
                    v-model="email"
                    label="email"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                  <p class="sliderTitleText">대표전화 :</p>
                </v-col>
                <v-col cols="auto">
                  <v-text-field
                    solo
                    v-model="tel"
                    label="전화번호"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                  <p class="sliderTitleText">발행인 :</p>
                </v-col>
                <v-col cols="auto">
                  <v-text-field
                    solo
                    v-model="pub"
                    label="발행인"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                  <p class="sliderTitleText">편집인 :</p>
                </v-col>
                <v-col cols="auto">
                  <v-text-field
                    solo
                    v-model="edi"
                    label="편집인"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                  <p class="sliderTitleText">청소년보호정책책임자 :</p>
                </v-col>
                <v-col cols="auto">
                  <v-text-field
                    solo
                    v-model="pol"
                    label="정책책임자"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                  <p class="sliderTitleText">주소 :</p>
                </v-col>
                <v-col cols="12" lg="8">
                  <v-text-field
                    solo
                    v-model="add"
                    label="주소"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center" cols="12">
                  <v-btn class="ma-3" @click="updateFooterData" color="#509F3F"
                    ><v-icon color="white">mdi-upload</v-icon>
                    <p class="subText" style="color:white;">수정하기</p></v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="my-5">
            <v-expansion-panel-header
              ><p class="mainSubText">후기 관리</p></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-row class="my-5">
                <v-col cols="12">
                  <p class="mainSubText">후기 작성</p>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                    hide-details
                    v-model="nickName"
                    label="닉네임"
                    solo
                    class="mb-2"
                  ></v-text-field>
                  <v-text-field
                    hide-details
                    v-model="author"
                    label="작성자"
                    solo
                    class="mb-2"
                  ></v-text-field>
                  <v-textarea
                    hide-details
                    v-model="title"
                    label="후기를 작성해주세요."
                    solo
                    class="mb-2"
                  ></v-textarea>
                  <div class="d-flex" style="width: 100%">
                    <v-btn
                      class="ml-auto px-2"
                      @click="writeReview"
                      color="#0C9045"
                    >
                      <p style="color:white;">등록</p></v-btn
                    >
                  </div>
                </v-col>
              </v-row>

              <v-row class="my-5">
                <v-col cols="12">
                  <p class="mainSubText">구독자 후기</p>
                </v-col>
              </v-row>

              <div v-if="!this.$vuetify.breakpoint.mdAndDown">
                <v-row style="text-align:center;" class="mt-5" no-gutters>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="1"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      No
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="8"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      제목
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="2"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      작성자
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="1"
                  >
                    <p style="color:white;" class="sliderTitleText">관리</p>
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
                  <v-col class="py-2" cols="8">
                    <p
                      style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);"
                      class="newsSubText"
                    >
                      {{ i.title }}
                    </p>
                  </v-col>
                  <v-col class="py-2" cols="2">
                    <p
                      style="border-right:1px solid rgba(0,0,0,.25);"
                      class="sliderTitleText"
                    >
                      {{ i.author }}
                    </p>
                  </v-col>
                  <v-col class="py-2" cols="1">
                    <div class="d-flex">
                      <v-btn
                        text
                        elevation="0"
                        height="19px"
                        min-width="28px"
                        class="mx-auto px-2"
                        @click="openReviewEditForm(i)"
                        >수정</v-btn
                      >
                      <v-btn
                        text
                        elevation="0"
                        height="19px"
                        min-width="28px"
                        class="mx-auto px-2"
                        @click="deleteReviewData(i._id)"
                        >삭제</v-btn
                      >
                    </div>
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

              <div v-if="this.$vuetify.breakpoint.mdAndDown">
                <v-row style="text-align:center;" class="mt-5" no-gutters>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="1"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      No
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="7"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      제목
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="2"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      작성자
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="2"
                  >
                    <p style="color:white;" class="sliderTitleText">관리</p>
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
                  <v-col class="py-2" cols="7">
                    <p
                      style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);"
                      class="newsSubText"
                    >
                      {{ i.title }}
                    </p>
                  </v-col>
                  <v-col class="py-2" cols="2">
                    <p
                      style="border-right:1px solid rgba(0,0,0,.25);"
                      class="sliderTitleText"
                    >
                      {{ i.author }}
                    </p>
                  </v-col>
                  <v-col class="py-2" cols="2">
                    <div class="d-flex">
                      <v-btn
                        text
                        elevation="0"
                        height="19px"
                        min-width="28px"
                        class="mx-auto px-2"
                        @click="openReviewEditForm(i)"
                        >수정</v-btn
                      >
                      <v-btn
                        text
                        elevation="0"
                        height="19px"
                        min-width="28px"
                        class="mx-auto px-2"
                        @click="deleteReviewData(i._id)"
                        >삭제</v-btn
                      >
                    </div>
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
                                v-model="Page"
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

              <v-dialog v-model="editDialog" :width="dialogWidth">
                <review-edit-form
                  @close="editDialog = false"
                  @refresh="fetchReviewsData"
                  :editData="propsEditData"
                ></review-edit-form>
              </v-dialog>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { postReview, paginationReviews, deleteReview } from '@/api/review';
import { updateFooter } from '@/api/config';

import ReviewEditForm from './ReviewEditForm.vue';
export default {
  components: {
    ReviewEditForm,
  },
  data() {
    return {
      panel: [],

      // 푸터 데이터
      email: '',
      tel: '',
      pub: '',
      edi: '',
      pol: '',
      add: '',

      // 리뷰 데이터
      nickName: '',
      author: '',
      title: '',
      reviews: [],

      // 리뷰 페이지 네이션
      totalReviewLength: 0,
      page: 1,

      // 리뷰 수정 팝업 데이터
      propsEditData: {},
      editDialog: false,
    };
  },
  created() {
    this.fetchFooterData();
    this.fetchReviewsData();
  },
  methods: {
    async updateFooterData() {
      const { data } = await updateFooter(this.info);
      if (data === 'updated') {
        await this.$store.dispatch('config/FETCH_FOOTER_DATA');
        this.fetchFooterData();
        alert('수정되었습니다.');
        location.reload();
      }
    },
    fetchFooterData() {
      const footer = this.$store.state.config.footerData;
      this.email = footer.email;
      this.tel = footer.tel;
      this.pub = footer.pub;
      this.edi = footer.edi;
      this.pol = footer.pol;
      this.add = footer.add;
    },
    async fetchReviewsData() {
      const { data } = await paginationReviews(10, this.page);
      console.log(data);
      this.reviews = data.docs;
      this.totalReviewLength = data.totalDocs;
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
    async writeReview() {
      const { data } = await postReview(this.nickName, this.author, this.title);
      this.responseAction(data);
    },
    openReviewEditForm(data) {
      this.propsEditData = {
        id: data._id,
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

<style scoped>
@import url('../../assets/css/unify.css');
</style>
