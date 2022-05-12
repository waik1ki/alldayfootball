import { instance } from './index';

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

function createArticle(articleData) {
  return instance.post('board/write', {
    thumb: articleData.thumb,
    title: articleData.title,
    contents: articleData.contents,
    pretext: articleData.pretext,
    author: articleData.author,
    authorid: articleData.authorid,
    bNum: articleData.bNum,
  });
}

function editArticle(articleData) {
  return instance.put('board/edit', {
    id: articleData.id,
    thumb: articleData.thumb,
    title: articleData.title,
    contents: articleData.contents,
    pretext: articleData.pretext,
    bNum: articleData.bNum,
  });
}
function deleteArticle(id) {
  return instance.post('board/delete', {
    id: id,
  });
}

function fetchArticle(num) {
  return instance.post('board/findone', {
    seq: num,
  });
}

export {
  fetchBoards,
  fetchSortedBoards,
  fetchArticle,
  createArticle,
  deleteArticle,
  editArticle,
};
