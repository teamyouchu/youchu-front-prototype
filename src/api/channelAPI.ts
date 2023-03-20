import instance from './config';
import authInstance from './authConfig';
import { IReviews } from '@/lib/types';

const channelAPI = {
  // 평가할 유튜버 조회
  getRateChannel(skip: number, size: number) {
    return instance.get(`/channel/rate?skip=${skip}&size=${size}`);
  },
  // 평점 저장
  postReviews(data: IReviews[]) {
    return authInstance.post('/channel/reviews', { reviews: data });
  },
  // 평점 삭제
  delReview(channel_id: string) {
    return authInstance.delete(`/review/${channel_id}`);
  },
  // 추천 유튜버 조회
  getRecommendChannel() {
    return authInstance.get(`/channel/recommend`);
  },
};

export default channelAPI;
