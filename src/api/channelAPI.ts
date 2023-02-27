import axios from './config';

const channelAPI = {
  // 추천 유튜버 조회
  getRecommendChannel() {
    return axios.get(`/channel/recommend`);
  },
};

export default channelAPI;
