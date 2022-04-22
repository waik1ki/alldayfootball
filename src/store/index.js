import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import config from '@/store/modules/config';
import { check } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    set_adminDrawerBool(state, bool) {
      state.adminDrawerBool = bool;
    },
    setUserData(state, userData) {
      state.user = userData;
    },
    clearUser(state) {
      state.user = {};
    },
  },
  actions: {
    async CHECK_AUTH({ commit }) {
      const { data } = await check();
      commit('setUserData', data.info);
      return data;
    },
  },
  modules: {
    config,
  },
  plugins: [
    createPersistedState({
      paths: ['config'],
    }),
  ],
});
