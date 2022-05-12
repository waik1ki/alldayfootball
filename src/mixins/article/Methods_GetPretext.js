export default {
  methods: {
    getPretext(text) {
      return text.replace(/(<([^>]+)>|&nbsp;|@([^>]+)})/gi, '').slice(0, 150);
    },
  },
};
