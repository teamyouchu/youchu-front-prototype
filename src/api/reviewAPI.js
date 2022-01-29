import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getReview(id) {
    return axios.get(`http://api.youchu.io/v1/youtuber/${id}/review?page=1&sort=last`);
  },
};
