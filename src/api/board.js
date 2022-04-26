import { instance } from './index';

function fetchReviews() {
  return instance.get('headline/find2');
}

function fetchBoards(bNum, limit, page, word) {
  return instance.post('board/takeboard', {
    bNum: bNum,
    limit: limit,
    page: page,
    word: word,
  });
}

function fetchSortedBoards(bNum, limit, page, word, sort) {
  return instance.post('board/takeboardsort', {
    bNum: bNum,
    limit: limit,
    page: page,
    word: word,
    sort: sort,
  });
}

export { fetchBoards, fetchSortedBoards, fetchReviews };
