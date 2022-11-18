import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3005/api'}`,
});

export const setToken = (token:string) => {
  api.defaults.headers.common.Authorization = token;
};

export const get = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export default api;