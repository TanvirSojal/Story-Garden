import axios from "axios";

const uri = process.env.VUE_APP_USERS_URI;

const AuthService = {
  register: async (request) => {
    return axios
      .post(uri + "/registration", request)
      .then((response) => {
        console.log("registration", response.status);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
  login: async (request) => {
    return axios
      .post(uri + "/login", request)
      .then((response) => {
        console.log("login", response);
        localStorage.setItem("storygarden-token", response.data["token"]);
        localStorage.setItem("storygarden-name", response.data.name);
        localStorage.setItem("storygarden-username", response.data.username);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
  logout: () => {
    localStorage.removeItem("storygarden-token");
    localStorage.removeItem("storygarden-name");
    localStorage.removeItem("storygarden-username");
  },
};

export default AuthService;
