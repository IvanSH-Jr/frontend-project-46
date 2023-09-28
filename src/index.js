import { readFileSync } from 'node:fs';
import { extname } from 'node:path';

import { fileParser } from './parser.js';

const readContent = (file) => readFileSync(file);
const getFileExt = (file) => extname(file).slice(1);

const getContent = (filePath_1, filePath_2) => {
  const fileType_1 = getFileExt(filePath_1);
  const fileType_2 = getFileExt(filePath_2);
  const fileContent_1 = readContent(filePath_1);
  const fileContent_2 = readContent(filePath_2);
  const parseFileContent_1 = fileParser(fileContent_1, fileType_1);
  const parseFileContent_2 = fileParser(fileContent_2, fileType_2);

  return [parseFileContent_1, parseFileContent_2];
};

export default getContent;