import axios from './config';

const mainAPI = {
  getBest() {
    return axios.get('/youtuber/most');
  },

  getRecommend() {
    return axios.get('/youtuber/favorite');
  },
};

export default mainAPI;

// 삭제하기
