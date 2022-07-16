import axios from './config';

const searchAPI = {
  youtuberSearchFromGoogle(keyword, limit) {
    return axios.get(`/search/youtube?keyword=${keyword}&limit=${limit}`);
  },
};

export default searchAPI;
