import fileParser from './parser.js';
import compareTrees from './comparator.js';
import formatter from './formatters/index.js';

const genDiff = (file1, file2, format = 'stylish') => {
  const fileContent1 = fileParser(file1);
  const fileContent2 = fileParser(file2);
  const treeOfDiff = compareTrees(fileContent1, fileContent2);
  const result = formatter(treeOfDiff, format);
  return result;
};

export default genDiff;
