import { Jodit } from 'jodit';
import 'jodit/build/jodit.min.css';

const options = {
  height: '70vh',
  language: 'ko',
  enableDragAndDropFileToEditor: true,
  uploader: {
    url: process.env.VUE_APP_API_URL + 'storage/test',
    filesVariableName: function() {
      return 'files';
    },
    isSuccess: function(resp) {
      return resp;
    },
    process: function(resp) {
      return {
        path: resp.path,
        message: resp.message,
      };
    },
    defaultHandlerSuccess: function(data) {
      if (data.message.includes('image')) this.selection.insertImage(data.path);
      if (data.message.includes('video'))
        this.selection.insertHTML(`<video controls src=${data.path}></video>`);
    },
  },
  buttons: [
    'source',
    '|',
    'bold',
    'strikethrough',
    'underline',
    'italic',
    '|',
    'ul',
    'ol',
    '|',
    'outdent',
    'indent',
    '|',
    'font',
    'fontsize',
    'brush',
    'paragraph',
    '|',
    'image',
    'file',
    'table',
    'link',
    '|',
    'align',
    'undo',
    'redo',
    '|',
    'hr',
    'eraser',
    'copyformat',
    '|',
    'fullsize',
    'print',
  ],
  buttonsXS: [
    'bold',
    'image',
    '|',
    'brush',
    'paragraph',
    '|',
    'align',
    '|',
    'undo',
    'redo',
    '|',
    'eraser',
    'dots',
  ],
};

export default {
  mounted() {
    this.editor = new Jodit(this.$refs.editor, options);
    this.editor.value = '<p></p>';
  },
};
