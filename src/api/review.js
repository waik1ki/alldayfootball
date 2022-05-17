import { instance } from '@/api/index';

function createReview(reviewData) {
  return instance.post('headline/write', reviewData);
}

function fetchReviews() {
  return instance.get('headline/find');
}

// 어드민 config - 리뷰 부분 페이지네이션 구현에 사용됨.
function paginationReviews(limit, page) {
  return instance.post('headline/pagination', {
    limit: limit,
    page: page,
  });
}

function editReview(id, title) {
  return instance.put('headline/edit', {
    id: id,
    title: title,
  });
}

function deleteReview(id) {
  return instance.post('headline/delete', {
    id: id,
  });
}

export {
  createReview,
  fetchReviews,
  paginationReviews,
  editReview,
  deleteReview,
};
