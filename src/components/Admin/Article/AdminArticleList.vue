<template>
  <div id="Article" class="Article">
    <v-row class="my-5">
      <v-col cols="12">
        <p class="mainText">기사관리</p>
      </v-col>
    </v-row>
    <!-- 카테고리 -->
    <v-row>
      <v-col cols="12">
        <v-combobox
          color="green"
          v-model="select"
          :items="category"
          label="카테고리"
          solo
          multiple
          chips
        >
          <template v-slot:item="{ item }">
            <v-chip color="green" dark label small>
              {{ item }}
            </v-chip>
          </template>

          <template v-slot:selection="{ item, attrs, select }">
            <v-chip
              v-bind="attrs"
              :input-value="select"
              color="green"
              dark
              label
              small
            >
              {{ item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
    </v-row>
    <!-- 라디오 버튼 -->
    <v-row no-gutters>
      <v-col cols="12">
        <v-radio-group v-model="row" row>
          <v-radio label="날짜순(최신순)" value="regTime"></v-radio>
          <v-radio label="번호순(과거순)" value="seq"></v-radio>
          <v-radio label="가나다순" value="title"></v-radio>
          <v-radio label="조회수순" value="views"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="d-flex align-center" cols="12">
        <v-text-field
          @keypress.enter="fetchArticle"
          hide-details
          v-model="search"
          label="검색"
          solo
        ></v-text-field>
        <v-btn
          icon
          style="height:90%;"
          class="mx-3 px-2"
          @click="fetchArticle"
          color="#0C9045"
          ><v-icon>mdi-magnify</v-icon></v-btn
        >
      </v-col>
    </v-row>

    <div v-if="!this.$vuetify.breakpoint.mdAndDown">
      <v-row style="text-align:center;" class="mt-5" no-gutters>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            No
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            분류
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="5">
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
            작성자
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            조회수
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="2">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            날짜
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p style="color:white;" class="sliderTitleText">
            고유번호
          </p>
        </v-col>
      </v-row>

      <v-row
        style="text-align:center;border-bottom:1px solid rgba(0,0,0,.2);"
        no-gutters
        v-for="(i, index) in boards"
        :key="index"
      >
        <v-col class="py-2" cols="1">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;"
            class="sliderTitleText"
          >
            {{ index + 1 + (page - 1) * 10 }}
          </p>
        </v-col>
        <v-col class="py-2" cols="1">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;"
            class="sliderTitleText"
          >
            {{ category[i.bNum] }}
          </p>
        </v-col>
        <v-col class="py-2" cols="5">
          <p
            @click="openEditDialog(i.seq)"
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);; cursor:pointer;"
            class="newsSubText"
          >
            {{ i.title }}
          </p>
        </v-col>
        <v-col class="py-2" cols="1">
          <p
            style="border-right:1px solid rgba(0,0,0,.25);;"
            class="sliderTitleText"
          >
            {{ i.author }}
          </p>
        </v-col>
        <v-col class="py-2" cols="1">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;"
            class="sliderTitleText"
          >
            {{ i.views }}
          </p>
        </v-col>
        <v-col class="py-2" cols="2">
          <p
            class="sliderTitleText"
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;"
          >
            {{ i.regTime.slice(0, 10) }}
          </p>
        </v-col>
        <v-col class="py-2" cols="1">
          <p class="sliderTitleText">
            {{ i.seq }}
          </p>
        </v-col>
      </v-row>
    </div>

    <div v-if="this.$vuetify.breakpoint.mdAndDown">
      <v-row style="text-align:center;" class="mt-5" no-gutters>
        <v-col class="py-3" style="background-color:#0C9045;" cols="6">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            제목
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="3">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            작성자
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="3">
          <p style="color:white;" class="sliderTitleText">날짜</p>
        </v-col>
      </v-row>

      <v-row
        style="text-align:center;border-bottom:1px solid rgba(0,0,0,.2);"
        no-gutters
        v-for="(i, index) in boards"
        :key="index"
      >
        <v-col class="py-2" cols="6">
          <p
            @click="routeEditPage(i.seq)"
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);; cursor:pointer;"
            class="sliderTitleText"
          >
            {{ i.title }}
          </p>
        </v-col>
        <v-col class="py-2" cols="3">
          <p
            style="border-right:1px solid rgba(0,0,0,.25);;"
            class="sliderTitleText"
          >
            {{ i.author }}
          </p>
        </v-col>
        <v-col class="py-2" cols="3">
          <p class="sliderTitleText">{{ i.regTime.slice(0, 10) }}</p>
        </v-col>
      </v-row>
    </div>
    <!-- 글쓰기 버튼 -->
    <v-row>
      <v-col class="d-flex justify-end mt-10" cols="12">
        <v-btn class="mr-3" color="#509F3F" @click="writeDialog = true"
          ><v-icon color="white">mdi-pencil-plus</v-icon>
          <p class="subText" style="color:white;">글쓰기</p></v-btn
        >
      </v-col>
    </v-row>
    <!-- 페이지 네이션 -->
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
    <v-dialog v-model="writeDialog" :width="dialogWidth" persistent>
      <admin-article-write-form
        @refresh="fetchArticle"
        @close="writeDialog = false"
      ></admin-article-write-form>
    </v-dialog>

    <v-dialog v-model="editDialog" :width="dialogWidth" persistent>
      <admin-article-edit-form
        :articleNumber="articleNumber"
        :visible="editDialog"
        @refresh="fetchArticle"
        @close="editDialog = false"
      ></admin-article-edit-form>
    </v-dialog>
  </div>
