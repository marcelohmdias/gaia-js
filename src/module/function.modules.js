export const toArray = args => [].slice.call(args);

export const compose = function () {
  const list = toArray(arguments);
  const fn = list.shift();
  return (...params) => list.reduce((prev, curr) => curr(prev), fn(...params));
};
