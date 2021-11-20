import axios from 'axios';

const defaultOptions = {
  baseURL: 'https://hack-dnd.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiInstance = axios.create(defaultOptions);

export default apiInstance;
