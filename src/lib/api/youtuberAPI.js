import axios from './config';

const youtuberAPI = {
  registYoutuber(data) {
    return axios.post('/youtuber', data);
  },
  getYoutuber(youtuber_id) {
    return axios.get(`/youtuber/${youtuber_id}`);
  },
  postReview(youtuber_id, data) {
    return axios.post(`/youtuber/${youtuber_id}/review`, data);
  },
};

export default youtuberAPI;
