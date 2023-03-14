import authInstance from './authConfig';

const userAPI = {
  // 유저 정보 요청
  getMe() {
    return authInstance.get('/me');
  },
  // 내가 작성한 리뷰 조회
  getMyReviews(skip: number, size: number) {
    return authInstance.get(`/me/reviews?skip=${skip}&size=${size}`);
  },
};

export default userAPI;
