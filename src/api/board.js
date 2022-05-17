import { instance } from './index';

function fetchBoards(boardData) {
  return instance.post('board/takeboard', boardData);
}

function fetchSortedBoards(boardData) {
  return instance.post('board/takeboardsort', boardData);
}

function createArticle(articleData) {
  return instance.post('board/write', articleData);
}

function editArticle(articleData) {
  return instance.put('board/edit', articleData);
}
function deleteArticle(id) {
  return instance.post('board/delete', id);
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
