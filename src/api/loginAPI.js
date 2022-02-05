import axios from 'axios';

const loginAPI =  {
  postLogin(data) {
    return axios.post('http://api.youchu.io/v1/auth/login', data);
  },
};

export default loginAPI