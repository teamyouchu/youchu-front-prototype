import axios from './config';

const youtuberAPI = {
  // 유튜버 등록
  registYoutuber(data) {
    return axios.post('/youtuber', data);
  },
  // 유튜버 정보 조회
  getYoutuberInfo(channel_id) {
    return axios.get(`/youtuber/${channel_id}`);
  },
  // 유튜버 리뷰 작성
  postReview(data, channel_id) {
    return axios.post(`/youtuber/review?channel_id=${channel_id}`, data);
  },
  // 유튜버 리뷰 조회
  getYoutuberReview(channel_id, page, sort) {
    return axios.get(
      `/youtuber/${channel_id}/review?page=${page}&sort=${sort}`,
    );
  },
  // 이번주 인기 유튜버 조회
  getMostYoutubers() {
    return axios.get(`/youtuber/most`);
  },
  // 추천 유튜버 조회
  getRecommendYoutubers() {
    return axios.get(`/youtuber/recommend`);
  },
  // 카테고리 별 추천 유튜버
  getCategoryRecommendYoutubers(category_id) {
    return axios.get(`/youtuber/recommend/${category_id}`);
  },
};

export default youtuberAPI;
