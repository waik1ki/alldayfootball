import { instance } from './index';

function imageUpload(formData) {
  return instance.post('storage/profileupload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export { imageUpload };
