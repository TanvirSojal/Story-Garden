import axios from "axios";

const uri = process.env.VUE_APP_USERS_URI;

const AuthService = {
  register: async (request) => {
    return axios
      .post(uri, request)
      .then((response) => {
        console.log("registration", response.status);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
  login: (request) => {
    return axios
      .post(uri + "/login", request)
      .then((response) => {
        console.log("login", response.status);

        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
  // logout: (request) => {},
};

export default AuthService;
