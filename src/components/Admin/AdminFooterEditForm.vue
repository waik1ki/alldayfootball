<template>
  <div>
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
  </div>
</template>

<script>
import { updateFooter } from '@/api/config';
export default {
  data() {
    return {
      // 푸터 데이터
      email: '',
      tel: '',
      pub: '',
      edi: '',
      pol: '',
      add: '',
    };
  },
  created() {
    this.fetchFooterData();
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
  },
  methods: {
    async updateFooterData() {
      const { data } = await updateFooter(this.info);
      if (data === 'updated') {
        await this.$store.dispatch('config/FETCH_FOOTER_DATA');
        alert('수정되었습니다.');
        location.reload();
      }
    },
    fetchFooterData() {
      var fetchedFooterData = this.$store.state.config.footerData;

      this.email = fetchedFooterData.email;
      this.tel = fetchedFooterData.tel;
      this.pub = fetchedFooterData.pub;
      this.edi = fetchedFooterData.edi;
      this.pol = fetchedFooterData.pol;
      this.add = fetchedFooterData.add;
    },
  },
};
</script>

<style></style>
