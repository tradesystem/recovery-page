import axios from "axios";

const api2 = axios.create({
  baseURL: "https://apisiacweb.herokuapp.com",
  headers: {
    Authorization: "40179187000157",
  },
});

export default api2;
