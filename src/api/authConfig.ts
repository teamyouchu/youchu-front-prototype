import axios from 'axios';
import { apiUrl } from './config';

const authInstance = axios.create({
  baseURL: apiUrl,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
});

authInstance.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (refreshToken) {
      // localStorage에 refreshToken가 있으면 (로그인 기록이 있으면)
      if (config.url === '/refresh') {
        // refreshToken 재발급 api는 Authorization에 refreshToken 삽입해서 요청
        config.headers.Authorization = `Bearer ${refreshToken}`;
      } else {
        // 나머지 api 요청은 Authorization에 accessToken 삽입해서 요청
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    // 로그인 기록이 없을 땐 config 수정없이 그냥 요청 보냄
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: {
        status,
        data: { type },
      },
    } = error;
    if (status === 401) {
      // 401 에러 중에서
      if (type === 'expired.access_token') {
        if (localStorage.getItem('refreshToken')) {
          // accessToken 만료면 refreshToken 재발급 요청
          const originalRequest = config;
          const { data } = await authInstance.post('/refresh');
          // 성공적으로 재발급 받으면 데이터 저장
          const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
            data;
          // localStorage에 새로 발급 받은 token 저장
          localStorage.setItem('accessToken', newAccessToken);
          localStorage.setItem('refreshToken', newRefreshToken);
          // 오류났던 api 요청 다시 재요청
          return authInstance(originalRequest);
        }
      } else {
        // refreshToken 만료거나 탈퇴한 계정이면 아예 로그아웃
        alert('인증 정보가 만료되었습니다. 다시 로그인 후 시도해 주세요.');
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
        // TODO 서지수 로그인화면으로 이동가능한지 확인
      }
    }
    return Promise.reject(error);
  },
);

export default authInstance;
