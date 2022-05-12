export default {
  computed: {
    boardNumber() {
      switch (this.select) {
        case this.boardList[0]:
          return 0;
        case this.boardList[1]:
          return 1;
        case this.boardList[2]:
          return 2;
        default:
          return 0;
      }
    },
  },
};
