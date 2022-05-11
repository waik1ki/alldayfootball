import { instance } from './index';

const footerId = '60d6b0c44dcc9e16fc936574';

function fetchFooter() {
  return instance.post('config/findone', {
    id: footerId,
  });
}

function updateFooter(data) {
  return instance.put('config/edit', {
    id: footerId,
    info: data,
  });
}

export { fetchFooter, updateFooter };
