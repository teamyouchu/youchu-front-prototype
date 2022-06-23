import axios from 'axios';

const mainAPI =  {
  getBest() {
    return axios.get('https://api.youchu.io/v1/youtuber/most');
  },

  getRecommend() {
    return axios.get('https://api.youchu.io/v1/youtuber/favorite');
  },
};

export default mainAPI