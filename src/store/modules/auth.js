import { check } from '@/api/auth';

export default {
  namespaced: true,
  state: {
    isLogged: false,
    user: {},
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setLoggedData(state, bool) {
      state.isLogged = bool;
    },
    clearUser(state) {
      state.user = {};
    },
  },
  actions: {
    async CHECK_AUTH({ commit }) {
      const { data } = await check();
      commit('setUserData', data.info);
      commit('setLoggedData', data.success);
      return data;
    },
  },
};
