import Vue from 'vue';
import Vuex from 'vuex';
import { check } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerBool: false,
    adminDrawerBool: true,
    isLogged: false,
    user: {},
    // loading:true,
  },
  getters: {
    isLogin(state) {
      return state.user !== {};
    },
  },
  mutations: {
    set_drawerBool(state, bool) {
      state.drawerBool = bool;
    },
    set_adminDrawerBool(state, bool) {
      state.adminDrawerBool = bool;
    },
    setIsLogged(state, bool) {
      state.isLogged = bool;
    },
    setUserData(state, userData) {
      state.user = userData;
    },
    clearUser(state) {
      state.user = {};
    },
    // set_loading(state,bool){
    //   state.loading = bool;
    // },
  },
  actions: {
    async CHECK_AUTH({ commit }) {
      const { data } = await check();
      commit('setUserData', data.info);
      return data;
    },
  },
  modules: {},
});
