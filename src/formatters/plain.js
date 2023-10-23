import isObject from 'lodash';
import isString from 'lodash';

const complexValue = (val) => {
  if (isObject(val)) {
    return '[complex value]';
  }

  if(isString(val)) return `'${val}'`;

  return `${val}`;
}

const plain = (value) => {
  const iter = (curentVal) => {
    const result = curentVal.flatMap(({key, oldValue, newValue, status, children,}) => {
      console.log(key)
      if (status === 'nested') {
        return iter(children);
      }
      if (status === 'added') {
        return `Property '${key}' was added with value: ${complexValue(newValue)}`;
      }
      if (status === 'deleted') {
        return `Property '${key}' was removed`;
      }
      if (status === 'changed') {
        return `Property '${key}' was updated. From ${complexValue(oldValue)} to ${complexValue(newValue)}`;
      }
      if (status === 'unchanged') {
        return [];
      }
    });
    return result;
  };
  return iter(value);
};

export default plain;
