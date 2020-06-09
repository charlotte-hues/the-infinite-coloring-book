const removeFromObject = (object, keys) => {
  keys.forEach(key => {
    delete object[key];
  });
};
export default removeFromObject;
