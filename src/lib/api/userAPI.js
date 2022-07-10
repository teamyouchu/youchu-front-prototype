import axios from './config';

const userAPI = {
  getMe() {
    return axios.get('/me');
  },
  putNickname(data) {
    return axios.put('/nickname', data);
  },
  putCategory(data) {
    return axios.put('/favorite-categories', data);
  },
};

export default userAPI;
