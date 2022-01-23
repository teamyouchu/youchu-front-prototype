import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getReview() {
    return axios.get('http://api.youchu.io/v1/youtuber/{유튜버ID}/review?page=1&sort=last');
  },
};
