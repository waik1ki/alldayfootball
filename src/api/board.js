import { instance } from './index';

function fetchBoard(boardData) {
  return instance.post('board/takeboard', boardData);
}

function fetchSortedBoard(boardData) {
  return instance.post('board/takeboardsort', boardData);
}

function createArticle(articleData) {
  return instance.post('board/write', articleData);
}

function editArticle(articleData) {
  return instance.put('board/edit', articleData);
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

function createArticleContents(id, contents) {
  return instance.post('settingboard/write', {
    id: id,
    contents: contents,
  });
}

function fetchArticles() {
  return instance.get('board/find');
}

function viewCountIncrease(num) {
  return instance.put('board/addviews', {
    seq: num,
  });
}

export {
  fetchBoard,
  fetchSortedBoard,
  fetchArticle,
  fetchArticles,
  createArticle,
  createArticleContents,
  editArticle,
  deleteArticle,
  viewCountIncrease,
};
