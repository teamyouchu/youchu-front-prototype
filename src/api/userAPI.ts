import axios from './config';

const userAPI = {
  // 유저 정보 요청
  getMe() {
    return axios.get('/me');
  },
};

export default userAPI;
