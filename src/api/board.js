import { instance } from './index';

function fetchReviews() {
  return instance.get('headline/find2');
}

function fetchBoard(bNum, limit, page, word) {
  return instance.post('board/takeboard', {
    bNum: bNum,
    limit: limit,
    page: page,
    word: word,
  });
}

export { fetchBoard, fetchReviews };
