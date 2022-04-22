import { instance } from './index';

function fetchFooterData() {
  return instance.post('config/findone', {
    id: '60d6b0c44dcc9e16fc936574',
  });
}

export { fetchFooterData };
