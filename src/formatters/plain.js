import _ from 'lodash';

const complexValue = (val) => {
  if (_.isObject(val)) {
    return '[complex value]';
  }

  if (_.isString(val)) return `'${val}'`;

  return `${val}`;
};

const plain = (value) => {
  const iter = (curentVal, ancestor) => {
    const result = curentVal
      .flatMap(({
        key, oldValue, newValue, status, children,
      }) => {
        const pathToVal = `${ancestor}.${key}`;
        if (status === 'nested') {
          return iter(children, pathToVal);
        }
        if (status === 'added') {
          return `Property '${pathToVal.slice(1)}' was added with value: ${complexValue(newValue)}`;
        }
        if (status === 'deleted') {
          return `Property '${pathToVal.slice(1)}' was removed`;
        }
        if (status === 'changed') {
          return `Property '${pathToVal.slice(1)}' was updated. From ${complexValue(oldValue)} to ${complexValue(newValue)}`;
        }

        return [];
      })
      .join('\n');
    return result;
  };
  return iter(value, '');
};

export default plain;
