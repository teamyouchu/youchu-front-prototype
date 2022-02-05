import axios from 'axios';

const mainAPI =  {
  getBest() {
    return axios.get('http://api.youchu.io/v1/youtuber/most');
  },

  getRecommend() {
    return axios.get('http://api.youchu.io/v1/youtuber/favorite');
  },
};

export default mainAPI