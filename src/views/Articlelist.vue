<template>
<div class="articlelist mx-auto">
    <v-row no-gutters :style="{width:ContentWidth}" :class="mobilePadding">
        <v-col cols="12">
            <v-row style="height:70px;" no-gutters>
                <v-col cols="auto" class="d-flex align-center">
                    <v-card v-if="queryTitle === '풋볼레터'" width="30" height="30" class="d-flex align-center" elevation="0">
                        <v-img src="../assets/뉴스레터.png"></v-img>
                    </v-card>
                    <v-card v-if="queryTitle === '뉴스'" width="28" height="28" class="d-flex align-center pb-1" elevation="0">
                        <v-img src="../assets/뉴스.png"></v-img>
                    </v-card>
                    <v-card v-if="queryTitle === '칼럼'" width="28" height="28" class="d-flex align-center" elevation="0">
                        <v-img src="../assets/칼럼.png"></v-img>
                    </v-card>
                    <p class="topicText pl-2"> {{queryTitle}} <span class="topicSubText">({{this.bLength}}건)</span></p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex align-center" cols="auto">
                    <v-btn-toggle v-model="toggle">
                        <v-btn class="pa-2" small>
                            <v-icon small>mdi-format-list-bulleted-square</v-icon>
                            <p class="articleListText" v-if="!$vuetify.breakpoint.mdAndDown"></p>
                        </v-btn>
                        <v-btn class="pa-2" small>
                            <v-icon small>mdi-image</v-icon>
                            <p class="articleListText" v-if="!$vuetify.breakpoint.mdAndDown"></p>
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
            <div style="width: 100%; border-bottom: 1px solid rgba(190,190,190,.3);"></div>
            <v-row class="my-10" v-if="toggle===0" no-gutters>
                <div style="width: 100%; border-bottom: 1px solid rgba(190,190,190,.3);"></div>
                <v-col class="pa-3" style="border-bottom:1px solid rgba(0,0,0,.1)" v-for="(i,idx) in boardResult" :key="idx" cols="12">
                        <v-row no-gutters>
                            <v-col cols="12" lg="3" class="d-flex align-center">
                                <v-card elevation="0" rounded="0" @click="goToView(i.seq)" width="100%" height="150"><v-img width="100%" height="100%" :src="i.thumb"></v-img></v-card>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="12" lg="8">
                                <v-row no-gutters>
                                    <v-col class="py-3" cols="12">
                                        <p @click="goToView(i.seq)" style="cursor:pointer" class="articleTitleText">{{i.title}}</p>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="12" class="my-3">
                                        <p @click="goToView(i.seq)" style="cursor:pointer" class="articleSubText">{{i.pretext}}</p>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="12">
                                        <p class="articleTinyText"><v-icon x-small>mdi-calendar-month-outline</v-icon> {{i.regTime.slice(0,10)}}</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-spacer></v-spacer>
                        </v-row>
                </v-col>
            </v-row>

            <v-row class="my-10" v-if="toggle===1" no-gutters>
                <v-col v-for="(i,index) in boardResult" :key="index" cols="6" lg="3">
                    <v-row no-gutters class="pa-5">
                        <v-col cols="12">
                            <v-card outlined elevation="0" rounded="0" @click="goToView(i.seq)" width="100%" height="120"><v-img height="100%" width="100%" :src="i.thumb"></v-img></v-card>
                        </v-col>
                        <v-col class="my-2" cols="12">
                            <p @click="goToView(i.seq)" style="cursor:pointer" class="articleTitleText2">{{i.title}}</p>
                        </v-col>
                        <v-col cols="12">
                            <p class="articleTinyText"><v-icon x-small>mdi-calendar-month-outline</v-icon> {{i.regTime.slice(0,10)}}</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row no-gutters>
                    <v-col cols="12">
                        <div class="text-center">
                            <v-container>
                            <v-row justify="center">
                                <v-col cols="8">
                                <v-container class="max-width">
                                    <v-pagination
                                    color="#0C9045"
                                    v-model="page"
                                    class="my-4"
                                    :length="pLength"
                                    ></v-pagination>
                                </v-container>
                                </v-col>
                            </v-row>
                            </v-container>
                        </div>
                    </v-col>
            </v-row>
        </v-col>
    </v-row>
