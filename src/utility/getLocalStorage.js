export const getFromStorage = (key, initial) => {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : initial;
};

export const updateStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
