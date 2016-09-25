import { toArray } from './function.modules';

export const each = (obj, callback, scope) => {
  Object.keys(obj).forEach((item) => {
    callback(obj[item], item, obj);
  }, scope);
};

export const getType = value => Object.prototype.toString.call(value).replace(/\W/g, '').slice(6);

export const isType = (value, type) => new RegExp(`^(${type})$`, 'i').test(getType(value));

export const mixin = function () {
  const source = toArray(arguments);
  const destination = source.shift();

  source.forEach((obj) => {
    each(obj, (value, key) => {
      destination[key] = value;
    });
  });

  return destination;
};
