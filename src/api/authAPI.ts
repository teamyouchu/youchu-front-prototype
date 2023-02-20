import axios from './config';

interface ILogin {
  code: string;
  redirectUri: string;
}

const authAPI = {
  // 로그인
  postLogin(data: ILogin) {
    return axios.post('/login', data);
  },
};

export default authAPI;
