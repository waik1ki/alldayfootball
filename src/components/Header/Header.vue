<template>
  <div>
    <div :style="{ width: HeaderWidth }" class="Header mx-auto">
      <!-- <div @click="toHome" class="logo"></div> -->
      <v-row no-gutters>
        <v-col
          class="d-flex align-center"
          cols="12"
          v-if="!this.$vuetify.breakpoint.mdAndDown"
        >
          <div
            @click="toHome()"
            style="height: 38px; width: 150px; cursor: pointer"
            class="my-6 mr-5 transparent"
          >
            <v-img
              width="100%"
              height="100%"
              contain
              src="@/assets/logo_size_down.png"
            ></v-img>
          </div>
          <div style="width: 317px"></div>
          <div class="d-flex justify-center" style="width: 45%">
            <p class="mx-auto"><a class="navTitle" href="/">홈</a></p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k1">풋볼레터</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k2">뉴스</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k3">칼럼</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/introduce">매체소개</a>
            </p>
            <p class="mx-auto">
              <a
                class="navTitle"
                href="https://forms.gle/amB1HzEarnYtWPf8A"
                target="_blank"
                >제안</a
              >
            </p>
          </div>
        </v-col>

        <v-col
          class="d-flex flex-column align-center"
          cols="12"
          v-if="this.$vuetify.breakpoint.mdAndDown"
        >
          <div
            @click="toHome()"
            style="height: 38px; width: 150px; cursor: pointer"
            class="my-4 transparent"
          >
            <v-img
              width="100%"
              height="100%"
              contain
              src="@/assets/logo_size_down.png"
            ></v-img>
          </div>
          <div
            v-if="this.$vuetify.breakpoint.mdAndDown"
            style="width: 95%; border-bottom: 1px solid rgba(0,0,0,.12);"
            class="mb-3 mx-auto"
          ></div>
          <div class="d-flex justify-center px-3" style="width: 100%;">
            <p class="mx-auto"><a class="navTitle" href="/">홈</a></p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k1">풋볼레터</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k2">뉴스</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/Articlelist?name=k3">칼럼</a>
            </p>
            <p class="mx-auto">
              <a class="navTitle" href="/introduce">매체소개</a>
            </p>
            <p class="mx-auto">
              <a
                class="navTitle"
                href="https://forms.gle/amB1HzEarnYtWPf8A"
                target="_blank"
                >제안</a
              >
            </p>
          </div>
        </v-col>
        <div
          v-if="this.$vuetify.breakpoint.mdAndDown"
          style="width: 95%; border-bottom: 1px solid rgba(0,0,0,.12);"
          class="mt-3 mx-auto"
        ></div>
        <!-- <v-col class="d-flex justify-end align-end" lg="3" cols="12">
                <v-card rounded="0" elevation="0" class="d-flex transparent">
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <a v-bind="attrs" v-on="on" href="https://www.facebook.com/Alldayfootballer/" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/facebook.png"></v-img></a>
                            </template>
                            <span>페이스북</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <a v-bind="attrs" v-on="on" href="https://www.instagram.com/allground.official/" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/instagram.png"></v-img></a>
                            </template>
                            <span>인스타그램</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <a v-bind="attrs" v-on="on" href="https://blog.naver.com/alldayfootball" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/blog.png"></v-img></a>
                            </template>
                            <span>네이버 블로그</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <a v-bind="attrs" v-on="on" href="http://v2.alldayfootball.net/" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/alldayfootball.png"></v-img></a>
                            </template>
                            <span>스카우팅 시스템</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <a v-bind="attrs" v-on="on" href="https://smartstore.naver.com/alldaycorporation" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/shop.png"></v-img></a>
                            </template>
                            <span>쇼핑몰</span>
                        </v-tooltip>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card elevation="0" rounded="0" v-if="!this.$vuetify.breakpoint.mdAndDown" class="d-flex justify-center px-3" height="55" width="100%" color="#0C9045">
                    <div class="d-flex mx-auto" v-for="(i,idx) in visibleMenuList" :key="idx">
                        <v-menu v-if="i.to==='subMenu'" open-on-hover offset-y rounded="0">
                            <template v-slot:activator="{ on, attrs }">
                                <v-tab :ripple="false" style="text-decoration: none;" to="/Articlelist?name=k1" class="d-flex align-center justify-center pa-0" v-bind="attrs" v-on="on">
                                    <p style="color:white;" class="headerText">{{i.title}}<v-icon small color="white">mdi-chevron-down</v-icon></p>
                                </v-tab>
                            </template>
                            <v-list :rounded="false" color="#0C9045" elevation="0">
                                <v-list-item v-for="(i, index) in visibleSubMenu" :key="index">
                                    <v-card class="px-3" rounded="0" elevation="0" color="#0C9045" height="100%" width="100%" :to="i.to">
                                        <p style="text-align:center; color:white;" class="headerText">{{ i.title }}</p>
                                    </v-card>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-tab v-if="i.to!=='subMenu' && i.visible===true" style="text-decoration: none;" :ripple="false" :to="i.to" class="d-flex align-center pa-0 mx-auto">
                            <p style="color:white;" class="headerText">{{i.title}}</p>
                        </v-tab>
                    </div>
                    <v-tab style="text-decoration: none;" :ripple="false" @click="toShop" class="d-flex align-center pa-0 mx-auto">
                        <p style="color:white;" class="headerText">쇼핑몰</p>
                    </v-tab>
                    <div class="d-flex align-center px-3">
                        <v-text-field @keypress.enter="clickSearch" v-model="search" label="검색" height="35" background-color="white" solo hide-details>
                            <template v-slot:append-outer>
                                <v-btn color="white" @click="clickSearch" class="pb-2" icon><v-icon>mdi-magnify</v-icon></v-btn>
                            </template>
                        </v-text-field>
                    </div>
                </v-card>
                <v-card elevation="0" rounded="0" v-if="this.$vuetify.breakpoint.mdAndDown" class="d-flex justify-space-around" height="55" color="#0C9045">
                    <v-app-bar-nav-icon class="my-auto ml-2" color="white" @click="OpenDrawer"></v-app-bar-nav-icon>
                    <v-spacer></v-spacer>
                    <div class="d-flex align-center pt-1">
                        <v-text-field @keypress.enter="clickSearch" v-model="search" label="검색" height="35" background-color="white" solo hide-details>
                            <template v-slot:append-outer>
                                <v-btn small color="white" @click="clickSearch" class="mr-2 pb-2" icon><v-icon>mdi-magnify</v-icon></v-btn>
                            </template>
                        </v-text-field>
                    </div>
                </v-card>
            </v-col> -->
      </v-row>
    </div>
    <div
      v-if="!this.$vuetify.breakpoint.mdAndDown"
      style="width: 100%; border-bottom: 2px solid rgba(0,0,0,.12);"
    ></div>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
  data() {
    return {
      search: '',
      menuList: [
        {
          title: '',
          to: '',
          subMenu: [
            { title: '', to: '' },
            { title: '', to: '' },
            { title: '', to: '' },
            { title: '', to: '' },
            { title: '', to: '' },
          ],
        },
        { title: '', to: '' },
        { title: '', to: '' },
        { title: '', to: '' },
        { title: '', to: '' },
        { title: '', to: '' },
      ],
      visibleMenuList: [],
      visibleSubMenu: [],
    };
  },
  created() {
    this.getConfig();
  },
  computed: {
    HeaderWidth() {
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
  },
  methods: {
    getConfig() {
      axios
        .post('http://alldayfootball.co.kr/api/config/findone', {
          id: '60e246fb2145564307fa6265',
        })
        .then(res => {
          // console.log(res.data.info);
          this.menuList = res.data.info;
          for (var i = 0; i < this.menuList.length; i++) {
            if (this.menuList[i].visible === true) {
              this.visibleMenuList.push(this.menuList[i]);
            }
          }
          for (var j = 0; j < this.visibleMenuList[0].subMenu.length; j++) {
            if (this.visibleMenuList[0].subMenu[j].visible === true) {
              this.visibleSubMenu.push(this.visibleMenuList[0].subMenu[j]);
            }
            // console.log(this.visibleMenuList[0].subMenu[j])
          }
        });
    },
    clickSearch() {
      if (
        this.$route.query.name != `/Articlelist?name=search&word=${this.search}`
      )
        this.$router.push(`/Articlelist?name=search&word=${this.search}`);
    },
    OpenDrawer() {
      // drawer를 띄우는 메소드 ㅇㅅㅇ //
      this.$store.commit('set_drawerBool', !this.$store.state.drawerBool);
    },
    toShop() {
      window.open('https://smartstore.naver.com/alldaycorporation');
    },
    toHome() {
      if (this.$route.path !== '/') this.$router.push('/');
    },
  },
};
</script>

<style scoped>
@import url('../../assets/css/unify.css');
</style>

<style>
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 42px !important;
  width: 200px;
  align-self: center;
}
.logo {
  cursor: pointer;
}
.navTitle {
  text-decoration: none;
  color: black !important;
}
.navTitle:hover {
  color: #00923b !important;
}
</style>
