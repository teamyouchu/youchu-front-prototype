import axios from './config';

const youtuberAPI = {
  // 유튜버 등록 api
  registYoutuber(data) {
    return axios.post('/youtuber', data);
  },
  // 유튜버 정보 가져오기 api
  getYoutuber(channel_id) {
    return axios.get(`/youtuber/${channel_id}`);
  },
  // 유튜버 리뷰 작성 api
  postReview(data, params) {
    return axios.post(`/youtuber/review`, data, params);
  },
};

export default youtuberAPI;
