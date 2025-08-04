import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mini-linkedin-ezyb.onrender.com/api',
});

// Add token to headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  // Don't send token for /auth routes (e.g., login/register)
  if (token && !config.url.includes('/auth')) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;




