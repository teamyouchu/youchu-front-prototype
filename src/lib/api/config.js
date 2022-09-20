import axios from 'axios';

export const apiUrl = 'https://api.youchu.io/v1';
// export const apiUrl = 'http://localhost:5000/v1';

axios.defaults.baseURL = apiUrl;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const accessToken = localStorage.getItem('accessToken');
if (accessToken) {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

axios.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
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
    if (status === 401 && accessToken) {
      if (type === 'expired.refresh_token') {
        alert('인증 정보가 만료되었습니다. 다시 로그인 후 시도해 주세요.');
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
      } else {
        const originalRequest = config;
        const refreshToken = localStorage.getItem('refreshToken');
        const { data } = await axios.post(
          '/refresh',
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          data;
        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default axios;
