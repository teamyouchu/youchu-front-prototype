import axios from './config';

const userAPI = {
  // 유저 정보 요청
  getMe() {
    return axios.get('/me');
  },
  // 내가 작성한 리뷰 조회
  getMyReviews(skip: number, size: number) {
    return axios.get(`/me/reviews?skip=${skip}&size=${size}`);
  },
};

export default userAPI;
