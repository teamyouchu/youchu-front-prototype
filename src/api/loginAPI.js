import axios from 'axios';

const loginAPI =  {
  // 로그인 api
  postLogin(data) {
    return axios.post('https://api.youchu.io/v1/login', data);
  },
  // 엑세스토큰 만료 시 토큰 재요청 api
  postRefresh() {
    const refreshToken = localStorage.getItem('refreshToken');
    return axios.post('https://api.youchu.io/v1/refresh', {}, {
      headers: {
        "Authorization": `Bearer ${refreshToken}`
      },
    });
  },
};

export default loginAPI