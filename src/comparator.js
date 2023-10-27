import _ from 'lodash';

const compareTrees = (obj1, obj2) => {
  if (_.isEmpty(obj1) && _.isEmpty(obj2)) return '{}';
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  const unionKeys = _.union(keysObj1, keysObj2);
  const sortedKeys = _.sortBy(unionKeys);
  const result = sortedKeys.flatMap((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { key, status: 'nested', children: compareTrees(obj1[key], obj2[key]) };
    }
    if (!Object.hasOwn(obj1, key)) {
      return { key, newValue: obj2[key], status: 'added' };
    }
    if (!Object.hasOwn(obj2, key)) {
      return { key, oldValue: obj1[key], status: 'deleted' };
    }
    if (
      obj1[key] === obj2[key]
    ) {
      return {
        key, oldValue: obj1[key], status: 'unchanged',
      };
    }
    return {
      key, oldValue: obj1[key], newValue: obj2[key], status: 'changed',
    };
  });
  return result;
};

export default compareTrees;
