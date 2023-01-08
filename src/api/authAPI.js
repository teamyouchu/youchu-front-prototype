import axios from './config';

const authAPI = {
  // 로그인
  postLogin(data) {
    return axios.post('/login', data);
  },
  // 회원가입
  putSignup(data) {
    return axios.put('/register', data);
  },
};

export default authAPI;
