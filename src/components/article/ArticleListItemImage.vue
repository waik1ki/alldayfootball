<template>
  <v-col cols="6" lg="3">
    <v-row no-gutters class="pa-5">
      <v-col cols="12">
        <v-card
          outlined
          elevation="0"
          rounded="0"
          @click="goToView(item.seq)"
          width="100%"
          height="120"
          ><v-img height="100%" width="100%" :src="item.thumb"></v-img
        ></v-card>
      </v-col>
      <v-col class="my-2" cols="12">
        <p
          @click="goToView(item.seq)"
          style="cursor:pointer"
          class="articleTitleText2"
        >
          {{ item.title }}
        </p>
      </v-col>
      <v-col cols="12">
        <p class="articleTinyText">
          <v-icon x-small>mdi-calendar-month-outline</v-icon>
          {{ item.regTime.slice(0, 10) }}
        </p>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    goToView(num) {
      location.href = `/article/view?num=${num}`;
    },
  },
};
</script>

<style></style>
