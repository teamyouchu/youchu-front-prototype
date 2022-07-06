import axios from 'axios';

const userAPI =  {
  getMe() {
    return axios.get('https://api.youchu.io/v1/me');
  },
  putNickname(data) {
    return axios.put('https://api.youchu.io/v1/nickname', data);
  },
  putCategory(data) {
    return axios.put('https://api.youchu.io/v1/favorite-categories', data);
  },
};

export default userAPI