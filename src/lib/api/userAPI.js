import axios from './config';

const userAPI = {
  // 유저 정보 요청
  getMe() {
    return axios.get('/me');
  },
  // 닉네임 중복 확인
  getDupNickName(nickname) {
    return axios.get(`/duplicate-nickname?nickname=${nickname}`);
  },
  // 닉네임 수정
  putNickname(data) {
    return axios.put('/nickname', data);
  },
  // 선호 카테고리 수정
  putCategory(data) {
    return axios.put('/favorite-categories', data);
  },
  // 내가 작성한 리뷰 조회
  getMyReviews(page, sort) {
    return axios.get(`/review?page=${page}&sort=${sort}`);
  },
};

export default userAPI;
