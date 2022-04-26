<template>
  <div class="Main">
    <v-row no-gutters class="mx-auto">
      <v-col cols="12" class="pa-0">
        <Subscribe />
      </v-col>
    </v-row>
    <v-row no-gutters class="my-11">
      <v-col cols="12" class="pa-0">
        <div class="py-5" style="background-color: #F1F1F5; width: 100%;">
          <div :style="{ width: ContentWidth }" class="mx-auto">
            <Review></Review>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters :style="{ width: ContentWidth }" class="mx-auto">
      <v-col cols="12">
        <p class="mainSubText px-7 pb-2 pt-1">최신 컨텐츠</p>
        <div
          style="width: 95%; border-bottom: 2px solid rgba(0,0,0,.12);"
          class="mb-5 mx-auto"
        ></div>
      </v-col>
      <v-col
        v-for="(i, idx) in boardResult.slice(0, 12)"
        :key="idx"
        cols="12"
        sm="6"
        lg="4"
      >
        <div :class="mobilePadding + ' decoCard2'" style="width:100%;">
          <v-card
            elevation="0"
            rounded="0"
            class="scopeCard d-flex align-center justify-center"
            @click="goToView(i.seq)"
            width="100%"
            :height="mobileHeight2"
          >
            <v-img
              style="position:absolute;"
              :src="i.thumb"
              width="100%"
              height="100%"
            ></v-img>
            <v-card
              height="100%"
              width="100%"
              color="rgba(0,0,0,.12)"
              rounded="0"
              elevation="0"
            ></v-card>
          </v-card>
          <v-card rounded="0" elevation="0" class="py-1">
            <div v-if="i.bNum === 0" class="d-flex align-center my-1">
              <v-card
                width="23"
                height="23"
                class="d-flex align-center"
                elevation="0"
              >
                <v-img src="../assets/뉴스레터.png"></v-img>
              </v-card>
              <p
                @click="goToView(i.seq)"
                class="mainNewsSubText ml-1"
                style="color:black; cursor:pointer;"
              >
                풋볼레터
              </p>
            </div>
            <div v-if="i.bNum === 1" class="d-flex align-center my-1">
              <v-card
                width="20"
                height="20"
                class="d-flex align-center"
                elevation="0"
              >
                <v-img src="../assets/뉴스.png"></v-img>
              </v-card>
              <p
                @click="goToView(i.seq)"
                class="mainNewsSubText ml-1"
                style="color:black; cursor:pointer;"
              >
                뉴스
              </p>
            </div>
            <div v-if="i.bNum === 2" class="d-flex align-center my-1">
              <v-card
                width="20"
                height="20"
                class="d-flex align-center"
                elevation="0"
              >
                <v-img src="../assets/칼럼.png"></v-img>
              </v-card>
              <p
                @click="goToView(i.seq)"
                class="mainNewsSubText ml-1"
                style="color:black; cursor:pointer;"
              >
                칼럼
              </p>
            </div>
            <!-- <p v-if="i.bNum === 1" @click="goToView(i.seq)" class="mainNewsSubText mb-1" style="color:black; cursor:pointer;">칼럼</p>
              <p v-if="i.bNum === 2" @click="goToView(i.seq)" class="mainNewsSubText mb-1" style="color:black; cursor:pointer;">인터뷰</p> -->
            <p
              @click="goToView(i.seq)"
              class="mainNewsText mb-2"
              style="color:black; cursor:pointer;"
            >
              {{ i.title }}
            </p>
            <p
              @click="goToView(i.seq)"
              class="mainNewsSubText"
              style="color:black; cursor:pointer;"
            >
              {{ i.pretext | sliceText }}
            </p>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Review from '@/components/Review.vue';
import { fetchBoards } from '@/api/board';
import Subscribe from './Subscribe.vue';

export default {
  components: {
    Subscribe,
    Review,
  },
  data() {
    return {
      boardResult: [],
      headlineList: [],
      reviewShow: false,
    };
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
    mobileClass() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'd-flex align-end pt-1';
        case 'sm':
          return 'd-flex align-end pt-1';
        case 'md':
          return 'd-flex align-end pt-1';
        case 'lg':
          return 'd-flex align-end pl-1';
        case 'xl':
          return 'd-flex align-end pl-1';
        default:
          return 'd-flex align-end pl-1';
      }
    },
    mobileWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '250px';
        case 'sm':
          return '250px';
        case 'md':
          return '300px';
        case 'lg':
          return '300px';
        case 'xl':
          return '300px';
        default:
          return '300px';
      }
    },
    mobileHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '300px';
        case 'sm':
          return '300px';
        case 'md':
          return '400px';
        case 'lg':
          return '500px';
        case 'xl':
          return '500px';
        default:
          return '500px';
      }
    },
    mobileHeight2() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '200px';
        case 'sm':
          return '200px';
        case 'md':
          return '200px';
        case 'lg':
          return '200px';
        case 'xl':
          return '200px';
        default:
          return '200px';
      }
    },
    mobilePadding() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'pa-4';
        case 'sm':
          return 'pa-4';
        case 'md':
          return 'pa-7';
        case 'lg':
          return 'pa-7';
        case 'xl':
          return 'pa-7';
        default:
          return 'pa-7';
      }
    },
    sliderHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '85px';
        case 'sm':
          return '100px';
        case 'md':
          return '110px';
        case 'lg':
          return '130px';
        case 'xl':
          return '130px';
        default:
          return '130px';
      }
    },
    headLine() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'width: 130px; background-color: rgb(240,240,240)';
        case 'sm':
          return 'width: 180px; background-color: rgb(240,240,240)';
        case 'md':
          return 'width: 300px; background-color: rgb(240,240,240)';
        case 'lg':
          return 'width: 300px; background-color: rgb(240,240,240)';
        case 'xl':
          return 'width: 300px; background-color: rgb(240,240,240)';
        default:
          return 'width: 300px; background-color: rgb(240,240,240)';
      }
    },
  },
  created() {
    this.takeBoard();
  },
  methods: {
    async takeBoard() {
      const { data } = await fetchBoards(null, 12, 1, '');
      this.boardResult = data.docs;
    },
    goToView(num) {
      location.href = `/articleView?num=${num}`;
    },
  },
};
</script>

<style>
.Main .scopeCard {
  overflow: hidden;
}
.Main .scopeCard:hover .v-image__image {
  transition-duration: 0.9s;
  width: 100%;
  height: 100%;
}
.Main .scopeCard:hover p {
  text-decoration: underline;
}
</style>

<style scoped>
@import url('../assets/css/unify.css');
.decoCard:hover {
  background-color: black;
  color: white;
}
.decoCard:hover .sliderTitleText {
  text-decoration: underline;
  color: white;
}
.decoCard:hover .sliderSubText {
  color: white;
}
.decoCard:hover .coInherit {
  color: white;
}

.decoCard2:hover .headerText {
  text-decoration: underline;
  color: white;
}
.headLineNewsTitle:hover {
  text-decoration: underline;
}
.reviewHover:hover {
  background-color: rgba(0, 0, 0, 0.12);
}
</style>
