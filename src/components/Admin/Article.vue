<template>
  <div id="Article" class="Article">
    <!-- 헤드라인 관리 -->
    <!-- <v-row class="my-5">
      <v-col cols="12">
        <p class="mainText">후기 관리</p>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-text-field
          hide-details
          v-model="nickName"
          label="닉네임"
          solo
          class="mb-2"
        ></v-text-field>
        <v-text-field
          hide-details
          v-model="reviewAuthor"
          label="작성자"
          solo
          class="mb-2"
        ></v-text-field>
        <v-textarea
          hide-details
          v-model="headlineTitle"
          label="후기를 작성해주세요."
          solo
          class="mb-2"
        ></v-textarea>
        <div class="d-flex" style="width: 100%">
          <v-btn
            class="ml-auto px-2"
            @click="writeheadline"
            color="#0C9045"
            >
            <p style="color:white;">등록</p></v-btn
          >
        </div>
      </v-col>
    </v-row>

    <v-row class="my-5">
      <v-col cols="12">
        <p class="mainSubText">구독자 후기</p>
      </v-col>
    </v-row>
    <div v-if="!this.$vuetify.breakpoint.mdAndDown">
      <v-row style="text-align:center;" class="mt-5" no-gutters>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            No
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="8">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            제목
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="2">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            작성자
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p style="color:white;" class="sliderTitleText">관리</p>
        </v-col>
      </v-row>
      <v-row
        style="text-align:center;border-bottom:1px solid rgba(0,0,0,.2);"
        no-gutters
        v-for="(i, index) in headlineList"
        :key="index"
      >
        <v-col class="py-2" cols="1">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);"
            class="sliderTitleText"
          >
            {{ i.seq }}
          </p>
        </v-col>
        <v-col class="py-2" cols="8">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);"
            class="newsSubText"
          >
            {{ i.title }}
          </p>
        </v-col>
        <v-col class="py-2" cols="2">
          <p
            style="border-right:1px solid rgba(0,0,0,.25);"
            class="sliderTitleText"
          >
            {{ i.author }}
          </p>
        </v-col>
        <v-col class="py-2" cols="1">
          <div class="d-flex">
            <v-btn
              text
              elevation="0"
              height="19px"
              min-width="28px"
              class="mx-auto px-2"
              @click="openEdit(headlineList[index])"
              >수정</v-btn
            >
            <v-btn
              text
              elevation="0"
              height="19px"
              min-width="28px"
              class="mx-auto px-2"
              @click="remove(headlineList[index]._id)"
              >삭제</v-btn
            >
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="text-center">
            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-container class="max-width">
                    <v-pagination
                      v-model="hPage"
                      class="my-4"
                      color="#0C9045"
                      :length="hpLength"
                    ></v-pagination>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </div>

    <div v-if="this.$vuetify.breakpoint.mdAndDown">
      <v-row style="text-align:center;" class="mt-5" no-gutters>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            No
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="7">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            제목
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="2">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            작성자
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="2">
          <p style="color:white;" class="sliderTitleText">관리</p>
        </v-col>
      </v-row>
      <v-row
        style="text-align:center;border-bottom:1px solid rgba(0,0,0,.2);"
        no-gutters
        v-for="(i, index) in headlineList"
        :key="index"
      >
        <v-col class="py-2" cols="1">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);"
            class="sliderTitleText"
          >
            {{ i.seq }}
          </p>
        </v-col>
        <v-col class="py-2" cols="7">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);"
            class="newsSubText"
          >
            {{ i.title }}
          </p>
        </v-col>
        <v-col class="py-2" cols="2">
          <p
            style="border-right:1px solid rgba(0,0,0,.25);"
            class="sliderTitleText"
          >
            {{ i.author }}
          </p>
        </v-col>
        <v-col class="py-2" cols="2">
          <div class="d-flex">
            <v-btn
              text
              elevation="0"
              height="19px"
              min-width="28px"
              class="mx-auto px-2"
              @click="openEdit(headlineList[index])"
              >수정</v-btn
            >
            <v-btn
              text
              elevation="0"
              height="19px"
              min-width="28px"
              class="mx-auto px-2"
              @click="remove(headlineList[index]._id)"
              >삭제</v-btn
            >
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="text-center">
            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-container class="max-width">
                    <v-pagination
                      v-model="hPage"
                      class="my-4"
                      color="#0C9045"
                      :length="hpLength"
                    ></v-pagination>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </div>

    <v-dialog v-model="dialog2" :width="dialogWidth">
      <v-container style="background-color: #FBFBFB;">
        <v-row>
          <v-col class="black d-flex align-center" cols="12" lg="12">
            <p class="sliderTitleText" style="color:white;">후기 수정</p>
            <v-btn @click="dialog2 = !dialog2" class="ml-auto" icon
              ><v-icon color="white">mdi-close</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" lg="2">
            <p class="sliderTitleText" style="color:black;">제목</p>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="editTitle"
              hide-details
              label="ID"
              solo
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row v-if="!$vuetify.mdAndDown" class="d-flex justify-center">
          <v-col class="d-flex justify-space-around" cols="12" lg="12">
            <v-btn @click="edit" color="#509F3F"
              ><v-icon color="white">mdi-upload</v-icon>
              <p class="subText" style="color:white;">수정하기</p></v-btn
            >
          </v-col>
        </v-row>

        <v-row v-if="$vuetify.mdAndDown" class="d-flex justify-center">
          <v-col class="d-flex justify-space-around" cols="12" lg="12">
            <v-btn x-small @click="edit" color="#509F3F"
              ><v-icon color="white">mdi-upload</v-icon>
              <p class="subText" style="color:white;">수정</p></v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-dialog> -->
    <!-- 기사 관리 -->
    <v-row class="my-5">
      <v-col cols="12">
        <p class="mainText">기사관리</p>
      </v-col>
    </v-row>
    <!-- 카테고리 -->
    <v-row>
      <v-col cols="12">
        <v-combobox
          color="green"
          v-model="select"
          :items="category"
          label="카테고리"
          solo
          multiple
          chips
        >
          <template v-slot:item="{ item }">
            <v-chip color="green" dark label small>
              {{ item }}
            </v-chip>
          </template>

          <template v-slot:selection="{ item, attrs, select }">
            <v-chip
              v-bind="attrs"
              :input-value="select"
              color="green"
              dark
              label
              small
            >
              {{ item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
    </v-row>
    <!-- 라디오 버튼 -->
    <v-row no-gutters>
      <v-col cols="12">
        <v-radio-group v-model="row" row>
          <v-radio label="날짜순(최신순)" value="regTime"></v-radio>
          <v-radio label="번호순(과거순)" value="seq"></v-radio>
          <v-radio label="가나다순" value="title"></v-radio>
          <v-radio label="조회수순" value="views"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="d-flex align-center" cols="12">
        <v-text-field
          @keypress.enter="clickSearch"
          hide-details
          v-model="search"
          label="검색"
          solo
        ></v-text-field>
        <v-btn
          icon
          style="height:90%;"
          class="mx-3 px-2"
          @click="clickSearch"
          color="#0C9045"
          ><v-icon>mdi-magnify</v-icon></v-btn
        >
      </v-col>
    </v-row>

    <div v-if="!this.$vuetify.breakpoint.mdAndDown">
      <v-row style="text-align:center;" class="mt-5" no-gutters>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            No
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            분류
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="5">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            제목
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            작성자
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            조회수
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="2">
          <p style="color:white; border-right:1px solid white;" class="sliderTitleText">날짜</p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
          <p
            style="color:white;"
            class="sliderTitleText"
          >
            고유번호
          </p>
        </v-col>
      </v-row>

      <v-row
        style="text-align:center;border-bottom:1px solid rgba(0,0,0,.2);"
        no-gutters
        v-for="(i, index) in boardResult"
        :key="index"
      >
        <v-col class="py-2" cols="1">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;"
            class="sliderTitleText"
          >
            {{ (index + 1) + ((page - 1) * 10) }}
          </p>
        </v-col>
        <v-col class="py-2" cols="1">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;"
            class="sliderTitleText"
          >
            {{ category[i.bNum] }}
          </p>
        </v-col>
        <v-col class="py-2" cols="5">
          <p
            @click="clickTitle(i.seq)"
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);; cursor:pointer;"
            class="newsSubText"
          >
            {{ i.title }}
          </p>
        </v-col>
        <v-col class="py-2" cols="1">
          <p
            style="border-right:1px solid rgba(0,0,0,.25);;"
            class="sliderTitleText"
          >
            {{ i.author }}
          </p>
        </v-col>
        <v-col class="py-2" cols="1">
          <p
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;"
            class="sliderTitleText"
          >
            {{ i.views }}
          </p>
        </v-col>
        <v-col class="py-2" cols="2">
          <p class="sliderTitleText" style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;">{{ i.regTime.slice(0, 10) }}</p>
        </v-col>
        <v-col class="py-2" cols="1">
          <p
            class="sliderTitleText"
          >
            {{ i.seq }}
          </p>
        </v-col>        
      </v-row>
    </div>

    <div v-if="this.$vuetify.breakpoint.mdAndDown">
      <v-row style="text-align:center;" class="mt-5" no-gutters>
        <v-col class="py-3" style="background-color:#0C9045;" cols="6">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            제목
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="3">
          <p
            style="color:white; border-right:1px solid white;"
            class="sliderTitleText"
          >
            작성자
          </p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="3">
          <p style="color:white;" class="sliderTitleText">날짜</p>
        </v-col>
      </v-row>

      <v-row
        style="text-align:center;border-bottom:1px solid rgba(0,0,0,.2);"
        no-gutters
        v-for="(i, index) in boardResult"
        :key="index"
      >
        <v-col class="py-2" cols="6">
          <p
            @click="clickTitle(i.seq)"
            style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);; cursor:pointer;"
            class="sliderTitleText"
          >
            {{ i.title }}
          </p>
        </v-col>
        <v-col class="py-2" cols="3">
          <p
            style="border-right:1px solid rgba(0,0,0,.25);;"
            class="sliderTitleText"
          >
            {{ i.author }}
          </p>
        </v-col>
        <v-col class="py-2" cols="3">
          <p class="sliderTitleText">{{ i.regTime.slice(0, 10) }}</p>
        </v-col>
      </v-row>
    </div>
    <!-- 글쓰기 버튼 -->
    <v-row>
      <v-col class="d-flex justify-end mt-10" cols="12">
        <v-btn class="mr-3" color="#509F3F" to="/admin/write"
          ><v-icon color="white">mdi-pencil-plus</v-icon>
          <p class="subText" style="color:white;">글쓰기</p></v-btn
        >
      </v-col>
    </v-row>
    <!-- 페이지 네이션 -->
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <v-container>
            <v-row justify="center">
              <v-col cols="8">
                <v-container class="max-width">
                  <v-pagination
                    v-model="page"
                    class="my-4"
                    color="#0C9045"
                    :length="pLength"
                  ></v-pagination>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
