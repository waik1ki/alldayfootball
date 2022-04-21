<template>
<div class="Accout">
    <v-row class="my-5">
        <v-col cols="12">
            <p class="mainText">광고관리</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col class="grey lighten-2" cols="2">
            <p style="text-align:center" class="sliderTitleText">배너명</p>
        </v-col>
        <v-col class="grey lighten-2" cols="8">
            <p style="text-align:center" class="sliderTitleText">이미지</p>
        </v-col>
        <v-col class="grey lighten-2" cols="2">
            <p style="text-align:center" class="sliderTitleText">관리</p>
        </v-col>
    </v-row>
    <v-row style="border-bottom:1px solid rgba(0,0,0,.2);" v-for="(i,idx) in adList" :key="idx">
        <v-col class="d-flex align-center justify-center" style="border-right:1px solid rgba(0,0,0,.2);" cols="2">
            <p style="text-align:center; color:black" class="sliderTitleText">{{i.name}}</p>
        </v-col>
        <v-col style="border-right:1px solid rgba(0,0,0,.2);" cols="8">
            <v-card height="150px" rounded="0">
                <v-img
                height="100%"
                :src="i.image"
                ></v-img>
            </v-card>
        </v-col>
        <v-col class="d-flex align-center justify-center" style="border-right:1px solid rgba(0,0,0,.2);" cols="2">
            <v-btn class="mx-auto" @click="openEdit(adList[idx])">수정</v-btn>
            <v-btn class="mx-auto" @click="remove(adList[idx]._id)">삭제</v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-col class="d-flex justify-end" cols="12">
            <v-btn @click="dialog=true" color="#509F3F" class="mr-10 my-5"><v-icon color="white">mdi-pencil-plus</v-icon><p class="subText" style="color:white;">배너 등록</p></v-btn>
        </v-col>
    </v-row>
    <!-- 배너등록 -->
    <v-dialog v-model="dialog" :width="dialogWidth">
        <v-container style="background-color: #FBFBFB;" class="white">
        <v-row>
            <v-col class="black d-flex align-center" cols="12" lg="12">
                <p class="sliderTitleText" style="color:white;">배너 등록</p>
                <v-btn @click="closeDialog(0)" class="ml-auto" icon><v-icon color="white">mdi-close</v-icon></v-btn>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center mt-8">
            <v-col cols="12" lg="2">
                <p class="sliderTitleText" style="color:black;">배너명</p>
            </v-col>
            <v-col cols="12" lg="6">
                <v-text-field v-model="adName" hide-details label="ID" solo></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="d-flex align-center" lg="2">
                <p class="sliderTitleText" style="color:black;">사진업로드</p>
            </v-col>
            <v-col cols="12" lg="6">
                  <v-file-input v-model="adImage" prepend-icon="mdi-camera" accept="image/png, image/jpeg, image/bmp" label="사진업로드"></v-file-input>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-space-around" cols="12">
                <v-btn @click="uploadImage" color="#509F3F"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">등록하기</p></v-btn>
            </v-col>
        </v-row>
        </v-container>
    </v-dialog>
    <!-- 배너 수정 -->
    <v-dialog v-model="dialog2" :width="dialogWidth">
        <v-container style="background-color: #FBFBFB;">
        <v-row>
            <v-col class="black d-flex align-center" cols="12" lg="12">
                <p class="sliderTitleText" style="color:white;">배너 수정</p>
                <v-btn @click="closeDialog(1)" class="ml-auto" icon><v-icon color="white">mdi-close</v-icon></v-btn>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center mt-8">
            <v-col cols="12" lg="2">
                <p class="sliderTitleText" style="color:black;">배너명</p>
            </v-col>
            <v-col cols="12" lg="6">
                <v-text-field v-model="editName" hide-details label="ID" solo></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="d-flex align-center" lg="2">
                <p class="sliderTitleText" style="color:black;">사진업로드</p>
            </v-col>
            <v-col cols="12" lg="6">
                  <v-file-input v-model="editImage" prepend-icon="mdi-camera" accept="image/png, image/jpeg, image/bmp" label="사진업로드"></v-file-input>
            </v-col>
        </v-row>

        <v-row v-if="!$vuetify.mdAndDown" class="d-flex justify-center">
            <v-col class="d-flex justify-space-around" cols="12" lg="12">
                <v-btn @click="edit" color="#509F3F"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">수정하기</p></v-btn>
                <!-- <v-btn @click="closeDialog(1)" color="red"><v-icon color="white">mdi-close</v-icon><p class="subText" style="color:white;">취소</p></v-btn> -->
            </v-col>
        </v-row>

        <v-row v-if="$vuetify.mdAndDown" class="d-flex justify-center">
            <v-col class="d-flex justify-space-around" cols="12" lg="12">
                <v-btn x-small @click="edit" color="#509F3F"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">수정</p></v-btn>
                <!-- <v-btn x-small @click="closeDialog(1)" color="red"><v-icon color="white">mdi-close</v-icon><p class="subText" style="color:white;">취소</p></v-btn> -->
            </v-col>
        </v-row>
        </v-container>
    </v-dialog>
