const SESSION_STORAGE_KEY = 'token';

export const getToken = () =>
  JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY));
export const setToken = (token) =>
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(token));