// import draggable from "vuedraggable";

axios.defaults.headers["Pragma"] = "no-cache";
export default {
  components: {
    // draggable,
  },
  data() {
    return {
      row: "regTime",
      search: "",
      titleCheck: true,
      contentCheck: true,
      bLength: 0,
      hbLength: 0,
      newHeadline: [],
      boardResult: [],
      dragResult: [],
      headlineTitle: "",
      editID: "",
      editTitle: "",
      author: null,
      reviewAuthor: null,
      nickName: null,
      saveBtn: false,
      dialog2: false,
      headlineList: [{ author: "" }, { title: "" }],
      HLList: [],
      page: 1,
      hPage: 1,
      thisUrl: '',

      category: [
        "k1",
        "k2",
        "k3",
        "k4",
        "k5",
        "인터뷰",
        "스포츠칼럼",
        "K리그결과",
      ],
      select: [
        "k1",
        "k2",
        "k3",
        "k4",
        "k5",
        "인터뷰",
        "스포츠칼럼",
        "K리그결과",
      ],
    };
  },
  created() {
    this.getConfig();
    // this.getheadlineList();
    this.takeBoard();
    this.findPagination();
    this.getHLList();
    this.getUrl();
  },
  computed: {
    selectCode() {
      var sc = [];
      if (this.category === this.select) return null;
      for (var i = 0; i < this.select.length; i++) {
        switch (this.select[i]) {
          case this.category[0]:
            sc[i] = 0;
            break;
          case this.category[1]:
            sc[i] = 1;
            break;
          case this.category[2]:
            sc[i] = 2;
            break;
          case this.category[3]:
            sc[i] = 3;
            break;
          case this.category[4]:
            sc[i] = 4;
            break;
          case this.category[5]:
            sc[i] = 5;
            break;
          case this.category[6]:
            sc[i] = 6;
            break;
          case this.category[7]:
            sc[i] = 7;
            break;
          case this.category[8]:
            sc[i] = 8;
            break;
          case this.category[9]:
            sc[i] = 9;
            break;
        }
      }
      return sc;
    },
    dialogWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%";
        case "sm":
          return "100%";
        case "md":
          return "90%";
        case "lg":
          return "60%";
        case "xl":
          return "50%";
        default:
          return "100%";
      }
    },
    pLength() {
      var quo = parseInt(this.bLength / 10);
      var rem = this.bLength % 10;
      if (quo === 0) return 1;
      if (quo > 0 && rem === 0) return quo;
      return quo + 1;
    },
    hpLength() {
      var quo = parseInt(this.hbLength / 10);
      var rem = this.hbLength % 10;
      if (quo === 0) return 1;
      if (quo > 0 && rem === 0) return quo;
      return quo + 1;
    },
  },
  methods: {
    saveResult() {
      this.dragResult = this.HLList;
      this.saveBtn = false;
      this.headlineListWrite();
      // console.log(this.dragResult);
    },
    dragBoardResult() {
      this.saveBtn = true;

      return (this.drag = true);
    },
    getConfig() {
      this.thisUrl = window.location.href;
      this.thisUrl = this.thisUrl.substring(7,10);
      if (this.thisUrl === 'www') {
        this.thisUrl = 'http://www.alldayfootball.co.kr/';
      }else{
        this.thisUrl = 'http://alldayfootball.co.kr/';
      }

      axios
        .post(`${this.thisUrl}api/config/findone`, {
          id: "60e246fb2145564307fa6265",
        })
        .then((res) => {
          var menuList = [];
          for (var i = 0; i < res.data.info.length; i++) {
            if (res.data.info[i].to === "subMenu") {
              for (var o = 0; o < res.data.info[i].subMenu.length; o++) {
                menuList.push(res.data.info[i].subMenu[o].title);
              }
            } else {
              menuList.push(res.data.info[i].title);
            }
          }
          this.category = menuList;
          this.select = menuList;
        });
    },
    getUrl() {
      this.thisUrl = window.location.href;
      this.thisUrl = this.thisUrl.substring(7,10);
      if (this.thisUrl === 'www') {
        this.thisUrl = 'http://www.alldayfootball.co.kr/';
      }else{
        this.thisUrl = 'http://alldayfootball.co.kr/';
      }
    },
    getheadlineList() {
      axios.get(`${this.thisUrl}api/headline/find`).then((res) => {
        this.headlineList = res.data;
        // console.log(this.userList);
      });
    },
    getHLList() {
      this.thisUrl = window.location.href;
      this.thisUrl = this.thisUrl.substring(7,10);
      if (this.thisUrl === 'www') {
        this.thisUrl = 'http://www.alldayfootball.co.kr/';
      }else{
        this.thisUrl = 'http://alldayfootball.co.kr/';
      }

      axios
        .get(`${this.thisUrl}api/headline/find2`)
        .then((res) => {
          this.HLList = res.data[0].list;
          // console.log(this.HLList);
        });
    },
    clickTitle(num) {
      location.href = `/admin/edit?num=${num}`;
    },
    clickSearch() {
      this.takeBoard();
    },
    takeBoard() {
      this.thisUrl = window.location.href;
      this.thisUrl = this.thisUrl.substring(7,10);
      if (this.thisUrl === 'www') {
        this.thisUrl = 'http://www.alldayfootball.co.kr/';
      }else{
        this.thisUrl = 'http://alldayfootball.co.kr/';
      }

      axios
        .post(`${this.thisUrl}api/board/takeboardsort`, {
          bNum: this.selectCode,
          limit: 10,
          page: this.page,
          word: this.search,
          sort: this.row,
        })
        .then((res) => {
          this.boardResult = res.data.docs;
          this.bLength = res.data.totalDocs;
        });
    },
    findPagination() {
      this.thisUrl = window.location.href;
      this.thisUrl = this.thisUrl.substring(7,10);
      if (this.thisUrl === 'www') {
        this.thisUrl = 'http://www.alldayfootball.co.kr/';
      }else{
        this.thisUrl = 'http://alldayfootball.co.kr/';
      }
      
      axios
        .post(`${this.thisUrl}api/headline/pagination`, {
          limit: 10,
          page: this.hPage,
        })
        .then((res) => {
          // console.log(res);
          this.headlineList = res.data.docs;
          this.hbLength = res.data.totalDocs;
          // console.log(this.headlineList);
          this.headlineList[0];
        });
    },
    clickfindPagination() {
      axios
        .post(`${this.thisUrl}api/headline/pagination`, {
          limit: 10,
          page: this.hPage,
        })
        .then((res) => {
          // console.log(res);
          this.headlineList = res.data.docs;
          this.hbLength = res.data.totalDocs;
          // console.log(this.headlineList);
          if (this.HLList.length === 10) {
            this.HLList.unshift(this.headlineList[0]);
            this.HLList.pop();
            this.dragUpdateHeadlineList(this.HLList);
          } else {
            this.HLList.unshift(this.headlineList[0]);
            this.dragUpdateHeadlineList(this.HLList);
          }
        });        
    },
    writeheadline() {
      axios
        .post(`${this.thisUrl}api/headline/write`, {
          nickName: this.nickName,
          author: this.reviewAuthor,
          title: this.headlineTitle,
        })
        .then((res) => {
          // console.log(photoURL);
          if (res.data === "uploaded") {
            this.clickfindPagination();
            // alert('업로드');
            this.headlineTitle = "";
            this.reviewAuthor = "";
            this.nickName = "";
            return;
          }
          if (res.data === "not_logged") {
            alert("권한이 없습니다.");
            return;
          }
          if (res.data === "not_admin") {
            alert("권한이 없습니다.");
            return;
          }
        });
    },
    headlineListWrite() {
      axios
        .post(`${this.thisUrl}api/headline/headlineListWrite`, {
          list: this.dragResult,
        })
        .then((res) => {
          // console.log(photoURL);
          if (res.data === "uploaded") {
            alert("업로드 성공.");
            return;
          }
          if (res.data === "not_logged") {
            alert("권한이 없습니다.");
            return;
          }
          if (res.data === "not_admin") {
            alert("권한이 없습니다.");
            return;
          }
        });        
    },
    dragUpdateHeadlineList(data) {
      axios
        .put(`${this.thisUrl}api/headline/edit2`, {
          id: "6109017fd09d248b448cae5a",
          list: data,
        })
        .then((res) => {
          if (res.data === "updated") {
            alert("업로드 성공.");
          }
        });        
    },
    dragHeadlineList() {
      axios
        .put(`${this.thisUrl}api/headline/edit2`, {
          id: "6109017fd09d248b448cae5a",
          list: this.HLList,
        })
        .then((res) => {
          if (res.data === "updated") {
            alert("수정되었습니다.");
          }
        });
    },
    edit() {
        axios
          .put(`${this.thisUrl}api/headline/edit`, {
            id: this.editID,
            title: this.editTitle,
          })
          .then((res) => {
            // console.log(photoURL);
            if (res.data === "updated") {
              this.findPagination();
              this.getHLList();
              alert("업데이트 성공.");
              this.editTitle = "";
              return;
            }
            if (res.data === "not_logged") {
              alert("권한이 없습니다.");
              return;
            }
            if (res.data === "not_admin") {
              alert("권한이 없습니다.");
              return;
            }
          });
        this.dialog2 = false;
    },
    openEdit(data) {
      this.editID = data._id;
      this.editTitle = data.title;
      this.dialog2 = true;
    },
    remove(data) {
      axios
        .post(`${this.thisUrl}api/headline/delete`, {
          id: data,
        })
        .then((res) => {
          if (res.data === "not_logged") {
            alert("권한이 없습니다.");
            return;
          }
          if (res.data === "not_admin") {
            alert("권한이 없습니다.");
            return;
          }
          if (res.data === "deleted") {
            // this.findPagination();
            // alert("삭제 되었습니다.");
            return;
          }
        });
      axios
        .put(`${this.thisUrl}api/headline/delete2`, {
          id: data,
        })
        .then((res) => {
          if (res.data === "not_logged") {
            alert("권한이 없습니다.");
            return;
          }
          if (res.data === "not_admin") {
            alert("권한이 없습니다.");
            return;
          }
          if (res.data === "deleted") {
            this.findPagination();
            this.getHLList();
            alert("삭제 되었습니다.");
            return;
          }
        });
    },
    remove2(data) {
      axios
        .put(`${this.thisUrl}api/headline/delete2`, {
          id: data,
        })
        .then((res) => {
          if (res.data === "not_logged") {
            alert("권한이 없습니다.");
            return;
          }
          if (res.data === "not_admin") {
            alert("권한이 없습니다.");
            return;
          }
          if (res.data === "deleted") {
            this.findPagination();
            alert("삭제 되었습니다.");
            return;
          }
        });        
    }
  },
  watch: {
    page() {
      this.takeBoard();
    },
    hPage() {
      this.findPagination();
    },
    select() {
      this.takeBoard();
    },
    row() {
      this.takeBoard();
    },
  },
  mounted() {
    axios.get(`${this.thisUrl}api/auth/check`).then((res) => {
      this.author = res.data.info.name;
    });
  },
};
</script>

<style>
.Article .v-pagination__navigation {
  height: 25px !important;
  width: 25px !important;
}
.Article .v-pagination__item {
  min-width: 25px !important;
  height: 25px !important;
}
.v-application .primary--text {
  color: green !important;
}
.Article .v-chip {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
.Article .v-chip:hover {
  background-color: rgba(55, 211, 55, 0.8) !important;
}
</style>

<style scoped>
@import url("../../assets/css/unify.css");
</style>
