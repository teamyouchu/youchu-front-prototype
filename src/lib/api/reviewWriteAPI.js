import axios from './config';

const reviewWriteAPI = {
  postreview(id) {
    return axios.get(`/youtuber/${id}/review`);
  },
};

export default reviewWriteAPI;
