export default {
  methods: {
    responseAction(data) {
      switch (data) {
        case 'updated':
          alert('수정되었습니다.');
          this.initForm();
          this.$emit('refresh');
          break;
        case 'registered':
          alert('등록되었습니다.');
          this.initForm();
          this.$emit('refresh');
          break;
        case 'deleted':
          alert('삭제되었습니다.');
          this.$emit('refresh');
          break;
        case 'id_exists':
          alert('이미 등록된 ID입니다.');
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
