export default {
  methods: {
    responseAction(data) {
      switch (data) {
        case 'uploaded':
          alert('작성되었습니다.');
          this.thumb = '';
          window.location.href = '/admin/article';
          break;
        case 'updated':
          alert('수정되었습니다.');
          this.thumb = '';
          window.location.href = '/admin/article';
          break;
        case 'deleted':
          alert('삭제되었습니다.');
          window.location.href = '/admin/article';
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
