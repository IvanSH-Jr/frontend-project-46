import _ from 'lodash';
import formatter from './formater/stylish.js';

const getDiff = (obj1, obj2, format) => {
  const iter = (currentObj1, currentObj2) => {
    if (_.isEmpty(currentObj1) && _.isEmpty(currentObj2)) return '{}';

    const keysObj1 = Object.keys(currentObj1);
    const keysObj2 = Object.keys(currentObj2);
    const unionKeys = _.union(keysObj1, keysObj2);
    const sortedKeys = _.sortBy(unionKeys);

    const statusesOfValues = sortedKeys.flatMap((key) => {
      if (_.isObject(currentObj1[key]) && _.isObject(currentObj2[key])) {
        return { key, status: 'nested', children: iter(currentObj1[key], currentObj2[key]) };
      }
      if (!Object.hasOwn(currentObj1, key)) {
        return { key, newValue: currentObj2[key], status: 'added' };
      }
      if (!Object.hasOwn(currentObj2, key)) {
        return { key, oldValue: currentObj1[key], status: 'deleted' };
      }
      if (
        currentObj1[key] === currentObj2[key]
      ) {
        return {
          key, oldValue: currentObj1[key], status: 'unchanged',
        };
      }

      return {
        key, oldValue: currentObj1[key], newValue: currentObj2[key], status: 'changed',
      };
    });
    return statusesOfValues;
  };
  console.log(format);
  const getStatuses = iter(obj1, obj2);
  const result = getStatuses !== '{}' ? formatter(getStatuses, '.') : '{}';
  return result;
};

export default getDiff;