</div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
    data(){
        return{
            boardResult:[],
            title:null,
            toggle:0,
            page:1,
            bLength:10,
            completed: false,
            // menuList:[
            //     {title:'집중취재', to:'subMenu', subMenu:[{title:'k1',to:'/Articlelist?name=k1'},
            //     {title:'k2',to:'/Articlelist?name=k2'},
            //     {title:'k3',to:'/Articlelist?name=k3'},
            //     {title:'k4',to:'/Articlelist?name=k4'},
            //     {title:'k5',to:'/Articlelist?name=k5'}]},
            //     {title:'', to:'/Articlelist?name=article01'},
            //     {title:'', to:'/Articlelist?name=article02'},
            //     {title:'', to:'/Articlelist?name=article03'},
            //     {title:'', to:'/Articlelist?name=article04'},
            //     {title:'', to:'/Articlelist?name=article05'},
            // ],
            queryTitle:'',
        }
    },
    created(){
        // this.getConfig();
        switch(this.$route.query.name){
        case 'k1' : this.takeBoard(0); this.queryTitle = "풋볼레터"; break;
        case 'k2' : this.takeBoard(1); this.queryTitle = "뉴스";  break;
        case 'k3' : this.takeBoard(2); this.queryTitle = "칼럼";  break;
        case 'k4' : this.takeBoard(3); break;
        case 'k5' : this.takeBoard(4); break;
        case 'article01' : this.takeBoard(5); break;
        case 'article02' : this.takeBoard(6); break;
        case 'article03' : this.takeBoard(7); break;
        case 'article04' : this.takeBoard(8); break;
        case 'article05' : this.takeBoard(9); break;
        case 'search' : this.takeBoard(10); break;
        default : this.takeBoard(0); break;
        }
    },
    methods:{
        // getConfig(){
        //     axios.post('http://alldayfootball.co.kr/api/config/findone',{
        //         id:"60e246fb2145564307fa6265"
        //     })
        //     .then((res)=>{
        //         this.menuList = res.data.info;
        //         // console.log(this.menuList);
        //         // console.log(this.menuList[0].subMenu[0].title);
        //     })
        // },
        takeBoard(Num){
            axios.post('http://alldayfootball.co.kr/api/board/takeboard',{
                bNum: Num,
                limit: this.limit,
                page: this.page,
                word:""
            })
            .then((res=>{
                this.boardResult = res.data.docs;
                // console.log(this.boardResult)
                this.bLength = res.data.totalDocs;
                // this.findThumb();
                // this.findPretext();
                this.completed = true;
            }))
        },
        // findThumb(){
        //     for(var i = 0; i<this.boardResult.length; i++){
        //         if(this.boardResult[i].contents.includes('<img')){
        //         var tagIndex = this.boardResult[i].contents.indexOf('<img');
        //         var tagSrcIndex = this.boardResult[i].contents.indexOf('src="',tagIndex+4);
        //         var tagEndIndex = this.boardResult[i].contents.indexOf('"',tagSrcIndex+5);
        //         this.boardResult[i].thumb = this.boardResult[i].contents.slice(tagSrcIndex+5,tagEndIndex);
        //         }
        //     }
        // },
        // findPretext(){
        //     for(var i = 0; i<this.boardResult.length; i++){
        //         this.boardResult[i].pretext = this.boardResult[i].contents.replace(/(<([^>]+)>|&nbsp;|@([^>]+)})/ig,"").slice(0,150)+('...');
        //     }
        // },
        goToView(num){
            location.href=`/articleView?num=${num}`;
        },
    },
    computed:{
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
        mobilePadding(){  
            switch(this.$vuetify.breakpoint.name){
                case 'xs' : return "mx-auto px-4 pt-2";
                case 'sm' : return "mx-auto px-4 pt-2";
                case 'md' : return "mx-auto px-4 pt-2";
                case 'lg' : return "mx-auto px-4 pt-10";
                case 'xl' : return "mx-auto px-4 pt-10";
                default : return "mx-auto px-4 pt-10";
            }
        },        
        limit(){
            switch(this.toggle){
                case 0 :return 15;
                case 1 :return 20;
                case 2 :return 12;
                default : return 10;
            }
        },
        // queryTitle(){
        //     switch(this.$route.query.name){
        //         case 'k1' :return this.menuList[0].subMenu[0].title;
        //         case 'k2' :return this.menuList[0].subMenu[1].title;
        //         case 'k3' :return this.menuList[0].subMenu[2].title;
        //         case 'k4' :return this.menuList[0].subMenu[3].title;
        //         case 'k5' :return this.menuList[0].subMenu[4].title;
        //         case 'article01' :return this.menuList[1].title;
        //         case 'article02' :return this.menuList[2].title;
        //         case 'article03' :return this.menuList[3].title;
        //         case 'article04' :return this.menuList[4].title;
        //         case 'article05' :return this.menuList[5].title;
        //         case 'search' :return '검색 결과';
        //         default : return 'title'
        //     }
        // },
        pLength(){
            var quo = parseInt(this.bLength/this.limit);
            var rem = this.bLength % this.limit ;
            if(quo===0) return 1;
            if(quo>0&&rem===0) return quo;
            return quo + 1 ;
        },
    },
    watch:{
        $route(){
            this.page=1;
            switch(this.$route.query.name){
                case 'k1' : this.takeBoard(0); break;
                case 'k2' : this.takeBoard(1); break;
                case 'k3' : this.takeBoard(2); break;
                case 'k4' : this.takeBoard(3); break;
                case 'k5' : this.takeBoard(4); break;
                case 'article01' : this.takeBoard(5); break;
                case 'article02' : this.takeBoard(6); break;
                case 'article03' : this.takeBoard(7); break;
                case 'article04' : this.takeBoard(8); break;
                case 'article05' : this.takeBoard(9); break;
                case 'search' : this.takeBoard(10); break;
                default : this.takeBoard(0); break;
            }
        },
        page(){
            switch(this.$route.query.name){
                case 'k1' : this.takeBoard(0); break;
                case 'k2' : this.takeBoard(1); break;
                case 'k3' : this.takeBoard(2); break;
                case 'k4' : this.takeBoard(3); break;
                case 'k5' : this.takeBoard(4); break;
                case 'article01' : this.takeBoard(5); break;
                case 'article02' : this.takeBoard(6); break;
                case 'article03' : this.takeBoard(7); break;
                case 'article04' : this.takeBoard(8); break;
                case 'article05' : this.takeBoard(9); break;
                case 'search' : this.takeBoard(10); break;
                default : this.takeBoard(0); break;
            }
        },
        toggle(){
            this.page=1;
        },
    },

}
</script>

<style scoped>
@import url("../assets/css/unify.css");
</style>

<style>
.articlelist .v-pagination__navigation{
    height: 25px !important;
    width: 25px !important;
}
.articlelist .v-pagination__item{
    min-width: 25px !important;
    height: 25px !important;
}
</style>