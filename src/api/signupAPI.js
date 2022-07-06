import axios from 'axios';

const signupAPI =  {
  postNickNameDup(data) {
    return axios.post('https://api.youchu.io/v1/nickname', data);
  },

  postSignup(data) {
    return axios.put('https://api.youchu.io/v1/register', data);
  },
};

export default signupAPI