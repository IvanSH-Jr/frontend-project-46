import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  if (_.isEmpty(obj1) && _.isEmpty(obj2)) return '{}';

  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  const unionKeys = _.union(keysObj1, keysObj2);
  const sortedKeys = _.sortBy(unionKeys);

  const difference = sortedKeys.map((key) => {
    if (!Object.hasOwn(obj1, key)) {
      return { key, value: obj2[key], status: 'added' };
    } if (!Object.hasOwn(obj2, key)) {
      return { key, value: obj1[key], status: 'deleted' };
    } if (obj1[key] !== obj2[key]) {
      return {
        key, value: obj1[key], newValue: obj2[key], status: 'changed',
      };
    }
    return { key, value: obj1[key], status: 'unchanged' };
  });

  const test = difference.map(({
    key, value, newValue, status,
  }) => {
    const added = '+';
    const deleted = '-';
    if (status === 'added') {
      return ` ${added} ${key}: ${value}`;
    } if (status === 'deleted') {
      return ` ${deleted} ${key}: ${value}`;
    } if (status === 'changed') {
      return ` ${deleted} ${key}: ${value}\n ${added} ${key}: ${newValue}`;
    }
    return `   ${key}: ${value}`;
  });

  return ['{', ...test, '}'].join('\n');
};

export default getDiff;
