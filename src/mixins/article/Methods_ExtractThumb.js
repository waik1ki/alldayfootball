export default {
  methods: {
    extractThumb() {
      var tagIndex = this.editor.value.indexOf('<img');
      var tagSrcIndex = this.editor.value.indexOf('src="', tagIndex + 4);
      var tagEndIndex = this.editor.value.indexOf('"', tagSrcIndex + 5);
      this.thumb = this.editor.value.slice(tagSrcIndex + 5, tagEndIndex);
    },
  },
};
