import axios from './config';

const reviewAPI = {
  // 리뷰 삭제
  delReview(review_id) {
    return axios.delete(`/review/${review_id}`);
  },
};

export default reviewAPI;
