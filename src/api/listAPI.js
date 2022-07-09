import axios from './config';

const listAPI = {
  getYoutuber(keyword, skip, size) {
    return axios.get(`/youtuber/search?keyword=${keyword}&skip=${skip}&size=${size}`);
  },
};

export default listAPI;
