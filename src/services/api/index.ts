import axios from 'axios';
import environment from '~/config/environment';

const api = axios.create({
  baseURL: environment.apiUrl,
});

export default api;
