import { instance } from './index';

function subscribe(subscriberData) {
  return instance.post('ad/subscribe', subscriberData);
}

export { subscribe };
