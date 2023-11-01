import * as fs from 'node:fs';
import path from 'node:path';
import fileParser from './parser.js';
import compareTrees from './comparator.js';
import formatter from './formatters/index.js';

const getFileExt = (filePath) => path.extname(filePath).slice(0);
const makePath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => fs.readFileSync(makePath(filePath), 'utf8');

const getParsedData = (filePath) => {
  const fileContent = readFile(filePath);
  const fileExt = getFileExt(filePath);
  const parsedData = fileParser(fileContent, fileExt);
  return parsedData;
};

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const [parsedFile1, parsedFile2] = [getParsedData(filePath1), getParsedData(filePath2)];
  const treeOfDiff = compareTrees(parsedFile1, parsedFile2);
  const result = formatter(treeOfDiff, format);
  return result;
};

export default genDiff;
