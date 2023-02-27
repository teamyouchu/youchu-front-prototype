import axios from './config';

const channelAPI = {
  // 평가할 유튜버 조회
  getRateChannel(skip: number, size: number) {
    return axios.get(`/channel/rate?skip=${skip}&size=${size}`);
  },
  // 추천 유튜버 조회
  getRecommendChannel() {
    return axios.get(`/channel/recommend`);
  },
};

export default channelAPI;
