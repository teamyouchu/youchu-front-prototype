import axios from 'axios';

const listAPI = {
  getYoutuber(keyword, skip, size) {
    return axios.get(`http://api.youchu.io/youtuber/search?keyword=${keyword}&skip=${skip}&size=${size}`);
  },
};

export default listAPI