import axios from './config';

const reviewAPI = {
  // 리뷰 삭제
  delReview(review_id) {
    return axios.delete(`/review/${review_id}`);
  },
  // 베스트 리뷰 조회
  getBestReview(channel_id) {
    return axios.get(`/review/${channel_id}/bestReview`);
  },
};

export default reviewAPI;