</div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
    data(){
        return{
            dialog:false,
            dialog2:false,

            adList:'',
            adName:'',
            adImage:'',
            adUrl:'',

            editID:'',
            editName:'',
            editImage:'',
            editUrl:'',

            thisUrl:'',
        }
    },
    computed:{
        dialogWidth(){
            switch(this.$vuetify.breakpoint.name){
                case 'xs' : return '100%';
                case 'sm' : return '100%';
                case 'md' : return '90%';
                case 'lg' : return '60%';
                case 'xl' : return '50%';
                default : return '100%';
            }
        }
    },
    created() {
        this.getUrl();
    },
    mounted(){
        this.getAdList();
    },
    methods:{
        getUrl() {
            this.thisUrl = window.location.href;
            this.thisUrl = this.thisUrl.substring(7,10);
            if (this.thisUrl === 'www') {
                this.thisUrl = 'http://www.alldayfootball.co.kr/';
            }else{
                this.thisUrl = 'http://alldayfootball.co.kr/';
            }
        },
        async uploadImage() {
            var adImageUrl = "";
            const formData = new FormData();
            formData.append('image', this.adImage);
            const res = await axios.post(`${this.thisUrl}api/storage/adupload`,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            adImageUrl = res.data;
            this.adUrl = adImageUrl;
            // console.log(this.adUrl);

            await axios.post(`${this.thisUrl}api/ad/upload`,{
                name: this.adName,
                image:this.adUrl,
                })
                .then((res)=>{
                    // console.log(photoURL);
                    if(res.data==='uploaded'){
                        alert('업로드 성공.');
                        this.getAdList()
                        this.adName="";
                        this.adImage="";
                        return;
                    }
                    if(res.data==='not_logged'){
                        alert('권한이 없습니다.');
                        return;
                    }
                    if(res.data==='not_admin'){
                        alert('권한이 없습니다.');
                        return;
                    }
                })
            this.dialog = false;
        },
        getAdList(){
            axios.get(`${this.thisUrl}api/ad/find`)
            .then((res)=>{
                this.adList = res.data;
                // console.log(this.userList);
            })
        },
        openEdit(data){
            this.editID = data._id;
            this.editName = data.name;
            this.dialog2=true;
        },
        async edit(){
            var editImageUrl = "";
            const formData = new FormData();
            formData.append('image', this.editImage);
            const res = await axios.post(`${this.thisUrl}api/storage/adupload`,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            editImageUrl = res.data;
            this.editUrl = editImageUrl;
            // console.log(this.editUrl);

            await axios.put(`${this.thisUrl}api/ad/edit`,{
                id:this.editID,
                name:this.editName,
                image:this.editUrl,
                })
                .then((res)=>{
                    // console.log(photoURL);
                    if(res.data==='updated'){
                        alert('업데이트 성공.');
                        this.getAdList()
                        this.editName="";
                        this.editImage="";
                        return;
                    }
                    if(res.data==='not_logged'){
                        alert('권한이 없습니다.');
                        return;
                    }
                    if(res.data==='not_admin'){
                        alert('권한이 없습니다.');
                        return;
                    }
                })
            this.dialog2 = false;
        },
        remove(data){
            axios.post(`${this.thisUrl}api/ad/delete`,{
                id:data,
            })
            .then((res)=>{
                if(res.data==='not_logged'){
                    alert('권한이 없습니다.');
                    return;
                }
                if(res.data==='not_admin'){
                    alert('권한이 없습니다.');
                    return;
                }
                if(res.data==='deleted'){
                    this.getAdList();
                    alert('삭제 되었습니다.');
                    return;
                }
            })
        },
        closeDialog(n){
            if(n===0)
            {
                this.adName='';
                this.adImage='';
                this.dialog = false;
                return;
            }
            if(n===1)
            {
            this.editName='';
            this.editImage='';
            this.dialog2 = false;
            return;
            }
        },

    },
}
</script>

<style scoped>
@import url("../../assets/css/unify.css");
</style>