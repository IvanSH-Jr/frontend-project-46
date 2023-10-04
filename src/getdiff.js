import _ from 'lodash';

const getDiff = (tree1, tree2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(tree1), Object.keys(tree2)));
  const difference = {};
  /*
added (+) — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted (-)— ключ был в первом объекте, но отсутствует во втором
changed (-)(+)— ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
*/
  sortedKeys.forEach((key) => {
    if (!Object.hasOwn(tree1, key)) {
      difference[key] = 'added';
    } else if (!Object.hasOwn(tree2, key)) {
      difference[key] = 'deleted';
    } else if (tree1[key] !== tree2[key]) {
      difference[key] = 'changed';
    } else {
      difference[key] = 'unchanged';
    }
  });
  console.log(difference);
  let result = '';
  for (const [key, value] of Object.entries(difference)) {
    if (value === 'added') {
      result = `${result}\n+ ${key}: ${tree2[key]}`;
    } else if (value === 'deleted') {
      result = `${result}\n- ${key}: ${tree1[key]}`;
    } else if (value === 'changed') {
      result = `${result}\n- ${key}: ${tree1[key]}\n+ ${key}: ${tree2[key]}`;
    } else {
      result = `${result}\n  ${key}: ${tree1[key]}`;
    }
  }

  result = `{\n${result}\n}`;
  console.log(result);

  return result;
};

export default getDiff;
