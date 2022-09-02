import axios from './config';

const searchAPI = {
  // 유튜브에서 유튜버 검색
  youtuberSearchFromGoogle(keyword, limit) {
    return axios.get(`/search/youtube?keyword=${keyword}&limit=${limit}`);
  },
};

export default searchAPI;
