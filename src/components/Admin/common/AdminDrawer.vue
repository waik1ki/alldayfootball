<template>
  <v-navigation-drawer
    absolute
    stateless
    v-model="adminDrawerBool"
    color="rgba(0,0,0,.85)"
    id="Admindrawer"
    :width="DrawerWidth"
  >
    <v-row no-gutters>
      <v-col v-if="this.$vuetify.breakpoint.mdAndDown" cols="12">
        <v-card elevation="0" class="transparent d-flex justify-end"
          ><v-icon @click="close" class="mr-5 mt-2" color="white"
            >mdi-exit-to-app</v-icon
          ></v-card
        >
      </v-col>
      <v-col class="d-flex justify-center mt-5" cols="12">
        <v-card
          width="125px"
          height="125px"
          color="rgba(88,211,88,.17)"
          rounded="circle"
        >
          <v-img height="100%" width="100%" :src="user.photo"></v-img>
        </v-card>
      </v-col>
      <v-col class="d-flex justify-center" cols="12">
        <p class="subText" style="color:white;">
          {{ user.name }}<span class="ml-5 listTinyText">{{ user.id }}</span>
        </p>
      </v-col>
      <v-col class="d-flex justify-center my-5" cols="12">
        <v-btn @click="Logout" color="white" outlined
          ><v-icon>mdi-logout</v-icon>로그아웃</v-btn
        >
      </v-col>
    </v-row>
    <v-divider style="background-color:white;"></v-divider>

    <!-- 메뉴 부분 ㅇㅅㅇ -->
    <v-list nav>
      <v-list-item
        active-class="activeList"
        v-for="i in menuList"
        :key="i.title"
        link
        :to="i.to"
      >
        <v-list-item-content>
          <v-list-item-title
            style="color:white; text-align:center;"
            class="subText my-1"
            ><p>
              <v-icon color="white" class="mr-2">{{ `mdi-${i.icon}` }}</v-icon
              >{{ i.title }}
            </p></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- 메뉴 부분 ㅇㅅㅇ -->
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      menuList: [
        {
          title: '기사관리',
          to: '/admin/article',
          icon: 'newspaper-variant-multiple',
        },
        { title: '계정관리', to: '/admin/accout', icon: 'account-cog' },
        { title: '후기관리', to: '/admin/review', icon: 'comment-text' },
        { title: '푸터관리', to: '/admin/footer', icon: 'cog' },
      ],
    };
  },
  methods: {
    async Logout() {
      const data = await this.$store.dispatch('auth/LOGOUT');
      alert(data);
      location.href = '/';
    },
    close() {
      this.adminDrawerBool = false;
    },
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
    DrawerWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '80%';
        case 'sm':
          return '80%';
        case 'md':
          return '40%';
        case 'lg':
          return '15%';
        case 'xl':
          return '15%';
        default:
          return '15%';
      }
    },
    adminDrawerBool: {
      get() {
        return this.$store.state.adminDrawerBool;
      },
      set(bool) {
        return this.$store.commit('set_adminDrawerBool', bool);
      },
    },
    breakPoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
  watch: {
    breakPoint() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return this.$store.commit('set_adminDrawerBool', false);
        case 'sm':
          return this.$store.commit('set_adminDrawerBool', false);
        case 'md':
          return this.$store.commit('set_adminDrawerBool', false);
        case 'lg':
          return this.$store.commit('set_adminDrawerBool', true);
        case 'xl':
          return this.$store.commit('set_adminDrawerBool', true);
      }
    },
  },
};
</script>

<style scoped>
@import url('../../../assets/css/unify.css');
.activeList {
  border-left: 2px solid white;
}
</style>
