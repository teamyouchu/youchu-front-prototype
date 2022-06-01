import axios from 'axios';

const userAPI =  {
  getMe() {
    return axios.get('https://api.youchu.io/v1/me');
  }
};

export default userAPI