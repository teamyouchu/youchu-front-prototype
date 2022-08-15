import axios from './config';

const userAPI = {
  getMe() {
    return axios.get('/me');
  },
  getDupNickName(data) {
    return axios.get('/duplicate-nickname', data);
  },
  putNickname(data) {
    return axios.put('/nickname', data);
  },
  putCategory(data) {
    return axios.put('/favorite-categories', data);
  },
  getMyReviews(page) {
    return axios.put(`/review?page=${page}`);
  },
};

export default userAPI;
