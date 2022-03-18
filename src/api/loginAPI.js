import axios from 'axios';

const loginAPI =  {
  postLogin(data) {
    return axios.post('https://api.youchu.io/v1/login', data);
  },
};

export default loginAPI