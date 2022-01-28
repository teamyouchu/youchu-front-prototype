import axios from 'axios';

export default {
  getBest() {
    return axios.get('http://api.youchu.io/v1/youtuber/most');
  },

  getRecommend() {
    return axios.get('http://api.youchu.io/v1/youtuber/favorite');
  },
};