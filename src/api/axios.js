
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL, // Uses the environment variable
});

export default instance;
