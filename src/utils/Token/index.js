const SESSION_STORAGE_KEY = 'token';

export const getToken = () =>
  JSON.parse(localStorage.getItem(SESSION_STORAGE_KEY));
export const setToken = (token) =>
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(token));
