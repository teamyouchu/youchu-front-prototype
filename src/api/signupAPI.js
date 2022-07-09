import axios from './config';

const signupAPI = {
  postNickNameDup(data) {
    return axios.post('/nickname', data);
  },

  postSignup(data) {
    return axios.put('/register', data);
  },
};

export default signupAPI;
