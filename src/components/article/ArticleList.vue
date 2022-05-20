<template>
  <div class="articlelist mx-auto">
    <v-row no-gutters :style="{ width: ContentWidth }" :class="mobilePadding">
      <v-col cols="12">
        <v-row style="height:70px;" no-gutters>
          <v-col cols="auto" class="d-flex align-center">
            <v-card
              width="28"
              height="28"
              class="d-flex align-center"
              elevation="0"
            >
              <v-img :src="require(`../../assets/${queryTitle}.png`)"></v-img>
            </v-card>
            <p class="topicText pl-2">
              {{ queryTitle }}
              <span class="topicSubText"
                >({{ this.totalArticleLength }}건)</span
              >
            </p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex align-center" cols="auto">
            <v-btn-toggle v-model="toggle">
              <v-btn class="pa-2" small>
                <v-icon small>mdi-format-list-bulleted-square</v-icon>
              </v-btn>
              <v-btn class="pa-2" small>
                <v-icon small>mdi-image</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <div
          style="width: 100%; border-bottom: 1px solid rgba(190,190,190,.3);"
        ></div>

        <v-row class="my-10" v-if="toggle === 0" no-gutters>
          <div
            style="width: 100%; border-bottom: 1px solid rgba(190,190,190,.3);"
          ></div>
          <article-list-item-list
            v-for="item in boardResult"
            :item="item"
            :key="item.index"
          ></article-list-item-list>
        </v-row>

        <v-row class="my-10" v-if="toggle === 1" no-gutters>
          <article-list-item-image
            v-for="item in boardResult"
            :item="item"
            :key="item.index"
          >
          </article-list-item-image>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12">
            <div class="text-center">
              <v-container>
                <v-row justify="center">
                  <v-col cols="8">
                    <v-container class="max-width">
                      <v-pagination
                        color="#0C9045"
                        v-model="page"
                        class="my-4"
                        :length="pageLength"
                      ></v-pagination>
                    </v-container>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { fetchBoard } from '@/api/board';
import ArticleListItemList from './ArticleListItemList';
import ArticleListItemImage from './ArticleListItemImage';

export default {
  components: { ArticleListItemList, ArticleListItemImage },
  data() {
    return {
      boardResult: [],
      title: null,
      toggle: 0,
      page: 1,
      totalArticleLength: 10,
      queryTitle: '',
    };
  },
  created() {
    switch (this.$route.query.name) {
      case 'k1':
        this.fetchArticle(0);
        this.queryTitle = '풋볼레터';
        break;
      case 'k2':
        this.fetchArticle(1);
        this.queryTitle = '뉴스';
        break;
      case 'k3':
        this.fetchArticle(2);
        this.queryTitle = '칼럼';
        break;
      default:
        this.fetchArticle(0);
        break;
    }
  },
  methods: {
    async fetchArticle(Num) {
      const boardData = {
        bNum: Num,
        limit: 16,
        page: this.page,
        word: '',
      };
      const { data } = await fetchBoard(boardData);
      console.log(data);
      this.boardResult = data.docs;
      this.totalArticleLength = data.totalDocs;
    },
  },
  computed: {
    ContentWidth() {
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
    mobilePadding() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'mx-auto px-4 pt-2';
        case 'sm':
          return 'mx-auto px-4 pt-2';
        case 'md':
          return 'mx-auto px-4 pt-2';
        case 'lg':
          return 'mx-auto px-4 pt-10';
        case 'xl':
          return 'mx-auto px-4 pt-10';
        default:
          return 'mx-auto px-4 pt-10';
      }
    },
    pageLength() {
      var quo = parseInt(this.totalArticleLength / 16);
      var rem = this.totalArticleLength % 16;
      if (quo === 0) return 1;
      if (quo > 0 && rem === 0) return quo;
      return quo + 1;
    },
  },
  watch: {
    page() {
      switch (this.$route.query.name) {
        case 'k1':
          this.fetchArticle(0);
          break;
        case 'k2':
          this.fetchArticle(1);
          break;
        case 'k3':
          this.fetchArticle(2);
          break;
        default:
          this.fetchArticle(0);
          break;
      }
    },
  },
};
</script>

<style scoped>
@import url('../../assets/css/unify.css');
</style>

<style>
.articlelist .v-pagination__navigation {
  height: 25px !important;
  width: 25px !important;
}
.articlelist .v-pagination__item {
  min-width: 25px !important;
  height: 25px !important;
}
</style>
