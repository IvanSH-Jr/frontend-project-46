import fileParser from './parser.js';
import { readFile, getFileExt } from './fileReader.js';
import compareTrees from './comparator.js';
import formatter from './formatters/index.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const fileContent1 = readFile(filePath1);
  const fileContent2 = readFile(filePath2);
  const fileExt1 = getFileExt(filePath1);
  const fileExt2 = getFileExt(filePath2);
  const parsedFile1 = fileParser(fileContent1, fileExt1);
  const parsedFile2 = fileParser(fileContent2, fileExt2);
  const treeOfDiff = compareTrees(parsedFile1, parsedFile2);
  const result = formatter(treeOfDiff, format);
  return result;
};

export default genDiff;
