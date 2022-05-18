<template>
  <v-dialog v-model="state" width="400" @click:outside="$emit('close')">
    <v-card>
      <v-card class="d-flex justify-end pa-2" elevation="0">
        <v-icon @click="$emit('close')" small>mdi-close</v-icon>
      </v-card>
      <v-card elevation="0" class="d-flex justify-center mb-2">
        <v-card width="90" height="90" elevation="0">
          <v-img src="@/assets/빵빠레.png"></v-img>
        </v-card>
      </v-card>
      <v-card class="d-flex flex-column align-center py-5" elevation="0">
        <div class="d-flex align-center">
          <v-card width="20" height="20" elevation="0" class="mr-1">
            <v-img src="@/assets/축구공.png"></v-img>
          </v-card>
          <p>올데이풋볼 구독자가 되신 것을 환영합니다.</p>
        </div>
        <div class="d-flex align-center">
          <v-card width="20" height="20" elevation="0" class="mr-1">
            <v-img src="@/assets/시계.png"></v-img>
          </v-card>
          <p>매일 낮 12시 다양한 축구 소식이 발송됩니다.</p>
        </div>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    state: Boolean,
  },
};
</script>

<style></style>
