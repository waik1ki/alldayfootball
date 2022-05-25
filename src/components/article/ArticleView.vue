<template>
  <div v-if="!isLoading" class="ArticleView mx-auto">
    <v-row no-gutters :style="{ width: ContentWidth }" class="mx-auto px-4">
      <v-col class="d-flex mt-10 mb-5" cols="12">
        <p class="articleTinyText">
          Home
        </p>
        <v-icon small class="mx-3">mdi-chevron-right</v-icon>
        <p style="font-weight:900; color:green;" class="articleTinyText">
          {{ queryTitle }}
        </p>
      </v-col>
    </v-row>
    <v-row no-gutters :style="{ width: ContentWidth }" class="mx-auto px-4">
      <v-col class="my-3" cols="12">
        <p class="articleTitleText">{{ title }}</p>
      </v-col>
      <v-col class="d-flex" lg="auto" cols="12 my-3">
        <p class="articleTinyText">{{ regTime | sliceDate }}</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex justify-end" cols="auto">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              elevation="0"
              icon
              width="32"
              height="32"
              @click="urlShare"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="black" small>mdi-link-variant</v-icon>
            </v-btn>
          </template>
          <span>URL 공유하기</span>
        </v-tooltip>
        <v-tooltip v-if="!this.$vuetify.breakpoint.mdAndDown" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              elevation="0"
              icon
              color="grey"
              width="32"
              height="32"
              @click="print"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="black" small>mdi-printer</v-icon>
            </v-btn>
          </template>
          <span>인쇄하기</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-1"
              elevation="0"
              icon
              width="32"
              height="32"
              @click="facebookShare"
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                height="32"
                width="32"
                src="../../assets/sns/sharefacebook.png"
              ></v-img>
            </v-btn>
          </template>
          <span>페이스북 공유하기</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-1"
              elevation="0"
              icon
              width="32"
              height="32"
              @click="twitterShare"
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                height="32"
                width="32"
                src="../../assets/sns/sharetwitter.png"
              ></v-img>
            </v-btn>
          </template>
          <span>트위터 공유하기</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-divider class="mt-4"></v-divider>
    <v-row no-gutters :style="{ width: ContentWidth }" class="mx-auto">
      <v-col class="mt-12" cols="12">
        <div>
          <div
            v-if="queryTitle === '풋볼레터'"
            style="height: auto !important;"
            v-html="contents"
          ></div>
          <div v-else id="htmlViewer" class="px-4" v-html="contents"></div>
        </div>
        <v-row no-gutters>
          <v-col class="mt-10" cols="12">
            <v-card elevation="0" class="px-4">
              <p class="sliderSubText mb-7">
                Copyright ⓒ 올데이풋볼. All rights reserved. 무단 전재 및 재배포
                금지.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { fetchArticle, viewCountIncrease } from '@/api/board';
import {
  saveReadHistoryToCookie,
  getReadHistoryFromCookie,
} from '@/utils/cookies';

export default {
  created() {
    this.fetchArticleData();
  },
  data() {
    return {
      title: null,
      contents: null,
      regTime: '',
      isLoading: true,
      queryTitle: '',
    };
  },
  methods: {
    async fetchArticleData() {
      const { data } = await fetchArticle(parseInt(this.$route.query.num));
      this.title = data.title;
      this.contents = data.contents;
      this.regTime = data.regTime;
      this.viewCount();
      switch (data.bNum) {
        case 0:
          this.queryTitle = '풋볼레터';
          break;
        case 1:
          this.queryTitle = '뉴스';
          break;
        case 2:
          this.queryTitle = '칼럼';
          break;
      }
      this.isLoading = false;
    },
    viewCount() {
      if (getReadHistoryFromCookie(this.$route.query.num)) return;
      else {
        saveReadHistoryToCookie(this.$route.query.num, new Date());
        viewCountIncrease(this.$route.query.num);
      }
    },
    facebookShare() {
      var sendUrl = `http://alldayfootball.co.kr/articleView?num=${this.$route.query.num}`; // 전달할 URL
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + sendUrl);
    },
    twitterShare() {
      var sendUrl = `http://alldayfootball.co.kr/articleView?num=${this.$route.query.num}`; // 전달할 URL
      var sendText = `올데이풋볼 ${this.title}`;
      window.open(
        'https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl,
      );
    },
    urlShare() {
      navigator.clipboard
        .writeText(
          `http://alldayfootball.co.kr/articleView?num=${this.$route.query.num}`,
        )
        .then(() =>
          alert('URL이 복사되었습니다. \n Ctrl+V로 붙여넣을 수 있습니다.'),
        )
        .catch(error => console.log(error));
    },
    print() {
      window.onbeforeprint = () => {
        document.body.innerHTML = document.getElementById(
          'htmlViewer',
        ).innerHTML;
      };
      window.onafterprint = function() {
        location.reload();
      };
      window.print();
      return false;
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
          return '780px';
        case 'xl':
          return '780px';
        default:
          return '780px';
      }
    },
  },
};
</script>

<style>
#htmlViewer * {
  max-width: 100% !important;
  height: auto !important;
}
.ArticleView
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none;
}
.ArticleView .v-pagination__navigation {
  height: 25px !important;
  width: 25px !important;
}
.ArticleView .v-pagination__item {
  min-width: 25px !important;
  height: 25px !important;
}
</style>
