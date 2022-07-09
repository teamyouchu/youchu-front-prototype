import axios from 'axios';

// export const apiUrl = 'https://api.youchu.io/v1';
export const apiUrl = 'http://localhost:5000/v1';

axios.defaults.baseURL = apiUrl;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export default axios;
