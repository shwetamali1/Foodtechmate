// api.js

import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: process.env.MIX_APP_PREFIX ? process.env.MIX_APP_PREFIX : "/",
  });
export default axiosInstance;
