import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.github.com/users/ilcreatore32",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default Api;
