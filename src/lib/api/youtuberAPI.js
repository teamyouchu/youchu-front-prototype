import axios from './config';

const youtuberAPI = {
  registYoutuber(data) {
    return axios.post('/youtuber', data);
  },
};

export default youtuberAPI;
