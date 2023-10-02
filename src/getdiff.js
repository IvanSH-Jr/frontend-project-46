import _ from 'lodash';

const getDiff = (tree1, tree2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(tree1), Object.keys(tree2)));
  console.log(sortedKeys);
  let result = '';
  /*
added (+) — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted (-)— ключ был в первом объекте, но отсутствует во втором
changed (-)(+)— ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
*/
  sortedKeys.forEach((key) => {
    if (!Object.hasOwn(tree1, key)) {
      result = `${result}\n + ${key}: ${tree2[key]}`;
    } else if (!Object.hasOwn(tree2, key)) {
      result = `${result}\n - ${key}: ${tree1[key]}`;
    } else if (tree1[key] !== tree2[key]) {
      result = `${result}\n - ${key}: ${tree1[key]}\n + ${key}: ${tree2[key]}`;
    } else {
      result = `${result}\n   ${key}: ${tree2[key]}`;
    }
  });

  result = `{${result}\n}`;
  console.log(result);

  return result;
};

export default getDiff;
