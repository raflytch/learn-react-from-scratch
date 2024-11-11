import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const Login = (data, callback) => {
  return axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((response) => {
      callback(true, response.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
