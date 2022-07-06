import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getReviews(id, num, sortBy) {
    return axios.get(`http://api.youchu.io/v1/youtuber/${id}/review?page=${num}&sort=${sortBy}`);
  },
  getReview(id) {
    return axios.get(`http://api.youchu.io/v1/youtuber/${id}`);
  },
};
