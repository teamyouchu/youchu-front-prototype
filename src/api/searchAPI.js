import axios from './config';

const searchAPI = {
  // 유튜브에서 유튜버 검색
  youtuberSearchFromGoogle(keyword, limit) {
    return axios.get(`/search/youtube?keyword=${keyword}&limit=${limit}`);
  },
  // 유추에서 유튜버 검색
  youtuberSearchFromYouchu(sortBy, category, keyword, skip, size) {
    return axios.get(
      `/search?sortBy=${sortBy}&category=${category}&keyword=${keyword}&skip=${skip}&size=${size}`,
    );
  },
};

export default searchAPI;
