import { fetchFooterData } from '@/api/config';

export default {
  namespaced: true,
  state: {
    footerData: {},
  },
  mutations: {
    setFooterData(state, data) {
      state.footerData.email = data.email;
      state.footerData.tel = data.tel;
      state.footerData.pub = data.pub;
      state.footerData.edi = data.edi;
      state.footerData.pol = data.pol;
      state.footerData.add = data.add;
    },
  },
  actions: {
    async FETCH_FOOTER_DATA({ commit }) {
      const { data } = await fetchFooterData();
      commit('setFooterData', data.info);
    },
  },
};
