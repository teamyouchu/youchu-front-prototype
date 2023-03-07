import axios from './config';
import { IReviews } from '@/lib/types';

const channelAPI = {
  // 평점 저장
  postReviews(data: IReviews[]) {
    return axios.post('/channel/reviews', { reviews: data });
  },
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
