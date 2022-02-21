import axios from 'axios';

const reviewWriteAPI = {
  postreview(id) {
    return axios.get(`http://api.youchu.io/v1/youtuber/${id}/review`);
  },
};

export default reviewWriteAPI