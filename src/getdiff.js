import _ from 'lodash';

const getDiff = (tree1, tree2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(tree1), Object.keys(tree2)));
  
  /*
added (+) — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted (-)— ключ был в первом объекте, но отсутствует во втором
changed (-)(+)— ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
*/
  const difference = sortedKeys.map((key) => {
    if (!Object.hasOwn(tree1, key)) {
      return {key, value: tree2[key], status: 'added'};
    } else if (!Object.hasOwn(tree2, key)) {
      return {key, value: tree1[key], status: 'deleted'};
    } else if (tree1[key] !== tree2[key]) {
      return {key, value: tree1[key], newValue: tree2[key], status: 'changed'};
    } else {
      return {key, value: tree1[key], status: 'unchanged'};
    }
  });
  console.log(difference);
  let result = '';
  difference.forEach(({key, value, newValue, status}) => {
    if (status === 'added') {
      result = `${result}\n+ ${key}: ${value}`;
    } else if (status === 'deleted') {
      result = `${result}\n- ${key}: ${value}`;
    } else if (status === 'changed') {
      result = `${result}\n- ${key}: ${value}\n+ ${key}: ${newValue}`;
    } else {
      result = `${result}\n  ${key}: ${value}`;
    }
  })

  console.log(result)
};

export default getDiff;
