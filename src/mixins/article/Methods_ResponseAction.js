export default {
  methods: {
    responseAction(data) {
      switch (data) {
        case 'uploaded':
          alert('작성되었습니다.');
          this.thumb = '';
          this.$emit('refresh');
          this.title = '';
          this.editor.value = '<p><br></p>';
          break;
        case 'updated':
          alert('수정되었습니다.');
          this.thumb = '';
          this.$emit('refresh');
          this.title = '';
          this.editor.value = '<p><br></p>';
          break;
        case 'deleted':
          alert('삭제되었습니다.');
          this.$emit('refresh');
          this.title = '';
          this.editor.value = '<p><br></p>';
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
