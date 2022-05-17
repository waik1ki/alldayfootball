export default {
  methods: {
    cancle(type) {
      if (type === 'write') {
        if (this.title === '' && this.editor.value === '<p><br></p>')
          this.$emit('close');
        else {
          if (confirm('작성 된 내용은 저장되지 않습니다. 나가시겠습니까?')) {
            this.$emit('close');
            this.title = '';
            this.editor.value = '<p><br></p>';
          }
        }
      } else if (type === 'edit') {
        if (confirm('작성 된 내용은 저장되지 않습니다. 나가시겠습니까?')) {
          this.$emit('close');
          this.title = '';
          this.editor.value = '<p><br></p>';
        }
      }
    },
  },
};
