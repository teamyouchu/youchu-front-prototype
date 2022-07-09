import axios from './config';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getReviews(id, num, sortBy) {
    return axios.get(`/youtuber/${id}/review?page=${num}&sort=${sortBy}`);
  },
  getReview(id) {
    return axios.get(`/youtuber/${id}`);
  },
};
