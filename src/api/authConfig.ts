import axios from 'axios';
import { apiUrl } from './config';
import { deleteCookie, getCookie, setCookie } from '@/lib/cookies';

const authInstance = axios.create({
  baseURL: apiUrl,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
});

authInstance.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');

    if (refreshToken) {
      // cookie에 accessToken과 refreshToken가 있으면 (로그인 기록이 있으면)
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
      if (type === 'expired.refresh_token') {
        // refreshToken 만료면 아예 로그아웃
        alert('인증 정보가 만료되었습니다. 다시 로그인 후 시도해 주세요.');
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        // TODO 서지수 로그인화면으로 이동가능한지 확인
      } else {
        if (getCookie('refreshToken')) {
          // accessToken 만료면 refreshToken 재발급 요청
          const originalRequest = config;
          const { data } = await authInstance.post('/refresh');
          // 성공적으로 재발급 받으면 데이터 저장
          const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
            data;
          // cookie에 기존 값 삭제하고 새로 발급 받은 token 저장
          deleteCookie('accessToken');
          deleteCookie('refreshToken');
          setCookie('accessToken', newAccessToken, 1000 * 60 * 30); // 유효 기간: 30분
          setCookie('refreshToken', newRefreshToken, 7 * 1000 * 60 * 60 * 24); // 유효 기간: 7일
          // 오류났던 api 요청 다시 재요청
          return authInstance(originalRequest);
        }
      }
    }
    return Promise.reject(error);
  },
);

export default authInstance;
