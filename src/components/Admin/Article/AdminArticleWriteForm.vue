<template>
  <v-container style="background-color: #FBFBFB;" class="white">
    <v-row class="mb-3">
      <v-col class="black d-flex align-center" cols="12">
        <p class="sliderTitleText" style="color:white;">게시글 등록</p>
        <v-btn @click="cancle('write')" class="ml-auto" icon
          ><v-icon color="white">mdi-close</v-icon></v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mt-5" no-gutters>
      <v-col cols="2">
        <v-select
          :items="boardList"
          v-model="select"
          style="border:0.5px solid rgba(55,55,55,.2);"
          color="blue darken-4"
          hide-details
          solo
        ></v-select>
      </v-col>
      <v-col style="border:1px solid rgba(55,55,55,.2);" cols="10">
        <v-text-field
          solo
          v-model="title"
          label="제목"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col style="border-bottom:1px solid grey;" cols="12">
        <div ref="editor"></div>
      </v-col>
      <v-col class="d-flex justify-center" cols="12">
        <v-btn class="ma-3" @click="submitForm" color="#509F3F"
          ><v-icon color="white">mdi-upload</v-icon>
          <p class="subText" style="color:white;">등록하기</p></v-btn
        >
        <v-btn @click="cancle" class="ma-3" width="100px" color="#737373"
          ><v-icon color="white">mdi-close</v-icon>
          <p class="subText" style="color:white;">취소</p></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { createArticle } from '@/api/board';
import Computed_ReturnBoardNumber from '@/mixins/article/Computed_ReturnBoardNumber';
import Mounted_InitJodit from '@/mixins/article/Mounted_InitJodit';
import Methods_ExtractThumb from '@/mixins/article/Methods_ExtractThumb';
import Methods_GetPretext from '@/mixins/article/Methods_GetPretext';
import Methods_CancleEditArticle from '@/mixins/article/Methods_CancleEditArticle';
import Methods_ResponseAction from '@/mixins/article/Methods_ResponseAction';

export default {
  mixins: [
    Computed_ReturnBoardNumber,
    Mounted_InitJodit,
    Methods_ExtractThumb,
    Methods_GetPretext,
    Methods_CancleEditArticle,
    Methods_ResponseAction,
  ],
  data() {
    return {
      title: '',
      editor: null,
      boardList: ['풋볼레터', '뉴스', '칼럼'],
      select: '풋볼레터',
      thumb: '',
      pretext: '',
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
  methods: {
    async submitForm() {
      if (this.editor.value.includes('<img')) this.extractThumb();
      this.pretext = this.getPretext(this.editor.value);

      const articleData = {
        thumb: this.thumb,
        title: this.title,
        contents: this.editor.value,
        pretext: this.pretext,
        author: this.user.name,
        authorid: this.user._id,
        bNum: this.boardNumber,
      };

      const { data } = await createArticle(articleData);
      this.responseAction(data);
    },
  },
};
</script>

<style>
.Write
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none;
}
</style>

<style scoped>
@import url('../../../assets/css/unify.css');
</style>
