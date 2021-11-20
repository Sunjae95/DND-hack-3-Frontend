export const getToken = (key) => JSON.parse(localStorage.getItem(key));
export const setToken = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
