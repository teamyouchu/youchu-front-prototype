import axios from 'axios';

export default {
  getYoutuber(keyword, skip, size) {
    return axios.get(`http://api.youchu.io/youtuber/search?keyword=${keyword}&skip=${skip}&size=${size}`);
  },
};