<template>
  <v-col class="pa-3" style="border-bottom:1px solid rgba(0,0,0,.1)" cols="12">
    <v-row no-gutters>
      <v-col cols="12" lg="3" class="d-flex align-center">
        <v-card
          elevation="0"
          rounded="0"
          @click="goToView(item.seq)"
          width="100%"
          height="150"
          ><v-img width="100%" height="100%" :src="item.thumb"></v-img
        ></v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" lg="8">
        <v-row no-gutters>
          <v-col class="py-3" cols="12">
            <p
              @click="goToView(item.seq)"
              style="cursor:pointer"
              class="articleTitleText"
            >
              {{ item.title }}
            </p>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="my-3">
            <p
              @click="goToView(item.seq)"
              style="cursor:pointer"
              class="articleSubText"
            >
              {{ item.pretext }}
            </p>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <p class="articleTinyText">
              <v-icon x-small>mdi-calendar-month-outline</v-icon>
              {{ item.regTime.slice(0, 10) }}
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
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
