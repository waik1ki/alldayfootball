<template>
  <div class="ConfigText">
    <v-row class="my-5">
      <v-col cols="12">
        <p class="mainText">기타관리</p>
      </v-col>
      <v-col cols="12">
        <v-expansion-panels v-model="panel" multiple focusable>
          <v-expansion-panel class="my-5">
            <v-expansion-panel-header
              ><p class="mainSubText">Footer 수정</p></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <div
                class="Footer mt-10"
                style="width:100%; background-color:#0C9045;"
              >
                <div v-if="!this.$vuetify.breakpoint.smAndDown">
                  <v-row
                    class="py-6"
                    v-if="!this.$vuetify.breakpoint.smAndDown"
                    no-gutters
                  >
                    <v-col cols="6" class="pl-5">
                      <p style="color:white;" class="articleSubText mr-6">
                        당신의 아침과 함께할 모닝 축구 뉴스레터
                      </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="text-start" cols="2">
                      <p
                        @click="goto('/introduce')"
                        style="color:white; cursor:pointer;"
                        class="articleSubText pl-16"
                      >
                        매체소개
                      </p>
                      <p
                        @click="goto('/policy')"
                        style="color:white; cursor:pointer;"
                        class="articleSubText pl-16"
                      >
                        청소년 보호정책
                      </p>
                      <p
                        @click="goto('/terms-of-use')"
                        style="color:white; cursor:pointer;"
                        class="articleSubText pl-16"
                      >
                        서비스이용약관
                      </p>
                      <p
                        @click="goto('/privacy-policy')"
                        style="color:white; cursor:pointer;"
                        class="articleSubText pl-16"
                      >
                        개인정보처리방침
                      </p>
                    </v-col>
                  </v-row>
                  <div
                    style="width: 100%; border-bottom: 1px solid rgba(255,255,255,.4);"
                  ></div>
                  <v-row class="py-6" no-gutters>
                    <v-col cols="12" class="pl-5">
                      <div class="d-flex align-end">
                        <p class="articleSubText" style="color: white">
                          올데이풋볼 2019 - 2021 | 대표자 : 이학진 | {{ add }}
                          <br />
                          전화번호 : {{ tel.replace(/-/gi, ' - ') }} | FAX : 02
                          - 6944 - 9018 | 메일주소 : {{ email }}<br />
                          사업자등록번호 : 832-86-02092 | 통신판매업신고 :
                          제2021-고양덕양구-1421호 | 직업정보제공사업 신고번호 :
                          J1202020210005<br />
                          발행인 : {{ pub }} | 편집인: {{ edi }} |
                          청소년보호정책책임자: {{ pol }}<br /><br />
                          Copyright © 2019 by alldayfootball. All rights
                          reserved.
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <v-row v-if="this.$vuetify.breakpoint.smAndDown" no-gutters>
                  <v-col class="d-flex justify-center my-5" cols="12">
                    <p
                      @click="goto('/introduce')"
                      style="color:white; cursor:pointer;"
                      class="articleTinyText mx-3"
                    >
                      매체소개
                    </p>
                    <p
                      @click="goto('/policy')"
                      style="color:white; cursor:pointer;"
                      class="articleTinyText mx-3"
                    >
                      청소년 보호정책
                    </p>
                    <p
                      @click="goto('/terms-of-use')"
                      style="color:white; cursor:pointer;"
                      class="articleTinyText mx-3"
                    >
                      서비스이용약관
                    </p>
                    <p
                      @click="goto('/privacy-policy')"
                      style="color:white; cursor:pointer;"
                      class="articleTinyText mx-3"
                    >
                      개인정보처리방침
                    </p>
                  </v-col>
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header color="#0C9045">
                        <p
                          style="color:rgba(255,255,255,.8); text-align:center;"
                          class="articleTinyText pa-1"
                        >
                          사업자 정보
                        </p>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content color="#0C9045">
                        <v-col cols="12" class="pb-0">
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            올데이풋볼 2019 - 2021
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            대표자 : 이학진
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            전화번호: {{ tel }}
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            FAX : 02 - 6944 - 9018
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            사업자등록번호 : 832-86-02092
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            통신판매업신고 : 제2021-고양덕양구-1421호
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            직업정보제공사업 신고번호 : J1202020210005
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            발행인: {{ pub }} | 편집인: {{ edi }}
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-1"
                          >
                            청소년보호정책책임자: {{ pol }}
                          </p>
                        </v-col>
                        <v-col class="mb-2" cols="12">
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-2"
                          >
                            {{ add }}
                          </p>
                          <p
                            style="color:rgba(255,255,255,.8); text-align:center;"
                            class="articleTinyText pa-2"
                          >
                            Copyright © 2019 by alldayfootball. All rights
                            reserved.
                          </p>
                        </v-col>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </div>
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
                  <v-btn class="ma-3" @click="clickEdit" color="#509F3F"
                    ><v-icon color="white">mdi-upload</v-icon>
                    <p class="subText" style="color:white;">수정하기</p></v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="my-5">
            <v-expansion-panel-header
              ><p class="mainSubText">후기 관리</p></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-row class="my-5">
                <v-col cols="12">
                  <p class="mainSubText">후기 작성</p>
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
                    @keypress.enter="clickSearch"
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
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="1"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      No
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="8"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      제목
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="2"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      작성자
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="1"
                  >
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
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="1"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      No
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="7"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      제목
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="2"
                  >
                    <p
                      style="color:white; border-right:1px solid white;"
                      class="sliderTitleText"
                    >
                      작성자
                    </p>
                  </v-col>
                  <v-col
                    class="py-3"
                    style="background-color:#0C9045;"
                    cols="2"
                  >
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
                      <p class="sliderTitleText" style="color:white;">
                        후기 수정
                      </p>
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

                  <v-row
                    v-if="!$vuetify.mdAndDown"
                    class="d-flex justify-center"
                  >
                    <v-col
                      class="d-flex justify-space-around"
                      cols="12"
                      lg="12"
                    >
                      <v-btn @click="edit" color="#509F3F"
                        ><v-icon color="white">mdi-upload</v-icon>
                        <p class="subText" style="color:white;">
                          수정하기
                        </p></v-btn
                      >
                      <!-- <v-btn @click="closeDialog(1)" color="red"><v-icon color="white">mdi-close</v-icon><p class="subText" style="color:white;">취소</p></v-btn> -->
                    </v-col>
                  </v-row>

                  <v-row
                    v-if="$vuetify.mdAndDown"
                    class="d-flex justify-center"
                  >
                    <v-col
                      class="d-flex justify-space-around"
                      cols="12"
                      lg="12"
                    >
                      <v-btn x-small @click="edit" color="#509F3F"
                        ><v-icon color="white">mdi-upload</v-icon>
                        <p class="subText" style="color:white;">수정</p></v-btn
                      >
                      <!-- <v-btn x-small @click="closeDialog(1)" color="red"><v-icon color="white">mdi-close</v-icon><p class="subText" style="color:white;">취소</p></v-btn> -->
                    </v-col>
                  </v-row>
                </v-container>
              </v-dialog>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- <v-expansion-panel class="my-5">
                <v-expansion-panel-header><p class="mainSubText">메인기사 지정</p></v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row class="mt-5 d-flex align-center" no-gutters>
                        <v-col class="mx-5" lg="2" cols="12">
                            <p class="sliderTitleText">첫번째 기사:</p>
                        </v-col>
                        <v-col cols="auto">
                            <v-text-field solo v-model="mainArt0" label="첫번째 기사" hide-details></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mt-5 d-flex align-center" no-gutters>
                        <v-col class="mx-5" lg="2" cols="12">
                            <p class="sliderTitleText">두번째 기사:</p>
                        </v-col>
                        <v-col cols="auto">
                            <v-text-field solo v-model="mainArt1" label="두번째 기사" hide-details></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mt-5 d-flex align-center" no-gutters>
                        <v-col class="mx-5" lg="2" cols="12">
                            <p class="sliderTitleText">세번째 기사:</p>
                        </v-col>
                        <v-col cols="auto">
                            <v-text-field solo v-model="mainArt2" label="세번째 기사" hide-details></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex justify-center" cols="12">
                            <v-btn class="ma-3" @click="clickEdit2" color="#509F3F"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">수정하기</p></v-btn>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
                </v-expansion-panel> -->

          <!-- <v-expansion-panel class="my-5">
                <v-expansion-panel-header><p class="mainSubText">메뉴문구 수정</p></v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div :style="{width:HeaderWidth}" class="Header mx-auto">
                        <v-row no-gutters>
                            <v-col cols="12">
                                <v-card rounded="0" v-if="!this.$vuetify.breakpoint.mdAndDown" class="d-flex justify-center" height="55" width="100%" color="#0C9045">
                                    <div class="d-flex mx-auto" v-for="(i,idx) in visibleMenuList" :key="idx">
                                        <v-menu v-if="i.to==='subMenu'" open-on-hover offset-y>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-tab :ripple="false" style="text-decoration: none;" to="/Articlelist?name=k1" class="d-flex align-center justify-center" v-bind="attrs" v-on="on">
                                                    <p style="color:white;" class="headerText">{{i.title}}<v-icon small color="white">mdi-chevron-down</v-icon></p>
                                                </v-tab>
                                            </template>
                                            <v-list :rounded="false" color="#0C9045">
                                                <v-list-item v-for="(i, index) in i.subMenu" :key="index">
                                                    <v-card class="px-3" :rounded="false" elevation="0" color="#0C9045" height="100%" width="100%" :to="i.to">
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
                                    <div class="d-flex align-center pt-1 px-3">
                                        <v-text-field @keypress.enter="clickSearch" v-model="search" label="검색" height="35" background-color="white" solo hide-details>
                                            <template v-slot:append-outer>
                                                <v-btn color="white" @click="clickSearch" class="pb-2" icon><v-icon>mdi-magnify</v-icon></v-btn>
                                            </template>
                                        </v-text-field>
                                    </div>
                                </v-card>
                                <v-card v-if="this.$vuetify.breakpoint.mdAndDown" class="d-flex justify-space-around" height="55" color="#0C9045">
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
                            </v-col>
                        </v-row>
                    </div>
                    <v-row v-for ="(i,idx) in menuList" :key="idx" class="mt-15 d-flex align-center" no-gutters>
                        <v-col class="mx-5 d-flex align-center justify-center" lg="2" cols="12">
                            <p class="sliderTitleText">메뉴{{idx}} : </p>
                            <v-checkbox
                            v-model="i.visible"
                            :label="`${i.visible.toString()}`"
                            class="ml-1"
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="auto">
                            <div class="d-flex">
                                <v-text-field solo v-model="i.title" label="menu1" hide-details></v-text-field>
                            </div>
                            <div class="mt-2 mb-10" v-if="i.to==='subMenu'">
                                <p class="sliderTitleText my-2">하단 드랍메뉴▼</p>
                                <div class="d-flex my-1" v-for="(i,idx) in i.subMenu" :key="idx">
                                    <v-text-field class="mr-1" solo v-model="i.title" label="menu1" hide-details></v-text-field>
                                    <div style="width: 70px">
                                        <v-checkbox
                                        v-model="i.visible"
                                        :label="`${i.visible.toString()}`"
                                        class="ml-1"
                                        ></v-checkbox>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="d-flex justify-center" cols="12">
                            <v-btn class="ma-3" @click="clickEdit3" color="#509F3F"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">수정하기</p></v-btn>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
                </v-expansion-panel> -->
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.headers['Pragma'] = 'no-cache';
// import ConfigEdit from '@/components/Admin/ConfigEdit'
export default {
  components: {
    // ConfigEdit,
  },
  data() {
    return {
      panel: [0],
      email: '',
      tel: '',
      pub: '',
      edi: '',
      pol: '',
      add: '',
      mainArt0: 0,
      mainArt1: 1,
      mainArt2: 2,
      menuList: [],
      visibleMenuList: [],

      row: 'regTime',
      search: '',
      titleCheck: true,
      contentCheck: true,
      bLength: 0,
      hbLength: 0,
      newHeadline: [],
      boardResult: [],
      dragResult: [],
      headlineTitle: '',
      editID: '',
      editTitle: '',
      author: null,
      reviewAuthor: null,
      nickName: null,
      saveBtn: false,
      dialog2: false,
      headlineList: [{ author: '' }, { title: '' }],
      HLList: [],
      page: 1,
      hPage: 1,
      thisUrl: '',

      category: [
        'k1',
        'k2',
        'k3',
        'k4',
        'k5',
        '인터뷰',
        '스포츠칼럼',
        'K리그결과',
      ],
      select: [
        'k1',
        'k2',
        'k3',
        'k4',
        'k5',
        '인터뷰',
        '스포츠칼럼',
        'K리그결과',
      ],
    };
  },
  created() {
    this.getUrl();
    this.getConfig();
    // this.getheadlineList();
    this.takeBoard();
    this.findPagination();
    this.getHLList();
  },
  mounted() {
    this.panel = [];
    axios.get(`${this.thisUrl}api/auth/check`).then(res => {
      this.author = res.data.info.name;
    });
  },
  methods: {
    getUrl() {
      this.thisUrl = window.location.href;
      this.thisUrl = this.thisUrl.substring(7, 10);
      if (this.thisUrl === 'www') {
        this.thisUrl = 'http://www.alldayfootball.co.kr/';
      } else {
        this.thisUrl = 'http://alldayfootball.co.kr/';
      }
      this.getConfig();
    },
    clickEdit() {
      axios
        .put(`${this.thisUrl}api/config/edit`, {
          id: '60d6b0c44dcc9e16fc936574',
          info: this.info,
        })
        .then(res => {
          if (res.data === 'updated') {
            alert('수정되었습니다.');
            location.reload();
          }
        });
    },
    clickEdit2() {
      if (this.mainArt0 === '') {
        alert('첫번째 기사를 지정해주세요.');
        return;
      }
      if (this.mainArt1 === '') {
        alert('두번째 기사를 지정해주세요.');
        return;
      }
      if (this.mainArt2 === '') {
        alert('세번째 기사를 지정해주세요.');
        return;
      }
      var suc = true;
      for (var i = 0; i < 3; i++) {
        const cur = this.info2[i];
        for (var o = i + 1; o < 3; o++) {
          if (cur === this.info2[o]) {
            suc = false;
            break;
          }
        }
        if (suc === false) break;
      }
      if (suc === false) {
        alert('중복으로 지정할 수 없습니다.');
        return;
      }
      axios
        .put(`${this.thisUrl}api/config/edit`, {
          id: '60d8f5569d4b9d6bafe4205e',
          info: this.info2,
        })
        .then(res => {
          if (res.data === 'updated') {
            alert('수정되었습니다.');
            location.reload();
          }
        });
    },
    clickEdit3() {
      axios
        .put(`${this.thisUrl}api/config/edit`, {
          id: '60e246fb2145564307fa6265',
          info: this.menuList,
        })
        .then(res => {
          if (res.data === 'updated') {
            alert('수정되었습니다.');
            location.reload();
          }
        });
    },
    getConfig() {
      axios.get(`${this.thisUrl}api/config/find`).then(res => {
        this.email = res.data[0].info.email;
        this.tel = res.data[0].info.tel;
        this.pub = res.data[0].info.pub;
        this.edi = res.data[0].info.edi;
        this.pol = res.data[0].info.pol;
        this.add = res.data[0].info.add;
        this.mainArt0 = res.data[1].info[0];
        this.mainArt1 = res.data[1].info[1];
        this.mainArt2 = res.data[1].info[2];
        this.menuList = res.data[2].info;
        for (var i = 0; i < this.menuList.length; i++) {
          if (this.menuList[i].visible === true) {
            this.visibleMenuList.push(this.menuList[i]);
          }
        }
      });
    },
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
    getheadlineList() {
      axios.get(`${this.thisUrl}api/headline/find`).then(res => {
        this.headlineList = res.data;
        // console.log(this.userList);
      });
    },
    getHLList() {
      this.thisUrl = window.location.href;
      this.thisUrl = this.thisUrl.substring(7, 10);
      if (this.thisUrl === 'www') {
        this.thisUrl = 'http://www.alldayfootball.co.kr/';
      } else {
        this.thisUrl = 'http://alldayfootball.co.kr/';
      }

      axios.get(`${this.thisUrl}api/headline/find2`).then(res => {
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
      this.thisUrl = this.thisUrl.substring(7, 10);
      if (this.thisUrl === 'www') {
        this.thisUrl = 'http://www.alldayfootball.co.kr/';
      } else {
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
        .then(res => {
          this.boardResult = res.data.docs;
          this.bLength = res.data.totalDocs;
        });
    },
    findPagination() {
      this.thisUrl = window.location.href;
      this.thisUrl = this.thisUrl.substring(7, 10);
      if (this.thisUrl === 'www') {
        this.thisUrl = 'http://www.alldayfootball.co.kr/';
      } else {
        this.thisUrl = 'http://alldayfootball.co.kr/';
      }

      axios
        .post(`${this.thisUrl}api/headline/pagination`, {
          limit: 10,
          page: this.hPage,
        })
        .then(res => {
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
        .then(res => {
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
        .then(res => {
          // console.log(photoURL);
          if (res.data === 'uploaded') {
            this.clickfindPagination();
            // alert('업로드');
            this.headlineTitle = '';
            this.reviewAuthor = '';
            this.nickName = '';
            return;
          }
          if (res.data === 'not_logged') {
            alert('권한이 없습니다.');
            return;
          }
          if (res.data === 'not_admin') {
            alert('권한이 없습니다.');
            return;
          }
        });
    },
    headlineListWrite() {
      axios
        .post(`${this.thisUrl}api/headline/headlineListWrite`, {
          list: this.dragResult,
        })
        .then(res => {
          // console.log(photoURL);
          if (res.data === 'uploaded') {
            alert('업로드 성공.');
            return;
          }
          if (res.data === 'not_logged') {
            alert('권한이 없습니다.');
            return;
          }
          if (res.data === 'not_admin') {
            alert('권한이 없습니다.');
            return;
          }
        });
    },
    dragUpdateHeadlineList(data) {
      axios
        .put(`${this.thisUrl}api/headline/edit2`, {
          id: '6109017fd09d248b448cae5a',
          list: data,
        })
        .then(res => {
          if (res.data === 'updated') {
            alert('업로드 성공.');
          }
        });
    },
    dragHeadlineList() {
      axios
        .put(`${this.thisUrl}api/headline/edit2`, {
          id: '6109017fd09d248b448cae5a',
          list: this.HLList,
        })
        .then(res => {
          if (res.data === 'updated') {
            alert('수정되었습니다.');
          }
        });
    },
    edit() {
      axios
        .put(`${this.thisUrl}api/headline/edit`, {
          id: this.editID,
          title: this.editTitle,
        })
        .then(res => {
          // console.log(photoURL);
          if (res.data === 'updated') {
            this.findPagination();
            this.getHLList();
            alert('업데이트 성공.');
            this.editTitle = '';
            return;
          }
          if (res.data === 'not_logged') {
            alert('권한이 없습니다.');
            return;
          }
          if (res.data === 'not_admin') {
            alert('권한이 없습니다.');
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
        .then(res => {
          if (res.data === 'not_logged') {
            alert('권한이 없습니다.');
            return;
          }
          if (res.data === 'not_admin') {
            alert('권한이 없습니다.');
            return;
          }
          if (res.data === 'deleted') {
            // this.findPagination();
            // alert("삭제 되었습니다.");
            return;
          }
        });
      axios
        .put(`${this.thisUrl}api/headline/delete2`, {
          id: data,
        })
        .then(res => {
          if (res.data === 'not_logged') {
            alert('권한이 없습니다.');
            return;
          }
          if (res.data === 'not_admin') {
            alert('권한이 없습니다.');
            return;
          }
          if (res.data === 'deleted') {
            this.findPagination();
            this.getHLList();
            alert('삭제 되었습니다.');
            return;
          }
        });
    },
    remove2(data) {
      axios
        .put(`${this.thisUrl}api/headline/delete2`, {
          id: data,
        })
        .then(res => {
          if (res.data === 'not_logged') {
            alert('권한이 없습니다.');
            return;
          }
          if (res.data === 'not_admin') {
            alert('권한이 없습니다.');
            return;
          }
          if (res.data === 'deleted') {
            this.findPagination();
            alert('삭제 되었습니다.');
            return;
          }
        });
    },
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
    info2() {
      return [this.mainArt0, this.mainArt1, this.mainArt2];
    },
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
        case 'xs':
          return '100%';
        case 'sm':
          return '100%';
        case 'md':
          return '90%';
        case 'lg':
          return '60%';
        case 'xl':
          return '50%';
        default:
          return '100%';
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
};
</script>

<style></style>

<style scoped>
@import url('../../assets/css/unify.css');
</style>
