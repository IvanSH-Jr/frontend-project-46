import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  const sortedKeys = _.sortBy(_.union(keysObj1, keysObj2));

  /*
added (+) — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted (-)— ключ был в первом объекте, но отсутствует во втором
changed (-)(+)— ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
*/
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
  console.log(difference);
  let result = '';
  difference.forEach(({
    key, value, newValue, status,
  }) => {
    if (status === 'added') {
      result = `${result}\n+ ${key}: ${value}`;
    } else if (status === 'deleted') {
      result = `${result}\n- ${key}: ${value}`;
    } else if (status === 'changed') {
      result = `${result}\n- ${key}: ${value}\n+ ${key}: ${newValue}`;
    } else {
      result = `${result}\n  ${key}: ${value}`;
    }
  });
  result = `{${result}\n}`;
  console.log(result);
};

export default getDiff;
