export const updateObject = (state, updatedObject) => {
  return {
    ...state,
    ...updatedObject
  };
};

export const getFromStorage = (key, initial) => {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : initial;
};

export const updateStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromObject = (object, keys) => {
  keys.forEach(key => {
    delete object[key];
  });
};

export function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}

export const getRandNum = number =>
  Math.floor(Math.random() * Math.floor(number));

export const checkValidity = (value, rules) => {
  if (!rules) return;
  let isValid = false;

  if (rules.required) {
    isValid = value.trim() !== "";
  }

  if (rules.minLength) {
    isValid = value.length > rules.minLength;
  }

  if (rules.includes) {
    isValid = rules.includes.every(character => {
      return value.includes(character);
    });
  }
  return isValid;
};
