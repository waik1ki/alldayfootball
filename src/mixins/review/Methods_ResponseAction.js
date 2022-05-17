export default {
  methods: {
    responseAction(data) {
      switch (data) {
        case 'uploaded':
          alert('업로드 성공.');
          this.initForm();
          this.$emit('refresh');
          break;
        case 'updated':
          alert('업데이트 성공.');
          this.$emit('refresh');
          break;
        case 'deleted':
          alert('삭제되었습니다.');
          this.$emit('refresh');
          break;
        case 'not_logged':
          alert('권한이 없습니다.');
          break;
        case 'not_admin':
          alert('권한이 없습니다.');
          break;
        default:
          alert('권한이 없습니다.');
          break;
      }
    },
  },
};
