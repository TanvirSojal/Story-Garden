import axios from "axios";

const AuthService = {
  register: async (request) => {
    return axios
      .post(process.env.VUE_APP_USERS_URI, request)
      .then((response) => {
        console.log(response);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
  // login: (request) => {},
  // logout: (request) => {},
};

export default AuthService;
