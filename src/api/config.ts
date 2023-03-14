import axios from 'axios';

export const apiUrl = 'https://api.youchu.io/v1';
// export const apiUrl = 'http://localhost:5000/v1';

const instance = axios.create({
  baseURL: apiUrl,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
});

export default instance;