</template>

<script>
import AdminArticleWriteForm from '@/components/admin/article/AdminArticleWriteForm.vue';
import AdminArticleEditForm from '@/components/admin/article/AdminArticleEditForm.vue';
import { fetchSortedBoard } from '@/api/board';

export default {
  components: {
    AdminArticleWriteForm,
    AdminArticleEditForm,
  },
  data() {
    return {
      row: 'regTime',
      search: '',
      totalArticleLength: 0,

      articleNumber: 0,
      boards: [],
      page: 1,

      category: ['풋볼레터', '뉴스', '칼럼'],
      select: ['풋볼레터', '뉴스', '칼럼'],

      writeDialog: false,
      editDialog: false,
    };
  },
  created() {
    this.fetchArticle();
  },
  computed: {
    selectCode() {
      var sc = [];
      if (this.category === this.select) return null;
      for (var i = 0; i < this.select.length; i++) {
        switch (this.select[i]) {
          case this.category[0]:
            sc[i] = 0;
            break;
          case this.category[1]:
            sc[i] = 1;
            break;
          case this.category[2]:
            sc[i] = 2;
            break;
        }
      }
      return sc;
    },
    pageLength() {
      var quo = parseInt(this.totalArticleLength / 10);
      var rem = this.totalArticleLength % 10;
      if (quo === 0) return 1;
      if (quo > 0 && rem === 0) return quo;
      return quo + 1;
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
          return '80%';
        case 'xl':
          return '70%';
        default:
          return '100%';
      }
    },
  },
  methods: {
    routeEditPage(num) {
      location.href = `/admin/edit?num=${num}`;
    },
    openEditDialog(num) {
      this.articleNumber = parseInt(num);
      this.editDialog = true;
    },
    async fetchArticle() {
      const boardData = {
        bNum: this.selectCode,
        limit: 10,
        page: this.page,
        word: this.search,
        sort: this.row,
      };

      const { data } = await fetchSortedBoard(boardData);
      this.boards = data.docs;
      this.totalArticleLength = data.totalDocs;

      this.writeDialog = false;
      this.editDialog = false;
    },
  },
  watch: {
    page() {
      this.fetchArticle();
    },
    select() {
      this.fetchArticle();
    },
    row() {
      this.fetchArticle();
    },
  },
};
</script>

<style>
.Article .v-pagination__navigation {
  height: 25px !important;
  width: 25px !important;
}
.Article .v-pagination__item {
  min-width: 25px !important;
  height: 25px !important;
}
.v-application .primary--text {
  color: green !important;
}
.Article .v-chip {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
.Article .v-chip:hover {
  background-color: rgba(55, 211, 55, 0.8) !important;
}
</style>

<style scoped>
@import url('../../../assets/css/unify.css');
</style>
