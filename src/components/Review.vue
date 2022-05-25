<template>
  <div v-if="!isLoading">
    <p class="text-center mb-1 mainSubText">구독자 후기</p>
    <carousel-3d
      :width="300"
      :height="170"
      :disable3d="true"
      :display="3"
      :space="320"
      :controls-visible="true"
    >
      <slide
        v-for="(review, idx) in reviews"
        :key="review._id"
        :index="idx"
        :style="
          idx % 2 == 0
            ? 'border-radius: 10px; background: white; border: 1px solid rgba(0,0,0,.12); color: #686565'
            : 'border-radius: 10px; background: #98A4B4; border: 1px solid #98A4B4; color: white;'
        "
        class="pa-5"
      >
        <div style="font-size:.90rem; font-weight: bold; !important;">
          <p>{{ review.nickName }}</p>
          <p class="pb-3">{{ review.author | maskingName }} 님</p>
        </div>
        <p style="font-size: .83rem; !important;" v-html="review.title"></p>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import { fetchReviews } from '@/api/review';

export default {
  data() {
    return {
      isLoading: true,
      reviews: [],
    };
  },
  components: {
    Carousel3d,
    Slide,
  },
  created() {
    this.fetchReviewsData();
  },
  methods: {
    async fetchReviewsData() {
      const { data } = await fetchReviews();
      this.reviews = data;
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
