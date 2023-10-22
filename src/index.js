import fileParser from './parser.js';
import getDiff from './getdiff.js';

const genDiff = (file1, file2, format = 'stylish') => {
  const fileContent1 = fileParser(file1);
  const fileContent2 = fileParser(file2);
  const treeOfDiff = getDiff(fileContent1, fileContent2, format);

  return treeOfDiff;
};

export default genDiff;
