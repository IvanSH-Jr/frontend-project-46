import { readFileSync } from 'node:fs';
import { extname } from 'node:path';

import fileParser from './parser.js';

const readContent = (file) => readFileSync(file);
const getFileExt = (file) => extname(file).slice(1);

const getContent = (filePath1, filePath2) => {
  const fileType1 = getFileExt(filePath1);
  const fileType2 = getFileExt(filePath2);
  const fileContent1 = readContent(filePath1);
  const fileContent2 = readContent(filePath2);
  const parseFileContent1 = fileParser(fileContent1, fileType1);
  const parseFileContent2 = fileParser(fileContent2, fileType2);

  return [parseFileContent1, parseFileContent2];
};

export default getContent;
