import { check, login, logout } from '@/api/auth';
import {
  saveUserToCookie,
  getUserFromCookie,
  deleteCookie,
} from '@/utils/cookies';

export default {
  namespaced: true,
  state: {
    user: getUserFromCookie() || null,
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await login(userData);
      if (data === 'logged_in') {
        const { data } = await check();
        commit('setUserData', data.info);
        saveUserToCookie(JSON.stringify(data.info));
      }
      return data;
    },
    async LOGOUT({ commit }) {
      const { data } = await logout();
      if (data === 'logged_out') {
        deleteCookie('adf_user');
        deleteCookie('sid');
        commit('setUserData', null);
      }
      return data;
    },
  },
};
