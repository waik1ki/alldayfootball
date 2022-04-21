<template>
<div v-scroll="onScroll" class="screen">
  <v-app>
    <Header v-if="!isAdmin" />
    <v-main>
      <div>
        <router-view :style="{width:ContentWidth}" />
      </div>
    </v-main>
    <Footer v-if="!isAdmin"/>
  </v-app>
</div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
  },
  data(){
    return{
      scrollTop:0,
      adTop:0,
    }
  },
  mounted(){
  },
  computed:{
    ContentWidth(){  
      if(window.location.href.includes('admin')){
          switch(this.$vuetify.breakpoint.name){
            case 'xs' : return "95%";
            case 'sm' : return "95%";
            case 'md' : return "95%";
            case 'lg' : return "70%";
            case 'xl' : return "70%";
            default : return "70%";
        }
      }
      return "";
    },
    isAdmin(){
      if(window.location.href.includes('admin')) return true;
      return false;
    }
  },

  methods:{
    onScroll(){
      this.scrollTop=document.body.parentNode.scrollTop;
    },
  },
  watch:{
    scrollTop(oldVal,newVal){
      if(this.$vuetify.breakpoint.mdAndDown||window.location.href.includes('admin')||window.location.href.includes('introduce')) return;
      var footer = document.getElementsByClassName('Footer')[0].getBoundingClientRect().top+window.pageYOffset-850;
      if(newVal<20){
          setTimeout(() => {
          this.adTop='0px';
        }, 1);
      }
      if(newVal<footer){
        setTimeout(() => {
          this.adTop=`${newVal+25}px`;
        }, 1);
      }
      else{
          setTimeout(() => {
          this.adTop=`${footer-25}px`;
        }, 1);
      }
    },
  },
};
</script>

<style>
.v-application p{
  margin:0;
}
.screen{
  /* padding-top:30px; */
  background-color: #FBFBFB;
}
</style>
