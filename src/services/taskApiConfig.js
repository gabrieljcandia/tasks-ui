const axios = require('axios');

let taskApiConfig = axios.create({
  baseURL: process.env.REACT_APP_TASK_API_BASE_URL
});

taskApiConfig.interceptors.response.use(response => {
  // Triggered with 2xx status code responses
  return response.data;
}, error => {
  // Triggered with any other status code
  return error;
});

export default taskApiConfig;
