<template>
  <div class="Footer mt-10" style="width:100%; background-color:#00923B;">
    <div :style="{width: ContentWidth}" class="mx-auto px-7" v-if="!this.$vuetify.breakpoint.smAndDown">
      <!-- <div style="width: 100%; border-bottom: 1px solid rgba(255,255,255,.4);"></div> -->
      <v-row class="py-6" no-gutters style="font-weight: 500;">
        <v-col cols="8">
            <div class="d-flex align-end">
              <p class="footerSubText" style="color: white">올데이컴퍼니 | 대표자 : 이학진 | {{add}} <br>
              전화번호 : {{tel.replace(/-/gi,' - ')}} | FAX : 02 - 6944 - 9018 | 메일주소 : {{email}}<br>
              사업자등록번호 : 178-06-01298 | 통신판매업신고 : 제2021-고양덕양구-1421호<br>
              직업정보제공사업 신고번호 : J1202020210005 | 등록번호 : 경기,아53080<br><br>
              발행인 : {{pub}} | 편집인: {{edi}} | 청소년보호정책책임자: {{pol}}<br><br>
              Copyright © 2019 by alldaycompany. All rights reserved.
              </p>
            </div>
        </v-col>
        <v-col class="text-end footerSubText" cols="4">
          <p @click="goto('/introduce')" style="color:white; cursor:pointer;" class="pl-16">매체소개</p>
          <p @click="goto('/policy')" style="color:white; cursor:pointer;" class="pl-16">청소년 보호정책</p>
          <p @click="goto('/terms-of-use')" style="color:white; cursor:pointer;" class="pl-16">서비스이용약관</p>
          <p @click="goto('/privacy-policy')" style="color:white; cursor:pointer;" class="pl-16">개인정보처리방침</p>
        </v-col>        
      </v-row>
    </div>
    <v-row v-if="this.$vuetify.breakpoint.smAndDown" no-gutters>
      <v-col class="d-flex justify-center my-5" cols="12">
        <p @click="goto('/introduce')" style="color:white; cursor:pointer;" class="articleTinyText mx-3">매체소개</p>
        <p @click="goto('/policy')" style="color:white; cursor:pointer;" class="articleTinyText mx-3">청소년 보호정책</p>
        <p @click="goto('/terms-of-use')" style="color:white; cursor:pointer;" class="articleTinyText mx-3">서비스이용약관</p>
        <p @click="goto('/privacy-policy')" style="color:white; cursor:pointer;" class="articleTinyText mx-3">개인정보처리방침</p>
      </v-col>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header color="#00923B">
            <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1">사업자 정보</p>
          </v-expansion-panel-header>
          <v-expansion-panel-content color="#00923B">
            <v-col cols="12" class="pb-0">
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 올데이컴퍼니</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 대표자 : 이학진</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 전화번호: {{tel.replace(/-/gi,' - ')}}</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> FAX : 02 - 6944 - 9018</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 메일주소 : {{email}}</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 사업자등록번호 : 178-06-01298</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 통신판매업신고 : 제2021-고양덕양구-1421호</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 직업정보제공사업 신고번호 : J1202020210005</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 등록번호 : 경기,아53080</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 발행인: {{pub}} | 편집인: {{edi}}</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 청소년보호정책책임자: {{pol}}</p>
            </v-col>
            <v-col class="mb-2" cols="12">
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2">{{add}}</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2"> Copyright © 2019 by alldaycompany. All rights reserved.</p>
            </v-col>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
  data(){
    return{
      email:'',
      tel:'',
      pub:'',
      edi:'',
      pol:'',
      add:''
    }
  },
  computed: {
    ContentWidth(){  
      switch(this.$vuetify.breakpoint.name){
          case 'xs' : return "100%";
          case 'sm' : return "100%";
          case 'md' : return "100%";
          case 'lg' : return "1100px";
          case 'xl' : return "1100px";
          default : return "1100px";
      }
    },    
  },
  mounted(){
    this.getConfig();
  },
  methods:{
    goto(r){
      location.href=r;
    },
    getConfig(){
      axios.post('http://alldayfootball.co.kr/api/config/findone',{
        id:"60d6b0c44dcc9e16fc936574"
      })
      .then((res)=>{
        this.email = res.data.info.email;
        this.tel = res.data.info.tel;
        this.pub = res.data.info.pub;
        this.edi = res.data.info.edi;
        this.pol = res.data.info.pol;
        this.add = res.data.info.add;
      })
    },
  },
}
</script>

<style scoped>
@import url("../assets/css/unify.css");

</style>