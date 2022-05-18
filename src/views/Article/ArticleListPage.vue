<template>
  <div class="articlelist mx-auto">
    <v-row no-gutters :style="{ width: ContentWidth }" :class="mobilePadding">
      <v-col cols="12">
        <v-row style="height:70px;" no-gutters>
          <v-col cols="auto" class="d-flex align-center">
            <v-card
              v-if="queryTitle === '풋볼레터'"
              width="30"
              height="30"
              class="d-flex align-center"
              elevation="0"
            >
              <v-img src="../../assets/뉴스레터.png"></v-img>
            </v-card>
            <v-card
              v-if="queryTitle === '뉴스'"
              width="28"
              height="28"
              class="d-flex align-center pb-1"
              elevation="0"
            >
              <v-img src="../../assets/뉴스.png"></v-img>
            </v-card>
            <v-card
              v-if="queryTitle === '칼럼'"
              width="28"
              height="28"
              class="d-flex align-center"
              elevation="0"
            >
              <v-img src="../../assets/칼럼.png"></v-img>
            </v-card>
            <p class="topicText pl-2">
              {{ queryTitle }}
              <span class="topicSubText">({{ this.bLength }}건)</span>
            </p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex align-center" cols="auto">
            <v-btn-toggle v-model="toggle">
              <v-btn class="pa-2" small>
                <v-icon small>mdi-format-list-bulleted-square</v-icon>
                <p
                  class="articleListText"
                  v-if="!$vuetify.breakpoint.mdAndDown"
                ></p>
              </v-btn>
              <v-btn class="pa-2" small>
                <v-icon small>mdi-image</v-icon>
                <p
                  class="articleListText"
                  v-if="!$vuetify.breakpoint.mdAndDown"
                ></p>
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
          <v-col
            class="pa-3"
            style="border-bottom:1px solid rgba(0,0,0,.1)"
            v-for="(i, idx) in boardResult"
            :key="idx"
            cols="12"
          >
            <v-row no-gutters>
              <v-col cols="12" lg="3" class="d-flex align-center">
                <v-card
                  elevation="0"
                  rounded="0"
                  @click="goToView(i.seq)"
                  width="100%"
                  height="150"
                  ><v-img width="100%" height="100%" :src="i.thumb"></v-img
                ></v-card>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" lg="8">
                <v-row no-gutters>
                  <v-col class="py-3" cols="12">
                    <p
                      @click="goToView(i.seq)"
                      style="cursor:pointer"
                      class="articleTitleText"
                    >
                      {{ i.title }}
                    </p>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" class="my-3">
                    <p
                      @click="goToView(i.seq)"
                      style="cursor:pointer"
                      class="articleSubText"
                    >
                      {{ i.pretext }}
                    </p>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12">
                    <p class="articleTinyText">
                      <v-icon x-small>mdi-calendar-month-outline</v-icon>
                      {{ i.regTime.slice(0, 10) }}
                    </p>
                  </v-col>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="my-10" v-if="toggle === 1" no-gutters>
          <v-col v-for="(i, index) in boardResult" :key="index" cols="6" lg="3">
            <v-row no-gutters class="pa-5">
              <v-col cols="12">
                <v-card
                  outlined
                  elevation="0"
                  rounded="0"
                  @click="goToView(i.seq)"
                  width="100%"
                  height="120"
                  ><v-img height="100%" width="100%" :src="i.thumb"></v-img
                ></v-card>
              </v-col>
              <v-col class="my-2" cols="12">
                <p
                  @click="goToView(i.seq)"
                  style="cursor:pointer"
                  class="articleTitleText2"
                >
                  {{ i.title }}
                </p>
              </v-col>
              <v-col cols="12">
                <p class="articleTinyText">
                  <v-icon x-small>mdi-calendar-month-outline</v-icon>
                  {{ i.regTime.slice(0, 10) }}
                </p>
              </v-col>
            </v-row>
          </v-col>
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
                        :length="pLength"
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
import { fetchBoards } from '@/api/board';

export default {
  data() {
    return {
      boardResult: [],
      title: null,
      toggle: 0,
      page: 1,
      bLength: 10,
      completed: false,
      queryTitle: '',
    };
  },
  created() {
    switch (this.$route.query.name) {
      case 'k1':
        this.takeBoard(0);
        this.queryTitle = '풋볼레터';
        break;
      case 'k2':
        this.takeBoard(1);
        this.queryTitle = '뉴스';
        break;
      case 'k3':
        this.takeBoard(2);
        this.queryTitle = '칼럼';
        break;
      default:
        this.takeBoard(0);
        break;
    }
  },
  methods: {
    async takeBoard(Num) {
      const boardData = {
        bNum: Num,
        limit: this.limit,
        page: this.page,
        word: '',
      };
      const { data } = await fetchBoards(boardData);
      console.log(data);
      this.boardResult = data.docs;
      this.bLength = data.totalDocs;
    },
    goToView(num) {
      location.href = `/article/view?num=${num}`;
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
    limit() {
      switch (this.toggle) {
        case 0:
          return 15;
        case 1:
          return 20;
        case 2:
          return 12;
        default:
          return 10;
      }
    },
    pLength() {
      var quo = parseInt(this.bLength / this.limit);
      var rem = this.bLength % this.limit;
      if (quo === 0) return 1;
      if (quo > 0 && rem === 0) return quo;
      return quo + 1;
    },
  },
  watch: {
    $route() {
      this.page = 1;
      switch (this.$route.query.name) {
        case 'k1':
          this.takeBoard(0);
          break;
        case 'k2':
          this.takeBoard(1);
          break;
        case 'k3':
          this.takeBoard(2);
          break;
        default:
          this.takeBoard(0);
          break;
      }
    },
    page() {
      switch (this.$route.query.name) {
        case 'k1':
          this.takeBoard(0);
          break;
        case 'k2':
          this.takeBoard(1);
          break;
        case 'k3':
          this.takeBoard(2);
          break;
        default:
          this.takeBoard(0);
          break;
      }
    },
    toggle() {
      this.page = 1;
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
