import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import auth from '@/store/modules/auth';
import config from '@/store/modules/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminDrawerBool: true,
  },
  getters: {
    isLogin(state) {
      return state.auth.user !== null;
    },
  },
  mutations: {
    set_adminDrawerBool(state, bool) {
      state.adminDrawerBool = bool;
    },
  },
  actions: {},
  modules: {
    auth,
    config,
  },
  // plugins: [
  //   createPersistedState({
  //     paths: ['config'],
  //     storage: window.sessionStorage,
  //   }),
  // ],
});
