export default {
  methods: {
    cancle() {
      if (this.title === null && this.editor.value === '')
        this.$router.push('/admin/article');
      else {
        if (confirm('작성 된 내용은 저장되지 않습니다. 나가시겠습니까?')) {
          window.location.href = '/admin/article';
        }
      }
    },
  },
};
