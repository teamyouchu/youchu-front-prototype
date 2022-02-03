import axios from 'axios';

const signupAPI =  {
  postNickNameDup(data) {
    return axios.post('http://api.youchu.io', data);
  },

  postSignup(data) {
    return axios.post('http://api.youchu.io/v1/auth/register', data);
  },
};

export default signupAPI